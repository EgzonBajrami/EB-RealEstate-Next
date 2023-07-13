import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
export async function GET(){
    const result = await prisma.apartments.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
    
    console.log(result);
    return NextResponse.json({result})
}