import { Request } from 'express';

export interface CustomRequest extends Request {
    payload?: any; // Define the payload property as optional
}