import connection from '../configs/connectDB';


let getHomePage = (req,res)=>{
    let data = [];
    connection.query(
    'SELECT * FROM `users`',
    function(err, results, fields) {
        console.log('check sql')
        console.log(results); // results contains rows returned by server
        results.map((row) => { 
            data.push({
                ID : row.ID,
                firstName : row.firstName,
                lastName : row.lastName,
                email : row.email,
                address : row.address
        })
            
        });
          // console.log(fields); // fields contains extra meta data about results, if available
        // console.log(rows);
        return res.render('index.ejs',{dataUser: JSON.stringify(data)});
        });
   
}

let getAboutPage = (req,res)=>{
    return res.render('about.ejs');
}
module.exports = {
    getHomePage,
    getAboutPage
}