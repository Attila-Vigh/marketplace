import s from "sequelize";
const { Sequelize, QueryTypes } = s;

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequelizeOptions = [
    PGDATABASE,
    PGUSER,
    PGPASSWORD,
    {
        host: PGHOST,
        port: PGPORT,
        dialect: "postgres",
        // dialectOptions: {
        //         ssl: {
        //             require: true,
        //             rejectedUnauthorized: false
        //     },
        // }
    }
];

const sequelize = new Sequelize(...sequelizeOptions);

const schemas = 
    [ "development", "production" ]
        .map( schema => `\n CREATE SCHEMA  IF NOT EXISTS ${ schema } AUTHORIZATION ${ PGUSER }; \n`)
        .join('');

console.log(schemas);

export const syncSequelize = async () => {
    try
    {
        await sequelize.authenticate();
        await sequelize.query(schemas, { type: QueryTypes.SELECT });
        await sequelize.sync({
            force: true,
            logging: false,
            schema: "development",
        });
        console.log("DB authenticated");
    }
    catch (error)
    {
        console.log(error);
    }
};

export default sequelize;
