import express, { Application } from "express";
import { sequelize } from "./config/config";
import taskRoutes from "./routes/taskRoutes";
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app: Application = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

sequelize
    .sync()
    .then(() => {
        console.log("Database connection established");
    })
    .catch((err) => {
        console.error("Unable to connect to the database:", err);
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;
