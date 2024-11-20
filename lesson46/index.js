// getter setter

class Foo {
  #private;
  constructor(value) {
    this.#private = value;
  }
  get privateProperty() {
    if (this.#private == "Value of provate")
      return "this value is not accepted value:)";
    else return this.#private;
  }
  set changePrivate(value) {
    if (!value) return this.#private = "Not Accepted";
    if (value.toString().length < 3) return this.#private = null;
    this.#private = value;
  }
}
const foo = new Foo("Value of provate");
// foo.changePrivate = "new Value"
foo.changePrivate = ""
console.log(foo.privateProperty);
