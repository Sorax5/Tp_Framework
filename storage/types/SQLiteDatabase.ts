import {Database} from "../Database";
import * as sqlite3 from "sqlite3";

class SQLiteDatabase implements Database {
    private db: sqlite3.Database;

    /**
     * Creates a new SQLite database
     * @param filename
     */
    constructor(filename: string) {
        this.db = new sqlite3.Database(filename);
    }

    /**
     * Creates a new table in the database sqlite3
     * @param tableName
     * @param columns
     */
    createTable(tableName: string, columns: string[]) {
        this.db.run("CREATE TABLE " + tableName + " (" + columns.join(", ") + ")");
    }

    /**
     * Inserts a new row into the database sqlite3
     * @param tableName
     * @param values
     */
    insert(tableName: string, values: any[]) {
        this.db.run("INSERT INTO " + tableName + " (" + values.map(value => value.name).join(", ") + ") VALUES (" + values.map(value => value.value).join(", ") + ")");
    }

    /**
     * Queries the database sqlite3
     * @param sql
     */
    query(sql: string): any[] {
        const results = this.db.query(sql);
        return results.map((row: any) => row);
    }

    /**
     * Updates a row in the database sqlite3
     * @param tableName
     * @param values
     * @param where
     */
    update(tableName: string, values: any[], where: string): void {
        this.db.run("UPDATE " + tableName + " SET " + values.map(value => value.name + " = '" + value.value + "'").join(", ") + " WHERE " + where);
    }

    /**
     * Deletes a row in the database sqlite3
     * @param tableName
     * @param where
     */
    delete(tableName: string, where: string): void {
        this.db.run("DELETE FROM " + tableName + " WHERE " + where);
    }

    /**
     * Checks if a row exists in the database sqlite3
     * @param tableName
     * @param where
     */
    exists(tableName: string, where: string): boolean {
        const result = this.db.query("SELECT * FROM " + tableName + " WHERE " + where);
        return result.length > 0;
    }

    /**
     * Closes the database sqlite3
     */
    close(): void {
        this.db.close();
    }
}