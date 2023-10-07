const oracledb = require('oracledb');

const dbConfig = {
    user: 'c##datos',
    password: 'datos',
    connectString: 'localhost:1521/XE'
};

function query(sql){
    oracledb.getConnection(dbConfig, (err, connection)=>{
        if(err){
            console.error('Error connecting to the database: ', err.message);
            return;
        }
        console.log("Connected to database ...OK");

        connection.execute(sql, (err, result)=>{
            if(err){
                console.error('Error executing query:', err.message);
                return;
            }

            console.log('Query result:', result.rows);
        });

        connection.close((err)=>{
            if(err){
                console.error('Error closing the database connection:', err.message);
            }
        });
    });
}

query("SELECT * FROM orders");