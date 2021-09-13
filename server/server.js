import dotenv from "dotenv";
dotenv.config()

import mongoose from 'mongoose'
import app from './index.js'


// mongoDB connection
const PORT = process.env.PORT 
const url = process.env.MONGODB_URL 


mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(db => {
        app.listen(
            PORT,
            () => console.log(`Server running at Port ${PORT}`)
        )
    })
    .catch(dbErr => {
        console.log("DB Connection Error: ", dbErr.message);
        process.exit(1);
    });



