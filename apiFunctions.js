import express from 'express'
import mysql from 'mysql2/promise';
import connection from './Db.js'


export const index = ('/blog', async (req, res, next) => {
    try {
        const [rows] = await connection.query('SELECT * FROM posts');
        res.json(rows);
    }
    catch (err) {
        if (err)
            return res.status(500).send('Database query error');
    }

});

