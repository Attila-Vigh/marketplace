import { Router } from 'express';
import productsServices from './products/route.js';
import reviewsServices from './reviews/route.js';

const services = new Router();

services.use('/products', productsServices)
services.use('/reviews' , reviewsServices )

export default services;


