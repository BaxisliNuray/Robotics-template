import axios from "axios"
import { BASE_URL } from "./base_url"

//get all
export const getAllRobots = async () => {
    let globalData;
    await axios.get(`${BASE_URL}/robots`).then((res) => {
        globalData = res.data;
    });
    return globalData;
}

//post

export const postRobots = (payload) => {
    axios.post(`${BASE_URL}/robots`, payload)
}

//delete
export const deleteRobot=async(Id)=>{
    let deleteRobot
    await axios.delete(`${BASE_URL}/robots/${Id}`).then((res)=>{
        deleteRobot=res.data
    })
}