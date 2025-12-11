import { NextRequest, NextResponse } from "next/server";


let requestCount = 0;

export function proxy(req: NextRequest){
    if(req.url != "/favicon.ico"){
        requestCount++;
    }
    
    console.log("request count: ", requestCount)
    return NextResponse.next();
}

export const config = {
    matcher: '/api/:path*'
}