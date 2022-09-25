import pool from '../configs/connectDB';


let getHomePage = async (req,res)=>{

    const [rows, fields] = await pool.execute( 'SELECT * FROM `users`');
    return res.render('index.ejs',{dataUser: rows});
   
}

let getAboutPage = (req,res)=>{
    return res.render('about.ejs');
}

let getDetailPage = async (req,res) =>{
    let ID = req.params.ID;
    let [user] = await pool.execute('SELECT * FROM `users` WHERE ID=?', [ID])

    return res.send(JSON.stringify(user[0]));
}
module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage
}