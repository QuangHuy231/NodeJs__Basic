import pool from '../configs/connectDB';


let getAllUser = async (req,res)=>{

    const [rows, fields] = await pool.execute( 'SELECT * FROM `users`');

    

    return res.status(200).json({
        message: 'ok',
        data : rows
    })
}

let createNewUser = async (req,res)=>{
    let {firstName, lastName , email, address} = req.body;

    if(!firstName || !lastName || !email || !address){
        return res.status(200).json({
            message : 'missing required params'
        })
    }

    await pool.execute('INSERT INTO users(firstName, lastName, email, address) VALUES(?, ?, ?, ?)', 
    [firstName, lastName, email, address]);


    return res.status(200).json({
        message : 'ok'
    })
}

let updateUser = async (req,res)=>{
    let {firstName,lastName,email,address,ID} = req.body;

    if(!firstName || !lastName || !email || !address || !ID){
        return res.status(200).json({
            message : 'missing required params'
        })
    }

    await pool.execute('update users set firstName = ?, lastName = ?, email = ?, address = ? where ID = ?',
    [firstName,lastName,email,address,ID]);
    
    return res.status(200).json({
        message : 'ok'
    })

}

let deleteUser = async (req,res)=>{
    let userID = req.params.ID;

    if(!userID){
        return res.status(200).json({
            message : 'missing required params'
        })
    }

    await pool.execute('DELETE FROM users where ID = ?', [userID])

    return res.status(200).json({
        message : 'ok'
    })

}


module.exports = {
    getAllUser,
    createNewUser,
    updateUser,
    deleteUser
}