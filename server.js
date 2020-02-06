//connections
const express = require("express");
const app = express();
const path = require('path');
const config = require('config');

//routes
const test = require('./api/routes/test');

// Connect to Db
// mongoose.connect(process.env.DB_CONNECT,
//     {useNewUrlParser: true, useUnifiedTopology: true},
//     () => {
//         console.log('Connect to DB')
//     }
// );



app.use("/api",test);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


app.listen(5000, ()=> {
    console.log("server is listening on port 5000");
});