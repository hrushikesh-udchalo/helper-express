import express from "express";

const app = express();

app.use(express.json());
app.use(express.text());

app.get("/", async (req, res) => {
    return res.send({
        Welcome: "Hruhsikesh",
    });
});

app.get('/unzip',async(req,res)=>{
    return "Hi, No Unzip";
});

app.listen(3001, () => {
    console.log("Listening on http://localhost:3001");
});
