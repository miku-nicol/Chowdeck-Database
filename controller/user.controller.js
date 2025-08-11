const User = require('../DataBase/model/user.schema')

const registerUser = async (req, res) =>{
    const { name, email, password} = req.body;

    try{
        const exist = await User.findOne ({ email });
        if (exist) return res.status(400).json({message:'User already exists'});
        
        const user = await User.create({name, email, password})
        res.status(201).json({message: 'Users registered successfully',user})
    } catch (error) {
        res.status(500).json({ message: 'Server error', })
    }
};

module.exports = { registerUser };