import products from '../../utils/fs-utils.js';
import { join } from 'path';

import reviews from '../../utils/fs-utils.js';

const productsJSONFilePath = join( process.cwd(), 'src/data/products.json' );
const reviewsJSONFilePath  = join( process.cwd(), 'src/data/reviews.json' );

console.log(productsJSONFilePath);

export const listProducts = async (req, res, next) => {
	try {
		const productsList = await products.read( productsJSONFilePath );
		if (req.query && req.query.category){
			const filteredProducts = productsList.filter((product) =>
				product.category
					.toLocaleLowerCase()
					.includes(req.query.category.toLocaleLowerCase())
			)
			return res.json(filteredProducts);
		}
	
		res.send(productsList);
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}
export const singleProduct = async (req, res, next) => {
	try {
		const product = await products.findById( req.params.id, productsJSONFilePath );
		
		res.send(product);
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const singleProductWithReviews = async (req, res, next) => {
	try {

		console.log(req.params.id);
		const product = await products.findById(req.params.id, productsJSONFilePath);
		console.log(product);
		
		const reviewsList = await reviews.read( reviewsJSONFilePath );

		const productReviews = reviewsList.filter( (review) => review.productId === product.id );
			res.send(productReviews);
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const createProduct = async (req, res, next) => {
	try {
		// delete req.body.imageUrl;
		const newProducts = await products.new( req.body, productsJSONFilePath );
		res.status(201).send( newProducts );
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const updateProduct = async (req, res, next) => {
	try {
		const updatedProducts = await products.update( req.params.id, req.body, productsJSONFilePath );
		res.status(201).send( updatedProducts );
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const uploadProductImage = async (req, res, next) => {
	try {

		console.log( req.body );
		console.log( req.file );
		const updatedImage = await products.updateImage( req.params.id, req.file, productsJSONFilePath );

		res.status(201).send( updatedImage );
	} 
	catch (error) {
		res.status(500).send({ error: error.message });
	}
}

export const deleteProduct = async (req, res, next) => {
	try	{
		await products.delete(req.params.id, productsJSONFilePath);
		res.status(204).send();
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

