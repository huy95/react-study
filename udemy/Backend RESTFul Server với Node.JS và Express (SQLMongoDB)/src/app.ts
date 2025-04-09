import express from "express"
import 'dotenv/config'
import webRoutes from './routes/web'
const app = express()
//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

webRoutes(app)

app.listen(process.env.PORT, () => {
    console.log(process.env.PORT)
})