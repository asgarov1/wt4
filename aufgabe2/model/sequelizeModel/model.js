const Sequelize = require('sequelize');
const sequelize = require('../../util/mysql/dbWithORM');

const Position = sequelize.define('position', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true
   },
    name: Sequelize.STRING,
    preis_pro_tag: Sequelize.INTEGER,
    preis_pro_woche: Sequelize.INTEGER,
    preis_pro_monat: Sequelize.INTEGER
}, {
    tableName: 'positionen'
});

const Kunde = sequelize.define('kunde', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firma: Sequelize.STRING,
    vorname: Sequelize.STRING,
    nachname: Sequelize.STRING,
    adresse: Sequelize.STRING,
    passnummer: Sequelize.STRING,
    geburtsdatum: Sequelize.STRING,
    email: Sequelize.STRING
}, {
    tableName: 'kunden'
});

const Lieferschein = sequelize.define('lieferschein', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    kunden_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'kunden',
            key: 'id'
        }
    },
    lieferscheinNummer: Sequelize.STRING,
    position_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'positionen',
            key: 'id'
        }
    },
    datumVon: Sequelize.STRING,
    datumBis: Sequelize.STRING,
    beschreibung: Sequelize.STRING
}, {
    tableName: 'lieferscheine'
});

const Rechnung = sequelize.define('rechnung', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    steuerNummer: Sequelize.STRING,
    adresse: Sequelize.STRING,
    lieferdatum: Sequelize.STRING,
    position_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'positionen',
            key: 'id'
        }
    },
    anzahl: Sequelize.INTEGER
}, {
    tableName: 'rechnungen'
});

module.exports = { Position, Kunde, Lieferschein, Rechnung };