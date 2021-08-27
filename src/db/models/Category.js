import sequelize from "../db_connection.js";
import s from "sequelize";

const { DataTypes } = s;

const Category = sequelize.define(
    "category", 
    {  
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: false,
        },
        
    }, 
    {
        timestamps: false,
        schema: "development"
    }
);

export default Category;
