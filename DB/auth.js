const mongoose = require('mongoose');

console.log("auth auth");

mongoose.connect('mongodb://localhost:27017/book_manager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});




module.exports = mongoose;