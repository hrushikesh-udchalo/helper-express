import express from "express";
import { parseString, Builder } from "xml2js";
import { SOAP } from "./soap";

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", (req, res) => {
    res.json("Ohhh Beta... moj kardi");
});

app.get("/send", (req, res) => {
    res.json("Ohhh Beta... moj kardikk");
});

app.post("/toXML", (req, res) => {
    const xml = new Builder().buildObject(req.body);
    res.header("Content-Type", "application/xml");
    res.status(200).send(`<xml>
        ${xml}
    </xml>`);
});

app.post("/toJSON/", async (req, res) => {
    const ignoreAttrs = req.query.ignoreAttrs === "true" ? true : false || true;
    const json = await xmlToJson(req.body, ignoreAttrs, false);
    res.json(json);
});

app.get('/soap',async(req,res)=>{
    const data = await SOAP();
    return res.send(data);
})


app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});




export function xmlToJson<T>(
    xmlPayload: string,
    ignoreAttrs: boolean,
    explicitArray: boolean
): Promise<T> {
    return new Promise((resolve, reject) => {
        parseString(xmlPayload, { ignoreAttrs, explicitArray }, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
