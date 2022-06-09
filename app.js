const express =require('express');
const user=require('./routes/UserRoutes');
const category=require('./routes/CategoryRoutes')
// const db=require('./db/db');
const app=express()
// const port =2022;
const mongoosedb=require('./db/mongoosedb')
const product=require('./routes/ProductRoutes')
const order=require('./routes/orderRoutes')
const path=require('path')
const logger=require('./static/Scripts/Logger')
const dotnev=require('dotenv');
dotnev.config()
// db.connect();
app.use(express.static("./static"))
app.use(express.json());
app.use('/user',user);
app.use('/category',category);
app.use('/product',product);
app.use('/order',order);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'./static/404.html'));
})
app.use(function(err,req,res,next){
    // console.error(err.stack)
    logger.error('An error occurred '+err)
    res.status(500).send('Something broke!')
})

app.listen(process.env.PORT,()=>{
    console.log('server is up');
    logger.info(`Server is up`)
});