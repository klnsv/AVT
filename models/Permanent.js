import sequelize from "../connection.js";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Permanent = sequelize.define('Permanent',{
    id:{
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    MachName:{
        allowNull:false,
        type: DataTypes.STRING,
    },
    OperatorID:{
        allowNull:false,
        type:DataTypes.INTEGER
    },
    Shift:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Date:{
        type:DataTypes.DATE,
        allowNull:false
    },
    IdleTime:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    NonWorking:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    MachStatus:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Count:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    OperationType:{
        type:DataTypes.STRING,
        allowNull:false
    },
    StartTime:{
        type:DataTypes.TIME,
        allowNull:false
    },
    EndTime:{
        type:DataTypes.TIME,
        allowNull:false
    }

});

export default Permanent;