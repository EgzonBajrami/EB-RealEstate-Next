import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { prisma } from "../../../../lib/prisma";
export async function GET(request:NextRequest){
    const result = await prisma.houses.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 3,
      });
    
    console.log(result);
    return NextResponse.json({result})
}