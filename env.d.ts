declare global{
    interface ProcessEnv{
    SENTRY_DSN : string;
    SECRET: string;
    PORT: number;
    DATABASE_URL: string;
}
}