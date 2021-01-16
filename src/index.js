import css from "./css/styles.css";
import fetchObject from "./js/fetch.js";
import galleryRefs from "./js/refs.js";
import libs from "./js/libs.js";
console.log(galleryRefs);
const { form, searchBtn, gallery } = galleryRefs;
console.log(form, searchBtn, gallery);

fetchObject.getFetc();