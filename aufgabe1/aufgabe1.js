var schema = require('./lieferscheinSchema.json');
var Validator = require('jsonschema').Validator;
let Lieferschein = require('./dependencies/lieferschein');
let Position = require('./dependencies/positionen');

let v = new Validator();

let testPosition = new Position(2, "testPosition", 10, 50, 200);

//examples of correct Lieferschein objects
let testLieferschein1 = new Lieferschein(101, 'Musterman', 12345, testPosition, "2020-01-17", "2020-02-05", "Muster Beschreibung")
let testLieferschein2 = new Lieferschein(102, 'Musterfrau', 12346, testPosition, "2020-02-01", "2020-02-04", "blabla")
let testLieferschein3 = new Lieferschein(103, 'Schmidt', 12347, testPosition, "2020-02-25", "2020-03-01")

console.log("\n===>Correct Lieferschein #1: ");
console.log(v.validate(testLieferschein1, schema));
console.log("\n===>Correct Lieferschein #2: ");
console.log(v.validate(testLieferschein2, schema));
console.log("\n===>Correct Lieferschein #3: ");
console.log(v.validate(testLieferschein3, schema));


//examples of wrong Lieferschein objects
let falscherLieferschein1 = new Lieferschein("101", 'Musterman', 12345, testPosition, "2020-01-17", "2020-02-05", "Muster Beschreibung")
let falscherLieferschein2 = new Lieferschein(101, 123, 12345, testPosition, "2020-01-17", "2020-02-05", "Muster Beschreibung")
let falscherLieferschein3 = new Lieferschein(101, 'Musterman', 12345, testPosition, "2020-01-17", "2020-02-05", "Muster Beschreibung", 123)

console.log("\n===>Wrong Lieferschein #1: ");
console.log(v.validate(falscherLieferschein1, schema));
console.log("\n===>Wrong Lieferschein #2: ");
console.log(v.validate(falscherLieferschein2, schema));
console.log("\n===>Wrong Lieferschein #3: ");
console.log(v.validate(falscherLieferschein3, schema));
