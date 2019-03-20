module.exports = function(mongoose) {

    const URI = "mongodb://localhost/product_management";

    mongoose.connect(URI, {useNewUrlParser: true}, 
        err => console.log("db connections", err)
    );
}