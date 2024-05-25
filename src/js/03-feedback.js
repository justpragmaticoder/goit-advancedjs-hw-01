import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";
let formData = {};

function onSubmit(ev) {
  ev.preventDefault();

  const input = document.querySelector(".feedback-form input");
  const textarea = document.querySelector(".feedback-form textarea");

  if (textarea.value.trim() === "" || input.value.trim() === "") {
    return alert("Plz, fill all fields!");
  }

  console.log(formData);

  ev.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
}

function onInput(ev) {
  formData[ev.target.name] = ev.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function prefillFormData() {
  const input = document.querySelector(".feedback-form input");
  const textarea = document.querySelector(".feedback-form textarea");
  const storageValue = localStorage.getItem(STORAGE_KEY);
  const savedData = storageValue ? JSON.parse(storageValue) : {};

  if (savedData.email) {
    input.value = savedData.email;
    formData.email = savedData.email;
  }

  if (savedData.message) {
    textarea.value = savedData.message;
    formData.message = savedData.message;
  }
}

(() => {
  const form = document.querySelector(".feedback-form");

  prefillFormData();

  form.addEventListener("input", throttle(onInput, 500));
  form.addEventListener("submit", onSubmit);
})();
