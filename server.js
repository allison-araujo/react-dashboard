const express = require('express')

const {resolve} = require('path')
const app = express()

app.use('/dashboard', 
    express.static(
        resolve(
            __dirname,

            './build'
        )
    ))


app.listen(process.env.PORT || 3000, (err) => {
    if (err) {
        return console.log(err)}

        console.log('tudo ok')
    }
) 