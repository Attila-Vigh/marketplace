import express from 'express';
import cors from 'cors';
import listEndpoints from 'express-list-endpoints';
// import db from "./db/index.js";
import { syncSequelize } from "./db/db_connection.js";
import services from './services/index.js';
import { notFoundErrorHandler, badRequestErrorHandler, serverErrorHandler } from './middlewares/errorHandlers.js'
import { publicPath } from "./utils/fs-utils.js";

const PORT = process.env.PORT;
const app = express();

// const whiteList = [ process.env.PORT ];
const corsOptions = {
    origin: (origin, next) => {
        if (!origin || whitelist.indexOf(origin) !== -1)
        {
            next(null, true);
        }
        else
        {
            const error = new Error("Not allowed by cors!");
            error.status = 403;
            next(error);
        }
    },
};

app.use(cors(corsOptions));         //! TODO:

app.use("/images", express.static(publicPath));

app.use(express.json());

app.use('/', services);

console.table(listEndpoints(app));

app.use(notFoundErrorHandler);
app.use(badRequestErrorHandler);
app.use(serverErrorHandler)

// db.sequelize
//     .sync()
//     .then(() => {
        app.listen(PORT, async () =>{ 
            console.log(`Server running at http://localhost:${ PORT }`)
            await syncSequelize()
        });

        app.on('error', (err) => console.log(`Server crushed: ${ err }`));
    // })
    // .catch( console.error);
