import axios from "../utils/axios"
import toast from "react-hot-toast";

export const createEducation = async (educationData) => {
    try {
        const res = await axios.post("/api/student/education", educationData);

        if (res.data.success) {
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to create education entry");

    }
}

export const deleteEducation = async (educationId) => {
    try {
        const res = await axios.delete(`/api/student/education/${educationId}`);

        if (res.data.success) {
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to delete education entry");
    }
}

export const updateEducation = async (educationId, educationData) => {
    try {
        const res = await axios.put(`/api/student/education/${educationId}`, educationData);
        if (res.data.success) {
            toast.success(res.data.message);
        }
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to update education entry");
    }
}