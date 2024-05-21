const path = require('path');

const productsController = {
    list: (req, res) => {
        res.render(path.join(__dirname, '../views/products/products'));
    }
}

module.exports = productsController; 