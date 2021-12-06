import express from 'express';
import { describe ,Methods } from './soap';


const app = express();

app.use(express.json());
app.use(express.text());

app.get('/', (req, res) => {
    res.json('Hey Hrushikesh , Welcome to your made helper....!!!!!!!!!');
});

app.get('/describe', async (req, res) => {
    const data = await describe();
    return res.send(data);
});

app.get('/add', async (req, res) => {
    const data = await Methods.add();
    return res.send(data);
});

app.get('/ip', async (req, res) => {
    const data = await Methods.ip();
    return res.send(data);
});


app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});
