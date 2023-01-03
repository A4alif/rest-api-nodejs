const getAllProducts = async (req, res) => {
    res.status(200).json({msg : " I am getting products from getAllProducts"})
}
const getAllProductsTesting = async (req, res) => {
    res.status(200).json({msg : " I am getting products from getAllProductsTesting"})
}

module.exports = {
    getAllProducts,
    getAllProductsTesting
}