import { Movie } from "../types/Movie"
import { BaseDatabase } from "./BaseDatabase"

export class MovieDataBase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE"

    async create({id, title, description, duration_in_minutes, year_of_release}: any): Promise<void> {
        await MovieDataBase.connection
        .insert({
            id,
            title,
            description,
            duration_in_minutes,
            year_of_release
        })
        .into(MovieDataBase.TABLE_NAME)
    }
}