const db = require ('../config/database')

exports.createProduct = async (req, res) => {
    const {product_name, quantity, price} = req.body
    const {rows} = await db.query (
        "INSERT INTO products (product_name,quantity,price) VALUES ($1,$2,$3)", 
        [product_name, quantity, price]
    )

    res.status(201).send({
        message: 'Product Added Succesfully',
        body: {
            product: {product_name, quantity, price}
        }
    })
}

exports.listAll = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY product_name ASC')

    res.status(201).send(response.rows)
}

exports.findById = async(req, res) => {
    const productId = parseInt(req.params.id)
    const response = await db.query('SELECT * FROM products WHERE productid = $1', [productId])

    res.status(200).send(response.rows)
}

exports.updateById = async (req, res) => {
    const productId = parseInt(req.params.id)
    const {product_name, quantity, price} = req.body

    const response = await db.query('UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE productid = $4', [product_name, quantity, price, productId])

    res.status(200).send({message: 'Product Updated!'})
}

exports.deleteById = async (req, res) => {
    const productId = parseInt(req.params.id)
    await db.query('DELETE FROM products WHERE productid=$1', [productId])

    res.status(200).send({message: 'Product was Deleted!'})
}