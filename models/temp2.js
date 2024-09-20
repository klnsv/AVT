import sequelize from "../connection.js";
import { DataTypes } from "sequelize";
import Sequelize from "sequelize";

const Temp2 = sequelize.define("Temp2",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    RFID:{
        allowNull:false,
        type: DataTypes.FLOAT
    },
    Timestamp:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false
    }
});

export default Temp2;