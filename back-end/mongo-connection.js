const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/test', { userUnifiedTopology: true, 
useNewUrlParser: true})
    console.log('connected')
}

main()