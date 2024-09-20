import dotenv from "dotenv";
import { Sequelize, DataTypes } from "sequelize";
dotenv.config();

const sequelize = new Sequelize(encodeURI(process.env.URL));
export default sequelize;
