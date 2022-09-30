import pool from '../configs/connectDB';
import multer from 'multer';


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

    return res.render('detail.ejs',{dataUser : user[0]});
}
let createNewUser = async (req,res) =>{
    let {firstName, lastName , email, address} = req.body;
    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES(?, ?, ?, ?)', [firstName, lastName, email, address]);
    return res.redirect('/');
}
let deleteUser = async (req,res)=>{
    let userID = req.body.userID;
    await pool.execute('DELETE FROM users where ID = ?', [userID])
    return res.redirect('/');
}
let getEditPage = async(req,res)=>{
    let ID = req.params.ID;
    let [user] = await pool.execute('select * from users where id = ?',[ID]);
    return res.render('updateUser.ejs', {dataUser : user[0]});

}
let postUpdateUser = async(req,res)=>{
    let {firstName,lastName,email,address,ID} = req.body;
    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where ID = ?',
    [firstName,lastName,email,address,ID]);
    return res.redirect('/');
}

let getUpLoadFilePage = async (req,res) =>{
    return res.render('uploadfile.ejs')
}


const upload = multer().single('profile_pic');

let handleUpLoadFile = async (req,res)=>{

    // 'profile_pic' is the name of our file input field in the HTML form
    // console.log(req.file)
    upload(req, res, function(err) {
        // req.file contains information of uploaded file
        // req.body contains information of text fields, if there were any

        if (req.fileValidationError) {
            return res.send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.send('Please select an image to upload');
        }
        else if (err instanceof multer.MulterError) {
            return res.send(err);
        }
        else if (err) {
            return res.send(err);
        }

        // Display uploaded image for user validation
        res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    });
}




module.exports = {
    getHomePage,
    getAboutPage,
    getDetailPage,
    createNewUser,
    deleteUser,
    getEditPage,
    postUpdateUser,
    getUpLoadFilePage,
    handleUpLoadFile
}