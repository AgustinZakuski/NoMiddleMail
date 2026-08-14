import { Router } from 'express';
import { postMsg } from '../controllers/contact.controller.js';

export const contactRouter = Router();

contactRouter.post('/contact/msg', contactLimiter, contactValidationRules, validateContact, postMsg);