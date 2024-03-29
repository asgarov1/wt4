const db = require('./util/mysql/db');

const Position = require('./model/position');
const Kunde = require('./model/kunde');
const Lieferschein = require('./model/lieferschein');
const Rechnung = require('./model/rechnung');

let position = new Position(3, 'abc', 10, 50, 200);
let kunde = new Kunde(3, 'Microsoft', 'Bill', 'Gates', 'Silicon Valley 1, USA', 123456, '10-11-1990', 'example@gmail.com');
let lieferschein = new Lieferschein(3, 3, 'A123', position, '10-05-2019', '17-05-2019', 'Beispiel Beschreiung');
let rechnung1 = new Rechnung(1, 1234, 'Musterstr 164, 2100, AUT', '10-05-2019', position, 1);
let rechnung2 = new Rechnung(21, 4312, 'Musterstr 99, 1100, AUT', '23-04-2019', position, 2);

executeSQL(insertPositionSQL(position));
executeSQL(insertKundeSQL(kunde));
executeSQL(insertLieferscheinSQL(lieferschein));
executeSQL(insertRechnungSQL(rechnung1));
executeSQL(insertRechnungSQL(rechnung2));

executeSQL(selectAllFromTable('positionen'));
executeSQL(selectAllFromTable('kunden'));
executeSQL(selectAllFromTable('lieferscheine'));
executeSQL(selectAllFromTable('rechnungen'));

function executeSQL(sql) {
    db.execute(sql)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        });
}

function selectAllFromTable(tableName) {
    return 'SELECT * from ' + tableName + ";";
}

function insertKundeSQL(kunde) {
    return `INSERT INTO \`mysqldb\`.\`kunde\`
  VALUES (\'${kunde.kundenID}\', \'${kunde.firma}\', \'${kunde.vorname}\', \'${kunde.nachname}\', \'${kunde.adresse}\', \'${kunde.passnummer}\', \'${kunde.geburtsdatum}\', \'${kunde.email}');`;
}

function insertPositionSQL(position) {
    return `INSERT INTO \`mysqldb\`.\`position\`
    VALUES (\'${position.positionenID}\', \'${position.positionenName}\', \'${position.position_preis}\', \'${position.position_preis_pro_woche}\', \'${position.position_preis_pro_monat}\');`;
}

function insertLieferscheinSQL(lieferschein) {
    return `INSERT INTO \`mysqldb\`.\`lieferschein\` 
 VALUES (\'${lieferschein.id}\', \'${lieferschein.kundenId}\',\'${lieferschein.lieferscheinNummer}\', \'${lieferschein.position.positionenID}\', \'${lieferschein.datumVon}\', \'${lieferschein.datumBis}\', 
 \'${lieferschein.beschreibung}\');`;
}

function insertRechnungSQL(rechnung) {
    `INSERT INTO \`mysqldb\`.\`rechnung\`
    VALUES (\'${rechnung.id}\', \'${rechnung.steuerNummer}\', \'${rechnung.adresse}\', \'${rechnung.lieferdatum}\', \'${rechnung.position.positionenID}\', \'${rechnung.anzahl}\');`;
}