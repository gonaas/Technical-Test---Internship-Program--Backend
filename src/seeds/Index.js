require('dotenv').config({ path: './.env' });

const fs = require('fs');
const db = require('../config/db');

const path = __dirname;

fs.readdir(path, async (err, items) => {
  await db.connect();

  await Promise.all(
    items.map(async (value) => {
      if (value !== 'Index.js' && value !== 'data') {
        console.log(`... Loading seeders ${value}`);
        await require(`./${value}`)();
      }
    }),
  );

  console.log('End seeders process');
  process.exit(0);
});
