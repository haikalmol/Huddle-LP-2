export default class FormValidation {
  constructor() {
    if (!this.vars()) return false;
    this.setupEvents();
  }

  vars() {
    this.selectors = {
      form: "data-form",
      input: "data-input",
      submit: "data-cta",
      errorClass: "error",
    };

    this.form = document.querySelector(`[${this.selectors.form}]`);
    this.input = document.querySelector(`[${this.selectors.input}]`);
    this.submit = document.querySelector(`[${this.selectors.submit}]`);

    if (!this.form || !this.input || !this.submit) return false;

    this.inputValue;
    this.regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return true;
  }

  setupEvents() {
    this.submit.addEventListener("click", () => this.formValidation(event));
  }

  formValidation(event) {
    event.preventDefault();
    this.inputValue = this.input.value;
    this.emailValidation(this.inputValue) ? this.form.submit() : this.form.classList.add(`${this.selectors.errorClass}`);
  }

  emailValidation(email) {
    return this.regex.test(email);
  }
}
