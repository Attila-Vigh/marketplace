import { Router } from "express";
import categoriesHandlers from "./handlers-s.js";
import {
    // checkCategorySchema,
    validateCategorySchema,
} from "./validations.js";

const router = Router();

router.route("/")
    .get(categoriesHandlers.list)
    .post(
        // checkCategorySchema,
        validateCategorySchema,
        categoriesHandlers.create
    );

router.route("/:id")
    .get(categoriesHandlers.single)
    .put(categoriesHandlers.update)
    .delete(categoriesHandlers.delete);

export default router;