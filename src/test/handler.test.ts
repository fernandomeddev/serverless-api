import { handler, IUserDTO } from '../create-user';
import { APIGatewayProxyEvent } from 'aws-lambda';

// Mocking the database function
jest.mock('./database', () => ({
  prismaDatabase: {
    user: {
      create: jest.fn().mockResolvedValue({ id: '1234567', name: 'John', position: 'Developer', age: '30' }),
    },
  },
}));

describe('handler', () => {
  it('should create a new user and return 200 status code', async () => {
    // Mock APIGatewayProxyEvent
    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ name: 'John', position: 'Developer', age: '30' } as IUserDTO),
        httpMethod: 'POST',
        path: '/users',
        requestContext: {} as any,
        headers: {} as any,
        multiValueHeaders: {} as any,
        multiValueQueryStringParameters: {} as any,
        pathParameters: {} as any,
        queryStringParameters: {} as any,
        stageVariables: {} as any,
        isBase64Encoded: false,
        resource: ''
    };

    // Call the handler function
    const result = await handler(event);

    // Assertions
    expect(result.statusCode).toEqual(200);
    expect(JSON.parse(result.body)).toEqual({ id: 1, name: 'John', position: 'Developer', age: '30' });
  });

  it('should return 404 status code if some fields are empty', async () => {
    // Mock APIGatewayProxyEvent with empty fields
    const event: APIGatewayProxyEvent = {
        body: JSON.stringify({ name: '', position: 'Developer', age: '30' } as IUserDTO),
        httpMethod: 'POST',
        path: '/users',
        requestContext: {} as any,
        headers: {} as any,
        multiValueHeaders: {} as any,
        multiValueQueryStringParameters: {} as any,
        pathParameters: {} as any,
        queryStringParameters: {} as any,
        stageVariables: {} as any,
        isBase64Encoded: false,
        resource: ''
    };

    // Call the handler function
    const result = await handler(event);

    // Assertions
    expect(result.statusCode).toEqual(404);
    expect(JSON.parse(result.body)).toEqual('Some fields are empty');
  });
});
