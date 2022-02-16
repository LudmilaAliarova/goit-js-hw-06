const form = document.querySelector("form.login-form");
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const newObj = {};
  formData.forEach((value, name) => {
    console.log(name.length);
    if (name.length === 0 || value.length === 0) {
      alert("Все поля должны быть заполнены");
    }
    newObj[name] = value;
    document.querySelector("form.login-form").reset();
  });
  console.log(newObj);
}
