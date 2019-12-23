const Product = require('../models/product');
module.exports = {
    //Method used to read all the products.
    readAllProducts(req, res) {
        Product.find({}).exec((err, products) => {
            //Always do a couple of console.logs just in case of errors.
            if(err) console.log('Get Product Mongoose Error------------------', err);
           //Always log the data you are returning from the database to check if you are receiving the right data.
            console.log('products-------------', products);
            res.status(200).send(products);
        });
    },
    readProduct(req, res) {
        //Destruct the id from the endpoint url, to retrieve  a specific product.
       const { id } = req.params;
      //Copy and paste on of the product's id to the url when testing it.
      //Use the findById to get a specific product.
      Product.findById(id).exec((err, product) => {
       if(err) console.log('Get Single Product Error---------------', err);
       console.log('product--------------', product);
       res.status(200).json({product});
      })
    }
 }