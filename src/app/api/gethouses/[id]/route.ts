import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../../lib/prisma";
export async function GET(request:NextRequest){

  console.log(request.nextUrl.pathname);

  const requestData = request.nextUrl.pathname.split('/')[3]
  console.log(requestData);
    const result = await prisma.houses.findUnique({
        where:{
          id:parseInt(requestData)
        }
      });
    
    console.log(result);
    return NextResponse.json({result})
}