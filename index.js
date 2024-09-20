// This is the repository for work related to AVT and is a property of Emblock Tech Pvt Ltd
import sequelize from "./connection.js";
import Permanent from "./models/Permanent.js";
import Temp1 from "./models/temp1.js";
import Temp2 from "./models/temp2.js";
const init = async ()=>{
    console.log("Trying to Connect to Database!");
    try{
        await sequelize.sync({force:true});
        await Permanent.create({
        MachName:"Mach A",
        OperatorID:3843,
        Shift:1,
        Date: new Date(2024,9,11),
        IdleTime:6,
        NonWorking:1,
        MachStatus:"Good",
        Count:57,
        OperationType:"Cutting",
        StartTime: new Date(2024,9,11,9),
        EndTime: new Date(2024,9,11,14)
        });
        await Temp1.create({
            MachName:"Mach A",
            ProximityCount:1,
        });
        await Temp2.create({
            RFID:3843,

        });
        console.log("Temp Table successfully created!!");
        console.log("Connected to DB successfully!!");
    }



    catch(err){
        console.log(err);
    }
}

init()
