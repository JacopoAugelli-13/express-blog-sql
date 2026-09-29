import express from 'express'
import connection from './Db.js';
import { index, destroy, store, show } from './apiFunctions.js'

const app = express();
const port = 3000;
app.use(express.json());

app.get('/blog', index);
app.get('/blog/:id', show);
app.delete('/blog/:id', destroy);
app.post('/blog', store);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

export default app;