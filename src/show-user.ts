import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { prismaDatabase } from "./database";
import { IUserDTO } from "./create-user";

type IUserUpdatedDTO = {
    userId: string,
}


export const handler = async (event: APIGatewayProxyEvent) : Promise<APIGatewayProxyResult> => {
    const { userId } = event.pathParameters as IUserUpdatedDTO
    const user = await prismaDatabase.user.findUnique({
        where: {
            id: userId
        }
    });

    if (!user) return { statusCode: 400, body: 'Nenhum Usuário encontrado' }

    return {
        statusCode: 200,
        body: JSON.stringify(user)
    }
}