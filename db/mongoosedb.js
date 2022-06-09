let mongoose = require('mongoose');
const server = 'mongodb://srv1:27017';
const database='chanchy&michal';

class Database{
    constructor(){
        this._connect()
    }

    _connect(){
        mongoose.connect(`${server}/${database}`)
        .then(()=>{
            console.log('success')
        })
        .catch(err=>{
            console.error('error')
        })
    }


}
module.exports=new Database()