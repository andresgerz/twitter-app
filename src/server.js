require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');


//middlewares

app.use(cors());
app.use(express.json());

//routes
app.use('/tweets', require('./routes/index'));

app.listen(process.env.PORT || 4000, () => {

    console.log(`Server on port ${process.env.PORT || 4000}`);
});