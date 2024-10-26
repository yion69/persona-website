declare namespace NodeJS {
    interface ProcessEnv {
        SERVER_PORT: number,
        DB_USERNAME: string,
        DB_PASSWORD: string,
        DB_SERVER: string,
    }
}