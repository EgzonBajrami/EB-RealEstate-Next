import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
export async function GET(){
    const result = await prisma.lokale.findMany({
        orderBy: {
          createdAt: "desc",
        },
        take: 3,
      });
    
    console.log(result);
    return NextResponse.json({result})
}