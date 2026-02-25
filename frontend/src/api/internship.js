import axios from "../utils/axios"
import toast from "react-hot-toast";


export const applyForInternship = async (internshipId) => {
    try {
        const res = await axios.post(`/api/student/apply-internship/${internshipId}`);

        // console.log(res);

        if (res.data.success) {
            toast.success(res.data.message)
        }


    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.message || "Failed to apply for internship");
    }
}