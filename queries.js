const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-18-203-62-227.eu-west-1.compute.amazonaws.com',
  database: 'd8tad8ktf5147u',
  user:'ssrxtstmngmkid',
  password: 'e567ffca1af74995a10696cf9a17922820fe1da42cfc4dd412c8fcccdbab5b60',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getGoods = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getGoodById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.goods WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getGoods,
  getGoodById  
}