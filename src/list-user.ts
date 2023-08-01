import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaDatabase } from "./database";


export const handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    
    const result = await prismaDatabase.user.findMany()
    
    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}