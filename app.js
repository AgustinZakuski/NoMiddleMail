import {config} from './src/config/config.js';
import { contactRouter } from './src/routes/contact.route.js';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// Middlewares
const validOrigins = config.allowedOrigins.split(',');
const corsOptions = {
    origin: (origin, callback) => {
        if (validOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('CORS_NOT_ALLOWED'));
        }
    }
};
app.use(cors(corsOptions));

app.use(helmet());
app.use(morgan('dev')); // Not mandatory, but useful for development
app.use(express.json());

// Health check
app.get("/health", (request, response) => {
    response.status(200).json({status: "ok", message: "Healthy", timestamp: new Date().toISOString()})
})

// Routes
app.use('/api/v1', contactRouter);

// 404 config
app.use("/", (request, response) => {
    response.status(404).json({errMsg: "Page not found."})
})

app.use((err, req, res, next) => {
    if (err.message === 'CORS_NOT_ALLOWED') {
        return res.status(403).json({ error: 'Origin not allowed' });
    }
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});

export default app;