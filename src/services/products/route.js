import { Router } from "express";
import productsHandlers from "./handlers.js";
import {
    validateUploadImage,
    checkProductSchema,
    validateProductSchema,
    } from "./validations.js";
import multer from "multer";

const upload = multer();

const route = Router();

route.post  ( 
    "/",
    checkProductSchema,
    validateProductSchema, 
    productsHandlers.create 
);

route.get   ( "/"    , productsHandlers.list   );

route.get   ( "/:id" , productsHandlers.single );

route.get   ( "/:id/reviews", productsHandlers.productWithReviews );

route.put   ( "/:id" , productsHandlers.update );

route.put   ( 
    "/:id/image" ,
    upload.single( "image" ), 
    validateUploadImage,
    productsHandlers.image 
);

route.delete( "/:id" , productsHandlers.delete );


export default route;
