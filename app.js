var mysql = require("mysql");

var baglanti = mysql.createPool({
    host:"localhost",
    user:"root",
    pass:"",
    database:"kelime"
});

baglanti.getConnection((err, baglanti)=> {
    console.log("bağlandı işte")
    baglanti.query("SELECT * FROM english", (err, res) => {
        if(err) throw err;
        console.log(res[0]["inglizce"])
    })
})