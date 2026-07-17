#!/usr/bin/env node

const fs = require("fs");

fs.writeFileSync(
    "demo.log",
    "The downloaded package was executed.\n"
);

console.log("demo.log created");
