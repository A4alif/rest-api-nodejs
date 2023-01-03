const Product = require("../model/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, select } = req.query;
  const queryObject = {};
  if (company) {
    queryObject.company = company;
  }

  if (featured) {
    queryObject.featured = featured;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = Product.find(queryObject);

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;

  let skip = (page -1) *  limit;
  apiData = apiData.skip(skip).limit(limit);

  const Products = await apiData;
  res.status(200).json({ Products, nbHints: Products.length });
};
const getAllProductsTesting = async (req, res) => {
  const myData = await Product.find(req.query);
  console.log(req.query);
  res.status(200).json({ myData });
};

module.exports = {
  getAllProducts,
  getAllProductsTesting,
};
