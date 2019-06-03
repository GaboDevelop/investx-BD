const API_PATH = "/api";
const mysqlConnection = require("../bd/connection");

module.exports = app => {
  app.get(`${API_PATH}/usuarios`, (req, res) => {
    mysqlConnection.query("SELECT * FROM usuario", (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
};
