/**
 * Class Flat represents a flat in the building.
 */
export class Flat{
    private _id: number;
    private _quarters: String;
    private _price: number;
    private _area: number;
    private _floor: number;

    /**
     * Constructor of the class Flat.
     * @param id Identifier of the flat.
     * @param quarters Quarters of the flat.
     * @param price Price of the flat.
     * @param area Area of the flat.
     * @param floor Floor of the flat.
     */
    constructor(id: number, quarters: String, price: number, area: number, floor: number){
        this._id = id;
        this._quarters = quarters;
        this._price = price;
        this._area = area;
        this._floor = floor;
    }

    /**
     * Getter of the class Flat.
     */
    get id(): number {
        return this._id;
    }

    /**
     * Setter of the class Flat.
     * @param value Value of the identifier of the flat.
     */
    set id(value: number) {
        this._id = value;
    }

    /**
     * Getter of the class Flat.
     */
    get quarters(): String {
        return this._quarters;
    }

    /**
     * Setter of the class Flat.
     * @param value Value of the quarters of the flat.
     */
    set quarters(value: String) {
        this._quarters = value;
    }

    /**
     * Getter of the class Flat.
     */
    get price(): number {
        return this._price;
    }

    /**
     * Setter of the class Flat.
     * @param value Value of the price of the flat.
     */
    set price(value: number) {
        this._price = value;
    }

    /**
     * Getter of the class Flat.
     */
    get area(): number {
        return this._area;
    }

    /**
     * Setter of the class Flat.
     * @param value Value of the area of the flat.
     */
    set area(value: number) {
        this._area = value;
    }

    /**
     * Getter of the class Flat.
     */
    get floor(): number {
        return this._floor;
    }

    /**
     * Setter of the class Flat.
     * @param value Value of the floor of the flat.
     */
    set floor(value: number) {
        this._floor = value;
    }
}