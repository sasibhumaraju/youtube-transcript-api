import express from 'express';
import scriptsRoute from './routes/scripts.js'
import config from './config.js';
import { db } from './db/index.js';


const app = express();
const port = config.PORT;

app.get('/', (req, res) => {
    res.send('<h1>Hello, sasibhumaraju </h1>');
    // return "hello"
});

app.use("/youtube",scriptsRoute);

app.listen(port, async ()=>{
    console.log(`server running at ${port}`)
    console.log(db)
   
})


