import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
// import NextResponse from "next/server"

const prisma = new PrismaClient()

export async function POST(request) {
    const body = await request.json()
    const { name, email, password } = body.data

    if (!name || !email || !password) {
        return new Response("missing fields")
    }

    const exist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if (exist) {
        return new Response("user already exists")
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hash
        }
    })

    return new Response(JSON.stringify(user))
}