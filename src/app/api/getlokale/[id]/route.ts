import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../../lib/prisma";
export async function GET(request:NextRequest){

 

  const requestData = request.nextUrl.pathname.split('/')[3]
  console.log(requestData);
    const result = await prisma.lokale.findUnique({
        where:{
          id:2
        }
      });
    
    console.log(result);
    return NextResponse.json({result})
}