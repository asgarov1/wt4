const db = require('./util/database');

db.execute('SELECT * from kunde')
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });
