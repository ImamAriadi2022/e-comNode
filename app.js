import express from 'express'
import fs from 'fs'

const app = express()
const port = 3200;

app.get('/', (req, res)=> {
    getData()
})

app.listen(port, ()=> {
    console.log(`Server is running on port:  ${port}`)
})


const getData = ()=> {
    const data = fs.readFileSync('./data/Banner.json', 'utf-8', (err, data)=> data)
    console.log(data)
}