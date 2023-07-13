import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";


import bcrypt from 'bcrypt'

interface DataTypes{
    email:string,
    password:string,
    name:string
}

export async function POST( request:NextRequest){
    const req = await request.json();
    let hash = process.env.SALT_ROUNDS as string;
    const data = req.data;
    
    const hashedPassword = await bcrypt.hash(data.password, parseInt(hash));
    if(!hashedPassword){
        throw new Error("Password has failed")
    }
    const userEmail = data.email as string

    const user = await prisma.user.findFirst({
        where: { email:userEmail }, 
      })
    if(user){
        throw new Error("User already exists")
    }
    const result = await prisma.user.upsert({
        where:{
            email: userEmail
        } ,
        update:{

        },
        create:{
            name:data.name,
            password:hashedPassword,
            email:data.email,
        }
    })
    
   
    return NextResponse.json(result)
}