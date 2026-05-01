
import express from "express";
import cors from "cors";
import { PORT } from "./config/envConfig";
import { dbConnection } from "./config/db";
import router from "./routes/routes";

const app = express()
app.use(cors({
    origin: "*",
    methods: ['*']
}))

app.use(express.json());
app.use('/api', router);

(async () => {
    try {
        await dbConnection();
    } catch (error) {
        console.log(error)
    } finally {
        app.listen(PORT ?? "4000", () => console.log(`🚀 Server Started at PORT: ${PORT}`));
    }
})()
