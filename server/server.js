import mongoose from 'mongoose'
import app from './index.js'

const PORT = process.env.PORT || 3001

// mongoDB connection
const url = process.env.MONGODB_URL || 'mongodb://hassan:123456@localhost/crm-clients'

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
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



