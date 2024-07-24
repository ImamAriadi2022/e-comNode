import express from 'express'
import fs from 'fs'

const app = express()
const port = 3200;

app.get('/banner', (req, res)=> {
    const data = getData('./data/Banner.json');
    res.json(data);
})

app.get('/category', (req, res)=> {
    const data = getData('./data/Category.json');
    res.json(data);
})

app.get('/product', (req, res)=> {
    const data = getData('./data/Product.json');
    res.json(data);
})

app.listen(port, ()=> {
    console.log(`Server is running on port:  ${port}`)
})


const getData = (path)=> {
    const data = fs.readFileSync(path, 'utf-8', (err, data)=> data)
    return JSON.parse(data)
}