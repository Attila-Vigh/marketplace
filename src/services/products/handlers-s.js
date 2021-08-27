// import products from '../../utils/fs-utils.js';
// import { join } from 'path';

// import reviews from '../../utils/fs-utils.js';



// const productsJSONFilePath = join( process.cwd(), 'src/data/products.json' );
// const reviewsJSONFilePath  = join( process.cwd(), 'src/data/reviews.json' );

// console.log(productsJSONFilePath);


import db from "../../db/models/Product.js";

export const listProducts = async (req, res, next) => {
	try {
		
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}
export const singleProduct = async (req, res, next) => {
	try {
	
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const singleProductWithReviews = async (req, res, next) => {
	try {
	
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const createProduct = async (req, res, next) => {
	try {
		
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const updateProduct = async (req, res, next) => {
	try {

	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const uploadProductImage = async (req, res, next) => {
	try {

	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const deleteProduct = async (req, res, next) => {
	try	{

	}
	catch (error)
	{
		res.status(500).send({ error: error.message });
	}
}


const productsHandlers = {
	list : listProducts,
	create: createProduct,
	update: updateProduct,
	single: singleProduct,
	productWithReviews: singleProductWithReviews,
	delete: deleteProduct,
	image: uploadProductImage,
}

export default productsHandlers 

