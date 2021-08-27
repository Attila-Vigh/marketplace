import sequelize from "../db_connection.js";
import s from "sequelize";

const { DataTypes } = s;

const Product = sequelize.define(
    "product", 
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true 
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        brand: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
        // ,
        // status: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        //     defaultValue: true
        // }


    }, 
    {
        schema: "development"
    }
);

export default Product;
