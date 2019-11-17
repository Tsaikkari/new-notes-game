const mongoose = require('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/wtm', { userUnifiedTopology: true, 
useNewUrlParser: true})
    console.log('connected')
}

main()