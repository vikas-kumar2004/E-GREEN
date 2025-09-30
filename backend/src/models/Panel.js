import mongoose from "mongoose";

const panelSchema = new mongoose.Schema({
    country:{
        type : String,
        required: true,
        countryName : [{"INDIA": 5}]
    },

    state:{
        type: String,
        required: true,
        stareName : [{BIHAR: 10}]
    },

    district:{
        type: String,
        required : true,
        districtName : [{PATNA: 4}]
    },
},{ timestamps: true });
const Panel = mongoose.model("Panel", panelSchema);
export default Panel;
