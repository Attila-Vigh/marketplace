// import products from '../../utils/fs-utils.js';
// import { join } from 'path';

// import reviews from '../../utils/fs-utils.js';



// const productsJSONFilePath = join( process.cwd(), 'src/data/products.json' );
// const reviewsJSONFilePath  = join( process.cwd(), 'src/data/reviews.json' );

// console.log(productsJSONFilePath);


import db from "../../db/index.js";
const { Category } = db;


export const listCategories = async (req, res, next) => {
	try {
		
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const singleCategory = async (req, res, next) => {
	try {
	
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const createCategory = async (req, res, next) => {
	try {
		console.log(req.body);
		const data = await Category.bulkCreate(req.body.category);
		res.status(201).send(data);
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const updateCategory = async (req, res, next) => {
	try {

	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const deleteCategory = async (req, res, next) => {
	try	{

	}
	catch (error)
	{
		res.status(500).send({ error: error.message });
	}
}


const categoryHandlers = {
	list : listCategories,
	create: createCategory,
	update: updateCategory,
	single: singleCategory,
	delete: deleteCategory,
}

export default categoryHandlers 

