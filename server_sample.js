// const MySQL = require('mysql');
//
//
// class MySQLConnection {
//   setupConnection() {
//     const getDBConnection = MySQL.createConnection({
//       host: 'DT-0000023',
//       user: 'root',
//       password: '123456',
//       database: 'fastfood'
//     });
//     //check if has error
//     return getDBConnection;
//     // return this.checkConnection(getDBConnection);
//   }
//   checkConnection(getDBConnection){
//     getDBConnection.connect(function(err) {
//       if (err) {
//         console.log("Something`s error on the database connection");
//         return false;
//       } else { // Connected succesfully
//         return getDBConnection;
//       }
//     });
//   }
//   getTableData(tableName){
//     this.setupConnection().query('SELECT * FROM `' + tableName.tblName + '`', (err, rows, fields) => {
//       if(err){
//         console.log(err);
//       } else {
//         console.table(rows);
//       }
//     });
//   }
//
// }
//
// class MySQLInsert extends MySQLConnection{
//   insertData() {
//     console.log('zxc');
//   }
// }
//
// const server = new MySQLInsert();
// // xx.setupConnection();
// // xx.getTableData('tbl_menu');
// // xx.insertData('tbl_menu', {menu: 'burger'});
// server.insertData();
