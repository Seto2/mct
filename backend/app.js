require("dotenv").config({ path: './config/.env' });
const express = require('express')
const cors = require("cors")
const cookieParser = require('cookie-parser');

const db = require('./db');

const errorHandler = require("./middleware/errorHandler")
const successFn = require("./middleware/successFn");

//  бааз холбож байгаа нь
db.dbConntect()

const app = express();
const port = process.env.PORT

var whitelist = [
    process.env.CLIENT_URL,
]

var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    allowedHeaders: "Authorization, Set-Cookie, Content-Type, Accept, SameSite",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
}

//  middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser())
app.use(successFn)

//  routes
app.use("/api/v1/behavior", require("./routes/behavior"))

app.use(errorHandler)
app.use('/public', express.static('../backend/public/'));


//  server
const server = require('http').createServer(app)

server.listen(port, () =>
    {
        console.log(`Сервер ${port} порт дээр аслаа`)
    }
);
