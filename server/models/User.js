import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        id: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        name: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        phone:{
            type: String,
            default:"",
        },
        professionalDetails:{
            type: String,
            default:"",
        },
        about:{
            type: String,
            default:"",
        },
        skills: {
            type: Array,
            default: [],
        },
        certifications: {
            type: Array,
            default: [],
        },
        experience:{
            type: Array,
            default: [],
        },
        education:{
            type: Array,
            default: [],
        },
        password: {
            type: String,
            required: true,
            min: 5,
        },
        picturePath: {
            type: String,
            default: "",
        },
        connections: {
            type: Array,
            default: [],
        }
    },
    { timestamps: true }
);

const User  = mongoose.model("User", UserSchema);
export default User;