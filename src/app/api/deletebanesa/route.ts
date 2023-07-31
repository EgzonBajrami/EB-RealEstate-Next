import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";


interface AddApartments{
    id:number,
}

export async function POST(request:NextRequest){
    const req = await request.json();
    const data = req.data as AddApartments;
    const result = await prisma.apartments.delete({
        where:{
            id:data.id
        }
    })
    console.log(result);

    return NextResponse.json({result})
}