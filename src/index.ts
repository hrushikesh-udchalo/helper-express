import express, { Request } from "express";
import EJS from "./ejs";

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", async (req, res) => {
    return res.send({
        Welcome: "Hruhsikesh",
    });
});

app.post("/ejs", async (req, res) => {
    try {
        const { text, data } = req.body;
        const ejs = await EJS.getEjsString(text, data);
        return res.send(ejs);
    } catch (error) {
        return "Something Went Wrong !!!";
    }
});

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
