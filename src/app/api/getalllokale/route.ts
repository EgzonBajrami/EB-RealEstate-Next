import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
export async function GET(){
    const result = await prisma.lokale.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip:1
      });
    
    console.log(result);
    return NextResponse.json({result})
}