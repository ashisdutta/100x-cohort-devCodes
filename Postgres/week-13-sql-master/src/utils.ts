import { Client } from 'pg';

export async function getClient() {
    const client = new Client('postgresql://test_owner:npg_E5q2ZfFoCjGB@ep-spring-resonance-a5ssmzli-pooler.us-east-2.aws.neon.tech/test?sslmode=require&channel_binding=require');
    await client.connect();
    return client;
}