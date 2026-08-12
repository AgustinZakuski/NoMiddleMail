import {config} from './src/config/config.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middlewares
const corsOprions = {origin: config.user,};
app.use(cors(corsOprions));
app.use(helmet())
app.use(morgan('dev')); // Not mandatory, but useful for development
app.use(express.json());

// Health check
app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", message: "Healthy", timestamp: new Date().toISOString()})
})

// Routes
//app.use("/api/v1", require(""));

// 404 config
app.use("/", (request, response) => {
    response.status(404).json({errMsg: "Page not found."})
})

export default app;