import mysql from 'mysql2/promise'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1010A1010a,',
    database: 'blog',
    port: 3306
});

export default connection;