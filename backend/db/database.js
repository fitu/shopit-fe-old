const mongoose = require('mongoose');

const connectDatabase = (uri) => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((con) => {
            console.log(`DB started in: ${con.connection.host}`);
        });
};

module.exports = connectDatabase;
