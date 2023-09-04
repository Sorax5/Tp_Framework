export interface Database {
    /**
     * Create a new table
     * @param tableName
     * @param columns
     */
    createTable(tableName: string, columns: string[]): void;

    /**
     * Insert a new row into the table
     * @param tableName
     * @param values
     */
    insert(tableName: string, values: any[]): void;

    /**
     * Query the database
     * @param sql
     */
    query(sql: string): any[];

    /**
     * Update a row in the table
     * @param tableName
     * @param values
     * @param where
     */
    update(tableName: string, values: any[], where: string): void;

    /**
     * Delete a row from the table
     * @param tableName
     * @param where
     */
    delete(tableName: string, where: string): void;

    /**
     * Check if a row exists in the table
     * @param tableName
     * @param where
     */
    exists(tableName: string, where: string): boolean;

    /**
     * Close the database connection
     */
    close(): void;
}