import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";


interface AddApartments{
    title:string,
    text:string,
    city:string,
    rooms:string,
    bathroom:string,
    space:string,
    price:string,
    type:string,
    latitude:string,
    longitude:string,
    images:string[]
}

export async function POST(request:NextRequest){
    const req = await request.json();
    const data = req.data as AddApartments;
    const result = await prisma.apartments.create({
        data:{
            title:data.title,
            text:data.text,
            city:data.city,
            rooms:data.rooms,
            bathroom:data.bathroom,
            space:data.space,
            price:data.price,
            type:data.type,
            latitude:data.latitude,
            longitude:data.longitude,
            images:data.images
        }
    })

    return NextResponse.json({result})
}