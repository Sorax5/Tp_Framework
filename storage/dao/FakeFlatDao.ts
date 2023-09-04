import {FlatDao} from "../../logic/FlatDao";
import {Flat} from "../../logic/Flat";

export class FakeFlatDao implements FlatDao{

    private flats: Flat[] = [];

    constructor(){
        let flat1 = new Flat(1, "Auxonne", 21130, 9, 3);
        let flat2 = new Flat(2, "Dijon", 21000, 5, 2);
        let flat3 = new Flat(3, "Dijon", 21000, 3, 1);
        let flat4 = new Flat(4, "Dijon", 21000, 4, 2);
        let flat5 = new Flat(5, "Dijon", 21000, 2, 1);
        let flat6 = new Flat(6, "Dijon", 21000, 1, 1);
        let flat7 = new Flat(7, "Dole", 21000, 6, 2);
        let flat8 = new Flat(8, "Dole", 21000, 4, 1);
        let flat9 = new Flat(9, "Dole", 21000, 3, 1);

        this.flats.push(flat1);
        this.flats.push(flat2);
        this.flats.push(flat3);
        this.flats.push(flat4);
        this.flats.push(flat5);
        this.flats.push(flat6);
        this.flats.push(flat7);
        this.flats.push(flat8);
        this.flats.push(flat9);
    }

    createFlat(flat: Flat): void {
        this.flats.push(flat);
    }

    deleteFlat(flatId: number): void {
        this.flats = this.flats.filter(flat => flat.id !== flatId);
    }

    existsFlat(flatId: number): boolean {
        return false;
    }

    readAllFlats(): Flat[] {
        return this.flats;
    }

    readFlat(flatId: number): Flat {
        return this.flats.find(flat => flat.id === flatId);
    }

    updateFlat(flat: Flat): void {
        this.flats = this.flats.map(f => f.id === flat.id ? flat : f);
    }

}