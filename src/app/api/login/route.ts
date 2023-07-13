import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
interface UserData{
    email:string,
    password:string,
}

export async function POST(request:NextRequest){
    const req = await request.json();
    const data = req.data;
    
    const userEmail = data.email as string
    
    const user = await prisma.user.findFirst({
        where: { email:userEmail }, 
      })

    if(!user){
        throw new Error("User doesn't exist!")
    }

    if(!(await bcrypt.compare(data.password,user.password))){
        throw Error('Password is incorrect');
    }

    let jwtsecret = process.env.JWT_SECRET as string;

    const token = jwt.sign({id:user.id}, jwtsecret)

    return NextResponse.json(token)
}