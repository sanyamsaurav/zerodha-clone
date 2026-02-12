const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../backend/.env') }); // Load backend env
// Mock MONGO_URL if missing to prevent connection string error, although we mainly care about require() success
if (!process.env.MONGO_URL) {
    process.env.MONGO_URL = "mongodb://localhost:27017/test";
}

console.log("Attempting to require backend/api/index.js...");

try {
    const app = require('../backend/api/index.js');
    console.log("SUCCESS: backend/api/index.js loaded without crashing.");
    // We don't exit immediately to allow async connection to potentially fail/succeed if it wanted to, 
    // but for our purpose, reaching here is success.
    // actually, let's exit to be clean.
    process.exit(0);
} catch (error) {
    console.error("FAILURE: backend/api/index.js crashed on load.");
    console.error(error);
    process.exit(1);
}
