import express from "express";
import {
    updateName,
    updateEmail,
    updatePhone,
    updateAbout,
    updateSkills,
    updateProfessionalDetails,
    updateCertifications,
    updateExperience,
    updateEducation,
    updatePicture
} from "../controllers/update.js";
import upload from "../middleware/multer.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.patch("/:id/updateName", verifyToken, updateName);
router.patch("/:id/updateEmail", verifyToken, updateEmail);
router.patch("/:id/updatePhone", verifyToken, updatePhone);
router.patch("/:id/updateAbout", verifyToken, updateAbout);
router.patch("/:id/updateSkills", verifyToken, updateSkills);
router.patch("/:id/updateProfessionalDetails", verifyToken, updateProfessionalDetails);
router.patch("/:id/updateCertifications", verifyToken, updateCertifications);
router.patch("/:id/updateExperience", verifyToken, updateExperience);
router.patch("/:id/updateEducation", verifyToken, updateEducation);
router.patch("/:id/updatePicture", verifyToken, upload.single('image'), updatePicture);

export default router;