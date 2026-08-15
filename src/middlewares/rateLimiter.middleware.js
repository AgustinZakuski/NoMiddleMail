import rateLimit from 'express-rate-limit';
import { config } from '../config/config.js';

export const contactLimiter = rateLimit({
  windowMs: config.windowMs,
  max: config.maxRequestsPerIP,
  standardHeaders: true, 
  legacyHeaders: false, 
  message: {
    errMsg: 'Too many requests from this IP, please try again later.',
  },
});
