import express, {Express} from 'express';

const router = express.Router()

const webRoutes = (app: Express) => {
    router.get("/", (req, res) => {
        res.render('home.ejs');
    })
    router.get("/1", (req, res) => {
        res.send('Hello, world!');
    })
    router.get("/12", (req, res) => {
        res.send('Hello, world!');
    })

    app.use('/', router)
}

export default webRoutes
