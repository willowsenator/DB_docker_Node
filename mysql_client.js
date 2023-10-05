const mysql = require("mysql8");

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'test',
    database: 'northwind',
    port: 3306
  });

  const query = (sql)=>{
    return new Promise((resolve, reject)=>{
        pool.query(sql, (error, results)=>{
            if(error){
                reject(error);
            }
            resolve(results);
        });
    });
  };

  query("select * from customers").then((results) => {
    console.log(results);
  }).catch((err)=>{
    throw new Error("Error to execute query: ", err);
  });