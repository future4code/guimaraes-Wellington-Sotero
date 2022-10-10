import knex from 'knex'


export abstract class UserDatabase {
    private static CONNECTION_KNEX: Knex | null = null

    protected setConnection() {
        if (UserDatabase.CONNECTION_KNEX === null) {
            UserDatabase.CONNECTION_KNEX = knex({
                client: "mysql",
                connection: {
                    host: process.env.DB_HOST,
                    port: 3306,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_DATABASE_NAME,
                }
            })
        }
        return UserDatabase.CONNECTION_KNEX
    }

    public static async desconnectDB() {
        if (UserDatabase.CONNECTION_KNEX !== null) {
           await UserDatabase.CONNECTION_KNEX.destroy()
           UserDatabase.CONNECTION_KNEX = null
        }
    }

}