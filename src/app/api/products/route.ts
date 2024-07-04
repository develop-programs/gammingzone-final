import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const connection = await prisma.$connect();
    const data = await prisma.post.findMany();
    return await NextResponse.json(data);
  } catch (error) {
    return await NextResponse.json({ message: error });
  }
}
