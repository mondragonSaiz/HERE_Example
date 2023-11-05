const fs = require("fs");

const jsonData = require("./trafficData.json");

if (Array.isArray(jsonData)) {
  const csvData = jsonData.map((item) => Object.values(item).join(","));
  fs.writeFileSync("output.csv", csvData.join("\n"), "utf-8");
  console.log("CSV creado correctamente.");
} else {
  console.error("Error: JSON data is not an array.");
}
