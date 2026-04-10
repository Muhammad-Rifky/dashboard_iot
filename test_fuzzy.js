// test_fuzzy.js
import { fuzzyLogic } from "./src/app/lib/fuzzy.js";

// Simulasi beberapa data sensor
const testData = [
  { ph: 7, suhu: 27, tds: 400, turbidity: 8 },
  { ph: 5.5, suhu: 32, tds: 1500, turbidity: 30 },
];

testData.forEach((d, i) => {
  const output = fuzzyLogic(d);
  console.log(`Data ke-${i+1}:`, d);
  console.log(`Output fuzzy: ${output.toFixed(2)} → Solenoid: ${output > 50 ? "ON" : "OFF"}`);
  console.log('--------------------------');
});