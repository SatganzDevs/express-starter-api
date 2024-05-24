import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";


const app = new express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import apirouter from './routes/api.js'


app.enable('trust proxy');
app.set("json spaces",2)
app.use(morgan("dev"));
app.use(cors())
app.use(express.static(path.join(__dirname, "public")));


// HOME
app.get("/", async (req, res) => {
res.sendFile(path.join(__dirname, "public/index.html"));
});


app.use('/api', apirouter)

// connected
app.listen(3000, () => {
console.log("CONNECTED!");
});