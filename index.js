#!/usr/bin/env node

const fs = require("fs");
const os = require("os");
const path = require("path");

const file = path.join(os.tmpdir(), "demo.log");

fs.writeFileSync(
    file,
    "The downloaded package was executed.\n"
);

console.log("Created:", file);
