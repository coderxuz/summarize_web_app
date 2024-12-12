import './style.scss';
import { get_summarize } from './requests/get-summarize';

const tg = window.Telegram.WebApp;
tg.ready();

function displayUserData() {
  // Get the initDataUnsafe object (contains user data in raw form)
  const initData = tg.initDataUnsafe;
  console.log(initData);
  document.querySelector('#user-id').textContent = `${initData.user.id}`

}
displayUserData()

