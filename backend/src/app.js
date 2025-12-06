import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express();

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded())
app.use('/public',express.static("public"))
app.use(cors(
    {
        origin:'',
        credentials:true
    }
))

app.use(cookieParser())

export default app;