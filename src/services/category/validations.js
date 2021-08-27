import { checkSchema, validationResult } from "express-validator";
import createError from "http-errors";

const categorySchema = {
	name: {
		in: ["body"],
		isString: {
			errorMessage: "Name must be string!",
		},
	},
};

export const validateUploadImage = (req, res, next) => {
	if (!req.file) {
		next(createError(400, "Image must be sent"));
	} else {
		const allowedExtensions = ["png", "jpg", "jpeg"];
		const [fileName, ext] = req.file.originalname.split(".");
		if (!allowedExtensions.includes(ext)) {
			next(createError(400, "Image must be image"));
		} else {
			next();
		}
	}
};
export const checkCategorySchema = checkSchema(categorySchema);

export const validateCategorySchema = (req, res, next) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		next(createError(400, "Validation error", errors));
	}
	next();
};
