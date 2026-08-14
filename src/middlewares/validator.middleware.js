import { body, validationResult } from 'express-validator';
import { config } from '../config/config.js';

export const contactValidationRules = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be between 2 and 100 characters'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Email must be a valid email address'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 5, max: config.maxMsgLength }).withMessage(`Message must be between 5 and ${config.maxMsgLength} characters`),
];

export const validateContact = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};