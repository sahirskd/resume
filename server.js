import 'dotenv/config'

import express from 'express'
import cors from 'cors'

/* import routers */
import { router as portfolioRouter } from './routers/portfolio-router.js'

/* create an express app and use JSON */
const app = new express()
app.use(cors())
app.use(express.json())

app.use('/portfolio', portfolioRouter)

app.listen(process.env.PORT || 8080, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
