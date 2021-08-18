import { Router } from "express";
import reviewsHandlers from "./handlers.js";
import {
    checkReviewsSchema,
    validateReviewsSchema,
} from "./validations.js";

const route = Router();

route.post  ( "/"    , reviewsHandlers.create );

route.get   ( "/"    , reviewsHandlers.list   );

route.get   ( "/:id" , reviewsHandlers.single );

route.put   ( 
    "/:id", 
    checkReviewsSchema,
    validateReviewsSchema,
    reviewsHandlers.update 
);

route.delete( "/:id" , reviewsHandlers.delete );


export default route;
