export const tg = window.Telegram.WebApp;
tg.ready();
export const initData = tg.initDataUnsafe;


export const userId = initData.user?.id
