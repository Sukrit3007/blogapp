import { ConnectDB } from "@/lib/config/database";
import BlogModel from "@/lib/models/BlogModel";
import { NextResponse } from "next/server";

const LoadDb = async ()=>{
    await ConnectDB();
}

LoadDb();

export async function GET(request) {

    const blogs = await BlogModel.find({});

    return NextResponse.json({blogs:blogs})
}

export async function POST(request) {

    const {title,content} = await request.json();
    await BlogModel.create({
        title,
        content
    })

    return NextResponse.json({msg:"post method hit"})
}

export async function DELETE(request) {

    const mongoId = await request.nextUrl.searchParams.get('mongoId')

    await BlogModel.findByIdAndDelete(mongoId);

    return NextResponse.json({msg:"post method hit"})
}

