const MySQL = require('mysql');

class MySQLConnection {
  setupConnection() {
    const getDBConnection = MySQL.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'menus'
    });
    //check if has error
    return getDBConnection;
    // return this.checkConnection(getDBConnection);
  }
  // checkConnection(getDBConnection){
  //   getDBConnection.connect(function(err) {
  //     if (err) {
  //       console.log("Something`s error on the database connection");
  //       // return false;
  //     } else { // Connected succesfully
  //       // return getDBConnection;
  //       console.log("Connected Succesfully");
  //     }
  //   });
  // }
  fetchTable(tableName) {
    return this.setupConnection().query('SELECT * FROM `' + tableName + '`', (err, rows, fields) => {
      if(err){
        return err;
      } else {
        return rows;
        // data = rows;
      }
    });
  }
}

// module.exports = MySQLConnection;
let getDBConnection = new MySQLConnection();
let xx = getDBConnection.fetchTable("tbl_menu");
console.log(xx);
