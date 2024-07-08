import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import ServiceModel from "@/models/services";

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const body = await req.json();
    const { title, description, price } = body;

    if (!title || !description || !price) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const newService = new ServiceModel({
      title,
      description,
      price,
    });

    await newService.save();

    console.log(newService);
    return NextResponse.json(
      { message: "Service added successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding service:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}



export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const services = await ServiceModel.find({});

    if (services.length === 0) {
      return NextResponse.json(
        { message: "No services found" },
        { status: 404 }
      );
    }

    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error("Error fetching services:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
