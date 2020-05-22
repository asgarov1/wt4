module.exports = class Position {
    constructor(positionenID, positionenName, position_preis, position_preis_pro_woche, position_preis_pro_monat) {
        this._positionenID = positionenID;
        this._positionenName = positionenName;
        this._position_preis = position_preis;
        this._position_preis_pro_woche = position_preis_pro_woche;
        this._position_preis_pro_monat = position_preis_pro_monat;
    }
    preis_pro_Tag_aktualisieren(){
        return this.preis;
    }


    get positionenID() {
        return this._positionenID;
    }

    get positionenName() {
        return this._positionenName;
    }

    get position_preis() {
        return this._position_preis;
    }

    get position_preis_pro_woche() {
        return this._position_preis_pro_woche;
    }

    get position_preis_pro_monat() {
        return this._position_preis_pro_monat;
    }
}