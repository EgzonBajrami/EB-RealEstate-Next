import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
export async function GET(){
    const result = await prisma.apartments.findMany({
        orderBy: {
          createdAt: "desc",
        },
        skip:1
      });

    return NextResponse.json({result})
}