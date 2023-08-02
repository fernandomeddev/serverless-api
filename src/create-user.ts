import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaDatabase } from "./database";

export type IUserDTO = {
    name: string,
    position: string
    age: string
}

export const handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    const { name, position, age } = JSON.parse(event.body!) as IUserDTO

    if (!name || !position || !age) return { statusCode: 404, body: JSON.stringify('Some fields are empty')};

    const result = await prismaDatabase.user.create({
        data: {
            name, position, age
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}