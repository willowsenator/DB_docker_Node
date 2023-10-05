const {Pool} = require("pg");

const pool = new Pool({
    host: '127.0.0.1',
    user: 'postgres',
    password: 'test',
    database: 'postgres',
    port: 5432
});

 const query = (sql, parameters)=>{
    return new Promise((resolve, reject)=>{
        pool.connect(
            (err, client, done) =>{
                if(err){
                    reject(err);
                }
                client.query(sql, parameters, (error, result)=>{
                    done();
                    if(error){
                        reject(error);
                    }
                    resolve(result.rows);
                });
            }
        )
        
    });
  };

  query("SELECT * FROM ORDERS limit 10", []).then(rows => {
    console.log(rows);
  }).catch((err)=>{
    throw new Error("Error to execute query: ", err);
  });