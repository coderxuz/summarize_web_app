import axios from "axios";
import { userId } from "../telegram_web/user_data";

const BACKEND_URL = process.env.BACKEND_URL;
console.log(BACKEND_URL);

export const get_summarize = async (videoUrl, userLang, userId) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/summarize`, {
      params: {
        video_url: videoUrl,
        user_lang: userLang,
        user_id: userId,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching summarize:", error);
    throw error;
  }
};
