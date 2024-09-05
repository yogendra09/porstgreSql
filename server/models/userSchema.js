import { DataTypes } from "sequelize";

export const createUserModel = async(sequelize) => {
    
    const User = sequelize.define("user", {
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase:true,
            unique:true
        },
        empId:{
            type: DataTypes.STRING,
            allowNull: false,
            unique:true,

        }
    })
    
    return User;

}