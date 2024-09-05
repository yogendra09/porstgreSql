import { where } from "sequelize";
import { userModel } from "../config/db.config.js";

const test = async (req, res) => {
  res.send("server live!");
};

const users = async (req, res) => {
  const users = await userModel.findAll();
  if (users.length == 0) {
    return res.status(200).send("no user found!");
  }

  res.json(users);
};
const createUser = async (req, res) => {
  const { name, email, empId } = req.body;
  try {
    const userExists = await userModel.findOne({ where: { email } });
    if(userExists == null){
      const user = await userModel.create({ name, email, empId });
      res.status(201).json(user);
    }else{
      res.json({message:"user already exists"})
    }
     
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
    
}

const findUser = async(req,res)=>{
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    // const user = await userModel.findOne({where:{empId:id}})
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.json(user);
}

const deleteUser = async(req,res)=>{
    const { id } = req.params;
    const user = await userModel.findByPk(id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    await user.destroy();
    res.status(204).send();
}

export { test, users, createUser,findUser,updateUser };
