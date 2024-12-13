import './style.scss';
import axios from 'axios';

const BACKEND_URL = 'https://a458-84-54-70-42.ngrok-free.app' // import.meta.env.BACKEND_URL;
console.log(BACKEND_URL);


const get_summarize =async (videoUrl, userLang, userId) => {
  try {
    const response =await  axios.get(`${BACKEND_URL}/summarize`, {
      params: {
        video_url: videoUrl,
        user_lang: userLang,
        user_id: userId,
      },
      headers:{
        'ngrok-skip-browser-warning':'skip'
      }
    });

    return await  response.data;
  } catch (error) {
    console.error("Error fetching summarize:", error);
    throw error;
  }
};


const tg = window.Telegram.WebApp;
tg.ready();

async function displayUserData() {
  const initData = tg.initDataUnsafe;
  const userId = initData.user?.id
  const summarized = await get_summarize("https://youtu.be/LaDZnn7WgOY?si=n14fBdaQSnAUpVaO",'uz',6110556252)
  console.log(summarized);
  
}
displayUserData()

