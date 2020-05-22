module.exports = class Rechnung {
    constructor(id, steuerNummer, adresse, lieferdatum, position, anzahl) {
        this._id = id;
        this._steuerNummer = steuerNummer;
        this._adresse = adresse;
        this._lieferdatum = lieferdatum;
        this._position = position;
        this._anzahl = anzahl;
    }

    get id() {
        return this._id;
    }

    get steuerNummer() {
        return this._steuerNummer;
    }

    get adresse() {
        return this._adresse;
    }

    get lieferdatum() {
        return this._lieferdatum;
    }

    get position() {
        return this._position;
    }

    get anzahl() {
        return this._anzahl;
    }
}
