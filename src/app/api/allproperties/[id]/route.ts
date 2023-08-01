import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../../lib/prisma";
export async function GET(request:NextRequest){


  const requestData = request.nextUrl.pathname.split('/')[3]
    const result = await prisma.properties.findUnique({
        where:{
          id:parseInt(requestData)
        }
      });

    return NextResponse.json({result})
}