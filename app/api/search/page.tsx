import dbConnect from "@/lib/mongodb";
import ServiceModel, { IService } from "@/models/services";
import { Rows } from "lucide-react";
import { Query } from "mongoose";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

type Data = {
  results: IService[];
};

export default async (req: NextApiRequest, res: NextResponse<Data>) => {
  await dbConnect();
  const {query}=req.query;
  if(!query || typeof query !== 'string'){
    NextResponse.json({ results:[]}, { status: 400 })
    return;
  }


const results = await ServiceModel.find({
    $or:[
        {name:{$regex:query,$options:"i"}},
        {description:{$regex:query,$options:"i"}}
    ]
})
NextResponse.json({ results}, { status: 200 })
};