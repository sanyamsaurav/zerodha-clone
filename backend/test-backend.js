const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') }); // Load backend env from same dir

// Mock MONGO_URL if missing
if (!process.env.MONGO_URL) {
    process.env.MONGO_URL = "mongodb://localhost:27017/test";
}

console.log("Attempting to require ./api/index.js from inside backend dir...");

try {
    const app = require('./api/index.js');
    console.log("SUCCESS: ./api/index.js loaded without crashing.");
    process.exit(0);
} catch (error) {
    console.error("FAILURE: ./api/index.js crashed on load.");
    console.error(error);
    process.exit(1);
}
