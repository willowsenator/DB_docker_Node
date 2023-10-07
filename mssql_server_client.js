const mssql = require("mssql");
const config = {
    user: "sa",
    password: "Mssql_2023.",
    database: "northwind",
    server: "127.0.0.1",
    pool: {
        min: 0,
        max: 10,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: true,
        trustServerCertificate: true
    }
};

async function query(sql){
    try {
        await mssql.connect(config);
        const result = await mssql.query(sql);
        return result;    
    } catch (error) {
        return {error};
    }
    
}

query("select * from orders").then(res=>{
    console.log(res);
}).catch(err => {
    console.error(err);
})