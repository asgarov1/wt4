const {MongoClient} = require('mongodb');

const Position = require('./model/position');
const Kunde = require('./model/kunde');
const Lieferschein = require('./model/lieferschein');
const Rechnung = require('./model/rechnung');

let position = new Position(3, 'abc', 10, 50, 200);
let kunde = new Kunde(3, 'Microsoft', 'Bill', 'Gates', 'Silicon Valley 1, USA', 123456, '10-11-1990', 'example@gmail.com');
let lieferschein = new Lieferschein(3, 3, 'A123', position, '10-05-2019', '17-05-2019', 'Beispiel Beschreiung');
let rechnung1 = new Rechnung(1, 1234, 'Musterstr 164, 2100, AUT', '10-05-2019', position, 1);
let rechnung2 = new Rechnung(21, 4312, 'Musterstr 99, 1100, AUT', '23-04-2019', position, 2);


async function main() {
    const uri = 'mongodb+srv://asgarov:password4mongo@cluster0-tn9lj.mongodb.net/test?retryWrites=true&w=majority';
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

    try {
        await client.connect();

        await createKunde(client, kunde);
        await createLieferschein(client, lieferschein);
        await createPosition(client, position);
        await createRechnung(client, rechnung1);
        await createRechnung(client, rechnung2);

        await findOneKundeById(client, 1);
        await findOneByLieferscheinNummer(client, "A123");
        await findOnePositionById(client, 3);
        await findOneRechnungById(client, 1);
        await findOneRechnungById(client, 21);

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

//Create functions
async function createKunde(client, kunde) {
    const result = await client.db().collection("kunden").insertOne({
        id: kunde.id,
        firma: kunde.firma,
        vorname: kunde.vorname,
        nachname: kunde.nachname,
        adresse: kunde.adresse,
        passnummer: kunde.passnummer,
        geburtsdatum: kunde.geburtsdatum,
        email: kunde.email
    });
    console.log(result);
}

async function createLieferschein(client, lieferschein) {
    const result = await client.db().collection("lieferscheine").insertOne({
        kundenId : lieferschein.kundenId,
        lieferscheinNummer : lieferschein.lieferscheinNummer,
        position : lieferschein.position,
        datumVon : lieferschein.datumVon,
        datumBis : lieferschein.datumBis,
        beschreibung : lieferschein.beschreibung
    });
    console.log(result);
}

async function createPosition(client, position) {
    const result = await client.db().collection("positionen").insertOne({
        positionenID : position.positionenID,
        positionenName : position.positionenName,
        preis_pro_tag : position.position_preis,
        preis_pro_woche : position.position_preis_pro_woche,
        preis_pro_monat : position.position_preis_pro_monat
    });
    console.log(result);
}


async function createRechnung(client, rechnung) {
    const result = await client.db().collection("rechnungen").insertOne({
        id: rechnung.id,
        steuerNummer: rechnung.steuerNummer,
        adresse: rechnung.adresse,
        lieferdatum: rechnung.lieferdatum,
        position: rechnung.position
    });
    console.log(result);
}

//Read functions

async function findOneKundeById(client, kundenId){
    const result = await client.db().collection('kunden').findOne({id: kundenId});
    if (result) {
        console.log(result);
    } else {
        console.log("Nothing found!")
    }
}

async function findOneByLieferscheinNummer(client, lieferscheinNummer){
    const result = await client.db().collection('lieferscheine').findOne({lieferscheinNummer: lieferscheinNummer});
    if (result) {
        console.log(result);
    } else {
        console.log("Nothing found!")
    }
}

async function findOnePositionById(client, positionenId){
    const result = await client.db().collection('positionen').findOne({positionenID: positionenId});
    if (result) {
        console.log(result);
    } else {
        console.log("Nothing found!")
    }
}

async function findOneRechnungById(client, rechnungId){
    const result = await client.db().collection('rechnungen').findOne({id: rechnungId});
    if (result) {
        console.log(result);
    } else {
        console.log("Nothing found!")
    }
}