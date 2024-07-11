// Example 1
// const { Parser } = require("json2csv");
// const fs = require("fs");

// const data = [
//     {name: "Mayank", age: "22", email: "mayank123@gmail.com"},
//     {name: "Abhishek", age: "23", email: "abhishek@gmail.com"}
// ];

// const json2csvParser = new Parser();
// const csv = json2csvParser.parse(data);

// fs.writeFileSync('output.csv', csv);

// console.log('JSON to CSV conversion complete. Check output.csv file.');


// Example 2
// const { Parser} = require("json2csv");
// const fs = require("fs");

// const data = [
//     {
//         name: "Mayank",
//         age: 22,
//         email: "mayank123@gmail.com",
//         address: { city: "Chandigarh", state: "Punjab" },
//         skills: ["JavaScript", "Node.js", "React"]
//     },
//     {
//         name: "Abhishek",
//         age: 23,
//         email: "abhishek@gmail.com",
//         address: { city: "Delhi", state: "Delhi" },
//         skills: ["Python", "Django"]
//     }
// ];

// const fields = [
//     { label: "Name", value: "name" },
//     { label: "Age", value: "age" },
//     { label: "Email", value: "email" },
//     { label: "City", value: "address.city" },
//     { label: "State", value: "address.state" },
//     { label: "Skills", value: row => row.skills.join(", ") }
// ];

// const json2csvParser = new Parser({ fields });
// const csv = json2csvParser.parse(data);

// fs.writeFileSync('output.csv', csv);

// console.log('JSON to CSV conversion complete. Check output.csv file.');



// Example 3 CSVtoJSON

const csv = require("csvtojson");
const fs = require("fs");
const csvFilePath = 'data.csv';

csv()
    .fromFile(csvFilePath)
    .then((jsonObj) => {
        console.log("csv to json conversion complete.");
        console.log(jsonObj);

    fs.writeFileSync('data.json', JSON.stringify(jsonObj, null, 2));

    console.log('JSON data written to data.json file.');
})
.catch((error) => {
    console.log('Error converting csv to josn:', error);
});