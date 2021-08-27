import Product from "./models/Product.js";
import Category from "./models/Category.js";
import sequelize from "./db_connection.js";

// Product.beforeCreate(async (user) => {
//     const hashedPassword = await hashPassword(user.password);
//     user.password = hashedPassword;
//   });

// Category.belongsTo(Product);
Category.hasMany(Product, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });
Product.belongsTo(Category, { foreignKey: { allowNull: false }, onDelete: "CASCADE" });

export default { Product, Category };
