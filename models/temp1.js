import sequelize from "../connection.js";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Temp1 = sequelize.define("Temp1",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    MachName:{
        allowNull:false,
        type: DataTypes.STRING
    },
    ProximityCount:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    Timestamp:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false
    }
});

export default Temp1;