import express, { Request, urlencoded,json,text } from "express";
import cors from 'cors';
import multer from "multer";
import EJS from "./ejs";
import Helper from "./helper";

const upload = multer();

const app = express();
app.use(cors())
app.use(upload.any());
app.use(urlencoded({
    extended:true
}));
app.use(json());

app.use(text());

app.get("/", async (req, res) => {
    return res.send({
        Welcome: "Hruhsikesh",
    });
});

app.post("/ejs", async (req, res) => {
    try {
        if(req.files?.length){
            const data  = JSON.parse(req.body.data);
            const text = Helper.getStringFromFile(req.files);
            const html = await EJS.getEjsString(text, data);
            return res.send(html);
        }
        else
        {
            throw new Error("File not Found");
        }
    } catch (error) {
        return res.send(error);
    }
});

app.post("/ejsv2", async (req, res) => {
    try {
            const { data , text } = req.body
            const html = await EJS.getEjsString(text, data);
            return res.send(html);
    } catch (error) {
        return res.send(error);
    }
});

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
