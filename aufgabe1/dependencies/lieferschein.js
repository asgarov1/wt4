module.exports = class Lieferschein {
    constructor(kundenId, nachname, lieferscheinNummer, position,
       datumVon, datumBis, beschreibung) {
        this.kundenId = kundenId;
        this.nachname = nachname;
        this.lieferscheinNummer = lieferscheinNummer;
        this.position = position;
        this.datumVon = datumVon;
        this.datumBis = datumBis;
        this.beschreibung = beschreibung;
    }

    getNumberOfRentedDays() {
        let date1 = new Date(this.datumVon);
        let date2 = new Date(this.datumBis);

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

        return numberOfMonths * this.position.preis_pro_monat +
                numberOfWeeks * this.position.preis_pro_woche +
            numberOfDays * this.position.preis;
    }
}
