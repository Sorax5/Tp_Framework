import {FlatDao} from "../../logic/FlatDao";
import {Flat} from "../../logic/Flat";
import {Database} from "../Database";

class FlatDaoDatabase implements FlatDao {
    private db : Database;
    constructor(database : Database) {
        this.db = database;
    }

    createFlat(flat: Flat): void {
        this.db.insert("Flat", [
            {id: flat.id, quarters : flat.quarters, price : flat.price, area : flat.area, floor : flat.floor},
        ]);
    }

    deleteFlat(flatId: number): void {
        this.db.delete("Flat", "id = " + flatId);
    }

    existsFlat(flatId: number): boolean {
        return this.db.exists("Flat", "id = " + flatId);
    }

    readAllFlats(): Flat[] {
        const results = this.db.query("SELECT * FROM Flat");
        return results.map((row: any) => new Flat(row.id, row.quarters, row.price, row.area, row.floor));
    }

    readFlat(flatId: number): Flat {
        const results = this.db.query("SELECT * FROM Flat WHERE id = " + flatId);
        return new Flat(results[0].id, results[0].quarters, results[0].price, results[0].area, results[0].floor);
    }

    updateFlat(flat: Flat): void {
        this.db.update("Flat", [
            {id: flat.id, quarters : flat.quarters, price : flat.price, area : flat.area, floor : flat.floor},
        ], "id = " + flat.id);
    }

}