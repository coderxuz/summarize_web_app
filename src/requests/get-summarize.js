import axios from "axios";
import { userId } from "../web_app/user_data";

export const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


export const get_summarize = async (videoUrl, userLang) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/summarize`, {
      params: {
        video_url: videoUrl,
        user_lang: userLang,
        user_id: userId,
      },
      headers:{
        "ngrok-skip-browser-warning":'skip'
      }
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching summarize:", error);
    throw error;
  }
};
