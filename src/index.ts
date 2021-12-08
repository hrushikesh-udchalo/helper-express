import express from 'express';
import { describe ,logon, noob, search } from './soap';


const app = express();

app.use(express.json());
app.use(express.text());

app.get('/',async (req, res) => {
    // res.json('Hey Hrushikesh , Welcome to helper....!!!!!!!!!');
     const data = await  noob();
     return res.json(data);
});

app.get('/describe/:method', async (req, res) => {
    const method = req.params["method"];
    const data = await describe(method);
    return res.send(data);
});

app.get('/logon', async (req, res) => {
    const data = await logon();
    return res.send(data);
});

app.get('/search', async (req, res) => {
    const data = await search();
    return res.send(data);
});


app.listen(3001, () => {
    console.log('Listening on http://localhost:3001');
});
