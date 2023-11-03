import { connect } from '@/dbConfig/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from "bcryptjs";
connect()

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const { username, email, password } = reqBody


        console.log(reqBody);

        //here i am checking for user already exists
        const user = await User.findOne({ email })

        if (user) {
            return NextResponse.json({ error: "User already Exists" }, { status: 400 })
        }

        //hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save()
        console.log(savedUser);


        return NextResponse.json({
            message: "User Created Successfully",
            success: true,
            savedUser
        })

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })

    }
}