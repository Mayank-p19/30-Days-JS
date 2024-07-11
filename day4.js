const { Parser } = require("json2csv");
const fs = require("fs");

const data = [
    {name: "Mayank", age: "22", email: "mayank123@gmail.com"},
    {name: "Abhishek", age: "23", email: "abhishek@gmail.com"}
];

const json2csvParser = new Parser();
const csv = json2csvParser.parse(data);

fs.writeFileSync('output.csv', csv);

console.log('JSON to CSV conversion complete. Check output.csv file.');