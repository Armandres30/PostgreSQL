const { Client } = require('pg');

async function getConnection() {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'armando',
        password: 'admin',
        database: 'my_store'
    });
    await client.connect();
}

module.exports = getConnection;
