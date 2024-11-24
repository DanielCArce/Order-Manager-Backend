declare global{
    namespace NodeJS{
        interface ProcessEnv {
            NODE_ENV: 'Development' | 'Production';
            SENTRY_DSN: string;
            SECRET: string;
            PORT: number;
            DATABASE_URL: string;
     }
 }
}