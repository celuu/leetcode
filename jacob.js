const fs = require("fs");

// Read the JSON file
const jsonData = fs.readFileSync("./all_exercises.json", "utf-8");

// Parse the JSON data into a JavaScript object
const data = JSON.parse(jsonData);

// Now you can use the `data` object in your code
console.log(typeof(data)); // Example: Display the imported data
let arr = []
for(let key in data){
    arr.push(data[key].name)

}
console.log(arr)
