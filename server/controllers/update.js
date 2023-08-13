import User from "../models/User.js";
import cloudinary from "../utils/cloudinary.js";

/* UPDATE */

export const updateName = async(req, res) => {
    try{
        const { id } = req.params;
        const { name } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "name": name,
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateEmail = async(req, res) => {
    try{
        const { id } = req.params;
        const { email } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "email": email,
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updatePhone = async(req, res) => {
    try{
        const { id } = req.params;
        const { phone } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "phone": phone,
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateAbout = async(req, res) => {
    try{
        const { id } = req.params;
        const { about } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "about": about,
            } 
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateProfessionalDetails = async(req, res) => {
    try{
        const { id } = req.params;
        const { professionalDetails } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "professionalDetails": professionalDetails,
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateSkills = async(req, res) => {
    try{
        const { id } = req.params;
        const { skill } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                $push:{
                    "skills":{
                        skill,
                    }
                }
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateCertifications = async(req, res) => {
    try{
        const { id } = req.params;
        const { title, description } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                $push:{
                    "certifications":{
                        "title": title,
                        "description": description,
                    }
                }
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateExperience = async(req, res) => {
    try{
        const { id } = req.params;
        const { time, type, designation, company } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                $push:{
                    "experience":{
                        "time": time,
                        "type": type,
                        "designation": designation,
                        "company": company,
                    }
                }
            }
        );
        res.status(200).json(updatedUser);
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updateEducation = async(req, res) => {
    try{
        const {id} = req.params;
        const { institute, time, degree, about } = req.body;

        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                $push:{
                    "education":{
                        "institute": institute,
                        "time": time,
                        "degree": degree,
                        "about": about,
                    }
                }
            }
        );
    }catch(err){
        res.status(404).json({ message: err.message });
    }
};

export const updatePicture = async(req, res) => {
    try{
        const file = req.file.path;
        console.log(file);
        const { id } = req.params;
        const result = await cloudinary.uploader.upload(file);
        
        const updatedUser = await User.findOneAndUpdate(
            {"id": id},
            {
                "picturePath": result.secure_url
            }
        );

    }catch(err){
        res.status(500).json({ message: err.message });
    }
};