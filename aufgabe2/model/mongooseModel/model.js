const mongoose = require('mongoose');

const kundeSchema = new mongoose.Schema({
    kundenID: Number,
    firma: String,
    vorname: String,
    nachname: String,
    adresse: String,
    passnummer: String,
    geburtsdatum: String,
    email: String
});

const lieferscheinSchema = new mongoose.Schema({
    kundenId: Number,
    lieferscheinNummer: Number,
    position: Object,
    datumVon: String,
    datumBis: String,
    beschreibung: String
});

const positionSchema = new mongoose.Schema({
    positionenID: Number,
    Name: String,
    preis_pro_tag: Number,
    preis_pro_woche: Number,
    preis_pro_monat: Number
});

const rechnungSchema = new mongoose.Schema({
    id: Number,
    steuerNummer: String,
    adresse: String,
    lieferdatum: String,
    position: Object,
    anzahl: Number
});

let Kunde = mongoose.model('Kunde', kundeSchema, 'kunden');
let Lieferschein = mongoose.model('Lieferschein', lieferscheinSchema, 'lieferscheine');
let Position = mongoose.model('Position', positionSchema, 'positionen');
let Rechnung = mongoose.model('Rechnung', rechnungSchema, 'rechnungen');

module.exports = {Kunde, Lieferschein, Position, Rechnung}