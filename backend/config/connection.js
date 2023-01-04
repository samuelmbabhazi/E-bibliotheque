const { Pool } = require("pg");

function connectionMiddleware(connectionData) {
  const pool = new Pool(connectionData);
  return (req, res, next) => {
    req.pool = pool;
    next();
  };
}
module.exports = connectionMiddleware;
