import { NextApiRequest, NextApiResponse } from "next";

import { SERVER_API_URL } from "../../../../appsettions";
import apiClient from "@/core/apiClient";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const token = await getToken({req});
    if (!token) {
        res.status(401).json({error: "Unauthorized"});
        return;
    }

    const header = {
        Authorization: `Bearer ${token.idToken}`
    };
    const externalApiUrl = `${SERVER_API_URL}/api/users`
    const apiResponse = await apiClient.get(externalApiUrl, header);
    return Response.json(res.status(apiResponse.status).json(apiResponse.data))
}