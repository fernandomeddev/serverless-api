import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaDatabase } from "./database";

type IUserDTO = {
    name: string,
    email: string
}

export const handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    const { name, email } = JSON.parse(event.body!) as IUserDTO

    const result = await prismaDatabase.user.create({
        data: {
            name, email
        }
    })

    return {
        statusCode: 200,
        body: JSON.stringify(result)
    }
}