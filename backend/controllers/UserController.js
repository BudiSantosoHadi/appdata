import User from "../models/UserModel.js";

export const getUsers = async(req, res)=> {
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
      console.log(error.message );
    }

}


// SingleData   
export const getUserbyId = async(req, res)=> {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
      console.log(error.message );
    }

}


// create UserData
export const createUserData = async(req, res)=> {
    try {
        await User.create(req.body);
        res.status(201).json({msg:"User Created.."} );
    } catch (error) {
      console.log(error.message );
    }

}

// update UserData
export const updateUserData = async(req, res)=> {
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Updated.."});
    } catch (error) {
      console.log(error.message );
    }

}

// update DeleteUserData
export const deleteUserData = async(req, res)=> {
    try {
        await User.destroy( {
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"User Deleted.."});
    } catch (error) {
      console.log(error.message );
    }

}