import { Router } from 'express';
import { postMsg } from '../controllers/contact.controller.js';
import { contactLimiter } from '../middlewares/rateLimiter.middleware.js';
import { contactValidationRules, validateContact } from '../middlewares/validator.middleware.js';

export const contactRouter = Router();

contactRouter.post('/contact/msg', contactLimiter, contactValidationRules, validateContact, postMsg);