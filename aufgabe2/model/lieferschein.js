module.exports = class Lieferschein {
    constructor(id, kundenId, lieferscheinNummer, position,
       datumVon, datumBis, beschreibung) {
        this._id = id;
        this._kundenId = kundenId;
        this._lieferscheinNummer = lieferscheinNummer;
        this._position = position;
        this._datumVon = datumVon;
        this._datumBis = datumBis;
        this._beschreibung = beschreibung;
    }

    getNumberOfRentedDays() {
        let date1 = new Date(this._datumVon);
        let date2 = new Date(this._datumBis);

        let differenceInTime = date2.getTime() - date1.getTime();
        return differenceInTime / (1000 * 3600 * 24);
    }

    calculatePrice() {
        let rentalDays = this.getNumberOfRentedDays();
        let numberOfMonths = Math.floor(rentalDays / 30);
        rentalDays %= 30;
        let numberOfWeeks = Math.floor(rentalDays / 7);
        rentalDays %= 7;
        let numberOfDays = rentalDays;

        return numberOfMonths * this._position.preis_pro_monat +
                numberOfWeeks * this._position.preis_pro_woche +
            numberOfDays * this._position.preis;
    }


    get kundenId() {
        return this._kundenId;
    }

    get lieferscheinNummer() {
        return this._lieferscheinNummer;
    }

    get position() {
        return this._position;
    }

    get datumVon() {
        return this._datumVon;
    }

    get datumBis() {
        return this._datumBis;
    }

    get beschreibung() {
        return this._beschreibung;
    }

    get id() {
        return this._id;
    }
}
