import axios from "../utils/axios"
import toast from "react-hot-toast";

export const updateUserProfile = async (profileData) => {
    try {

        const res = await axios.patch("/api/user/update-user", profileData);

        if (res.data.success) {
            toast.success(res.data.message);
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update profile");
    }
}


export const updateUserProfileImage = async (img) => {
    try {

        const res = await axios.post("/api/user/update-profile-pic", { profile: img }, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        if (res.data.success) {
            toast.success(res.data.message);
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to update profile");
    }
}

export const forgotPassword = async (email) => {
    try {

        const res = await axios.post("/api/user/forgot-password", { email });

        if (res.data.success) {
            toast.success(res.data.message);
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to send reset link");
    }
}

export const resetPassword = async (token, password) => {
    try {
        const res = await axios.post(`/api/user/reset-password/${token}`, { password });

        if (res.data.success) {
            toast.success(res.data.message);
        }

    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to reset password");
    }
}