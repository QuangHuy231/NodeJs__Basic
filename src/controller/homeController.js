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

    return res.send(JSON.stringify(user));
}
let createNewUser = async (req,res) =>{
    console.log('check req:' , req.body)
    let {firstName, lastName , email, address} = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES(?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}

module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage,
    createNewUser
}