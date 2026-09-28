import express from 'express'
import connection from './Db.js';
import { index } from './apiFunctions.js'

const app = express();
const port = 3000;
app.use(express.json());

app.get('/blog', index);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

export default app;