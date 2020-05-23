const model = require('./model/sequelizeModel/model');
const Kunde = model.Kunde;
const Lieferschein = model.Lieferschein;
const Rechnung = model.Rechnung;
const Position = model.Position;

// Creating Tables
const sequelize = require('./util/mysql/dbWithORM');
sequelize
    .sync()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });

//Persisting data
const kunde = Kunde.create({
    id: 1,
    firma: 'ABC',
    vorname: 'Max',
    nachname: 'Musterman',
    adresse: 'Musteradress 1, 1010, AUT',
    passnummer: '123456',
    geburtsdatum: '10-05-2000',
    email: 'gmail@gmail.com'
});

const position = Position.create({
    id: 1,
    name: 'el Position',
    preis_pro_tag: 10,
    preis_pro_woche: 50,
    preis_pro_monat: 200,
});

const lieferschein = Lieferschein.create({
    id: 1,
    kunden_id: 1,
    lieferscheinNummer: 'ABC12345',
    position_id: 1,
    datumVon: '10-02-2020',
    datumBis: '20-02-2020',
    beschreibung: 'blabla beschreibung'
});

const rechnung1 = Rechnung.create({
    id: 1,
    steuerNummer: 'B123445',
    adresse: 'Musteradress 1, 1010, AUT',
    lieferdatum: '10-02-2020',
    position_id: 1,
    anzahl: 1
});

const rechnung2 = Rechnung.create({
    id: 2,
    steuerNummer: 'B123466',
    adresse: 'Musteradress 23, 1020, AUT',
    lieferdatum: '23-03-2020',
    position_id: 1,
    anzahl: 2
});


//Reading Data from the database
displayEntityById(Kunde, kunde.id);
displayEntityById(Lieferschein, lieferschein.id);
displayEntityById(Position, position.id);
Rechnung.findAll()
    .then(rechnungen => {
        console.log("All rechnungen: ", JSON.stringify(rechnungen, null, 2));
    }).catch(err => {
    console.log(err);
    });

function displayEntityById(entity, id) {
    entity.findByPk(id).then(result => {
        console.log(result)
    }).catch(err => {
        console.log(err);
    });
}

