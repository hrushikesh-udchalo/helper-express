import express from 'express';
import { describe ,Cal } from './soap';


const app = express();

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
    res.json('Ohhh Beta... moj kardi');
});

app.get('/describe', async (req, res) => {
    const data = await describe();
    return res.send(data);
});

app.get('/add', async (req, res) => {
    const data = await Cal.add();
    return res.send(data);
});



app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});
