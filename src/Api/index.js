import axios from "axios";

const baseURL = "http://18.237.111.97:9000/api";

export const api = {

    // ---------------- Get  List Api -----------------
    getList: () => {
        return axios.get(`${baseURL}/get_posts`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    },

};