import {FlatDao} from "./FlatDao";
import {Flat} from "./Flat";

/**
 * Manages the flat {@link Flat}
 */
export class FlatManager{

    private flatDao : FlatDao;

    /**
     * Constructor of the class FlatManager.
     * @param dao Data access object of the flat.
     * @constructor
     */
    constructor(dao : FlatDao){
        this.flatDao = dao;
    }

    /**
     * Creates a flat.
     * @param flat Flat to create.
     */
    public createFlat(flat : Flat) : void{
        this.flatDao.createFlat(flat);
    }

    /**
     * Reads a flat.
     * @param id Identifier of the flat to read.
     */
    public readFlat(id : number) : Flat{
        return this.flatDao.readFlat(id);
    }

    /**
     * Updates a flat.
     * @param flat Flat to update.
     */
    public updateFlat(flat : Flat) : void{
        this.flatDao.updateFlat(flat);
    }

    /**
     * Deletes a flat.
     * @param id Identifier of the flat to delete.
     */
    public deleteFlat(id : number) : void{
        this.flatDao.deleteFlat(id);
    }

    /**
     * Reads all flats.
     */
    public readAllFlat() : Flat[]{
        return this.flatDao.readAllFlats();
    }

    /**
     * Checks if a flat exists.
     * @param id Identifier of the flat to check.
     */
    public existsFlat(id : number) : boolean{
        return this.flatDao.existsFlat(id);
    }
}