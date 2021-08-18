import { Router } from 'express';
import productsServices from './products/route.js';

const services = new Router();

services.use('/products', productsServices)

export default services;


