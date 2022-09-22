


let getHomePage = (req,res)=>{
    return res.render('index.ejs');
}

let getAboutPage = (req,res)=>{
    return res.send("hello about");
}
module.exports = {
    getHomePage,
    getAboutPage
}