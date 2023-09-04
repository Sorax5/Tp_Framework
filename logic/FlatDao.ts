import { Flat } from "./Flat";

/**
 * @interface FlatDao
 */
export interface FlatDao {
    /**
     * Creates a flat.
     * @param flat Flat to create.
     */
    createFlat(flat: Flat): void;

    /**
     * Reads a flat.
     * @param flatId Id of the flat to read.
     */
    readFlat(flatId: number): Flat;

    /**
     * Updates a flat.
     * @param flat Flat to update.
     */
    updateFlat(flat: Flat): void;

    /**
     * Deletes a flat.
     * @param flatId Id of the flat to delete.
     */
    deleteFlat(flatId: number): void;

    /**
     * Reads all flats.
     */
    readAllFlats(): Flat[];

    /**
     * Checks if a flat exists.
     * @param flatId
     */
    existsFlat(flatId: number): boolean;
}