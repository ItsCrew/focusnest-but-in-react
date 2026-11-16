const express = require('express')
const session = require('express-session')
const passport = require('passport')
const cookieParser = require('cookie-parser');
const app = express()
const dotenv = require('dotenv')
const ConnectDB = require('./Database/connect')
const Auth = require('./routes/Auth')
const Tasks = require('./routes/Tasks')
const MongoStore = require('connect-mongo')
const cors = require('cors')

dotenv.config()
require('./Config/passport')
const port = Number(process.env.PORT || 5000);

app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser())

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
    }),
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/api/v1/Tasks', Tasks)
app.use('/auth', Auth)

const start = async () => {
    try {
        await ConnectDB(process.env.MONGO_URI)
        console.log('Connected to the Database');
    } catch (error) {
        console.log(error);
    }
}

start()

app.listen(port, () => {
    console.log(`Focusnest API listening on http://localhost:${port}`);
});