import { BACKEND_URL } from "./get-summarize";
import { userId } from "../web_app/user_data";


import axios from "axios";


export const userLang = async ()=>{
    const response = await axios.get(`${BACKEND_URL}/lang_code`,
        {
            params:{
                tg_id:userId
            },
            headers:{
              "ngrok-skip-browser-warning":'skip'
            }
        }
    )
    console.log(response.data);
    
    return response.data
}