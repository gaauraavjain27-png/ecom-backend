import "dotenv/config"
import express from "express"
import helmet from "helmet"
import cors from 'cors'
import cookieParser from "cookie-parser";
import ExpressMongoSanitize from "express-mongo-sanitize";
const app = express();

// middlewares
app.use(helmet());
app.use(express.json());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(cookieParser())
app.use(ExpressMongoSanitize)


app.get('/api/v1/health', (req, res) => res.status(200).json(apiResponse(200, { service: 'ecom-backend', env: process.env.NODE_ENV, uptimeSeconds: Math.round(process.uptime()), timestamp: new Date().toISOString(), }, 'API	is	running')));


export default app;