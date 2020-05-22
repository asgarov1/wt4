module.exports = class Position {
    constructor(positionenID, positionenName, position_preis, position_preis_pro_woche, position_preis_pro_monat) {
        this.id = positionenID;
        this.name = positionenName;
        this.preis_pro_tag = position_preis;
        this.preis_pro_woche = position_preis_pro_woche;
        this.preis_pro_monat = position_preis_pro_monat;
    }
    preis_pro_Tag_aktualisieren(){
        return this.preis;
    }
}