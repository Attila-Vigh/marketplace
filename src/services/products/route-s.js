import { Router } from "express";
import productsHandlers from "./handlers.js";

import {
    validateUploadImage,
    checkProductSchema,
    validateProductSchema,
    } from "./validations.js";
import multer from "multer";

const upload = multer();

const router = Router();

router
    .route("/")
    .get( productsHandlers.list)
    .post(
        checkProductSchema,
        validateProductSchema,
        productsHandlers.create
    )

router.
    route("/:id")
    .get   ( productsHandlers.single )
    .put   ( productsHandlers.update )
    .delete( productsHandlers.delete );

router.get("/:id/reviews", productsHandlers.productWithReviews);
router.put(
    "/:id/image",
    upload.single("image"),
    validateUploadImage,
    productsHandlers.image
);



export default router;