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

export const show = async (req, res, next) => {
    try {
        const somePost = parseInt(req.params.id)

        const [result] = await connection.query('SELECT * FROM posts WHERE id = ?',
            [somePost])
            res.status(200).json(result[0]);

        if (result.length === 0)
            return res.status(404).json({ error: 'id not exist' })
    }
    catch (err) {
        console.error('Errore del server:', err.message);

        res.status(500).json({ error: 'Database query error' });
    }
}

export const destroy = async (req, res, next) => {
    try {
        const somePost = parseInt(req.params.id);

        const [result] = await connection.query('DELETE FROM posts WHERE id = ?', [somePost]);
        res.status(200).json(result);

        if (result.affectedRows === 0)
            return res.status(404).json({ error: 'id not exist' })
    }
    catch (err) {
        console.error('Errore del server:', err.message);

        res.status(500).json({ error: 'Database query error' });
    }
};

export const store = async (req, res, next) => {
    try {
        const { title, content, image } = req.body;
        
    
        const [result] = await connection.query('INSERT INTO posts (title, content, image) VALUES (?,?,?)',
            [title, content, image]);
            res.status(200).json({
                message: 'post created',
                id: result.insertId,
                title,
                content,
                image
            });

            if (req.body = {})
            return res.status(400).json({ error: 'there is nothing' })

            
    }
    catch (err) {
        console.error('Errore del server:', err.message);

        res.status(500).json({ error: 'Database query error' });
    }
}