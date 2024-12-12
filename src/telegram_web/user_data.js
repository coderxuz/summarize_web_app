const tg = window.Telegram.WebApp;
tg.ready();
const initData = tg.initDataUnsafe;
export let userId;
if (initData){
    userId = initData.user.id
}
