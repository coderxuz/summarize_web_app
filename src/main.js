import "./style.scss";
import { get_summarize } from "./requests/get-summarize";
import { userLang } from "./requests/get_lang";
import { getTranslation } from "./translations/translations";

const userLangFetch = await userLang();
const userLangCode = userLangFetch.lang_code
const $form = document.querySelector("form");
const $input = document.getElementById("video_url_field");
const $errorOrResult = document.querySelector("#error_or_result .result");
// const $help = document.querySelector("#error_or_result .help");

// $help.innerHTML = getTranslation(
//   'en',
//   "resize"
// );

$form.addEventListener("submit", async(e) => {
  e.preventDefault();
  const url = $input.value;
  console.log(url);
  
  if (url == '') {
    $errorOrResult.classList.value = 'error'
    $errorOrResult.textContent = getTranslation(
      userLangCode,
      "please_write_url"
    );
    return
  }
  if (!(url.includes("youtube.com") || url.includes("youtu.be"))) {
    $errorOrResult.classList.value = 'error'
    $errorOrResult.textContent = getTranslation(
      userLangCode,
      "please-send-valid-url"
    );
    return
  }

  $errorOrResult.textContent = ''
  const summary = await get_summarize(url,userLangCode)
  $errorOrResult.classList.value = 'result'
  $errorOrResult.textContent = summary.summarized_text
});
