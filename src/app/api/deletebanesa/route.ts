import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";


interface AddApartments{
    id:number,
    type:string
}

export async function POST(request:NextRequest){
    const req = await request.json();
    const data = req as AddApartments;
    let result;

    if(data.type==='banesa'){
     result = await prisma.apartments.delete({
        where:{
            id:data.id
        }
    })
    }
    
    if(data.type==='shtepia'){
        result = await prisma.houses.delete({
            where:{
                id:data.id
            }
        })
    }

    if(data.type==='lokale'){
        result = await prisma.lokale.delete({
            where:{
                id:data.id
            }
        })
    }

    if(data.type==='prona'){
        result = await prisma.properties.delete({
            where:{
                id:data.id
            }
        })
    }

    return NextResponse.json({result})
}