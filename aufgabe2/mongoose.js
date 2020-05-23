const mongoose = require('mongoose');

const model = require('./model/mongooseModel/model');
const Kunde = model.Kunde;
const Lieferschein = model.Lieferschein;
const Rechnung = model.Rechnung;
const Position = model.Position;

let kunde = new Kunde({
    kundenId: 3,
    firma: 'Microsoft',
    vorname: 'Bill',
    nachname: 'Gates',
    adresse: 'Silicon Valley 1, USA',
    passnummer: '123456',
    geburtsdatum: '10.10.1955',
    email: 'bill@gates.com'
});

let position = new Position({
    id: 3,
    name: 'abc',
    preis_pro_tag: 10,
    preis_pro_woche: 50,
    preis_pro_monat: 200
});

let lieferschein = new Lieferschein({
    kundenId: 3,
    lieferscheinNummer: 123,
    position: position,
    datumVon: '10-05-2019',
    datumBis: '17-05-2019',
    beschreibung: 'Beispiel Beschreibung'
});

let rechnung1 = new Rechnung({
    id: 1,
    steuerNummer: 1234,
    adresse: 'Musterstr 164, 2100, AUT',
    lieferdatum: '10-05-2019',
    position: position,
    anzahl: 1
});

let rechnung2 = new Rechnung({
    id: 21,
    steuerNummer: 4312,
    adresse: 'Musterstr 99, 1100, AUT',
    lieferdatum: '23-04-2019',
    position: position,
    anzahl: 2
});

function create(entity) {
    entity.save().then((result) => {
        console.log(result);
    }).catch(err => {
        console.log(err);
    });
};

const uri = 'mongodb+srv://asgarov:password4mongo@cluster0-tn9lj.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then(result => {
        console.log('Connected via mongoose!')


// Persisting data
create(kunde);
create(lieferschein);
create(position);
create(rechnung1);
create(rechnung2);


//Reading data
Kunde.find(function (err, kunden) {
    if (err) return console.error(err);
    console.log('Found: ' + kunden);
});

Lieferschein.find(function (err, lieferscheine) {
    if (err) return console.error(err);
    console.log('Found: ' + lieferscheine);
});

Position.find(function (err, positionen) {
    if (err) return console.error(err);
    console.log('Found: ' + positionen);
});

Rechnung.find(function (err, rechnungen) {
    if (err) return console.error(err);
    console.log('Found: ' + rechnungen);
});

    }).catch(err => {
    console.log(err);
});
