const form = document.querySelector("form.login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);

  formData.forEach((value, name) => {
    if (name.length === 0 || value.length === 0) {
      alert("Все поля должны быть заполнены");
    }
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
    document.querySelector("form.login-form").reset();
  });
}
