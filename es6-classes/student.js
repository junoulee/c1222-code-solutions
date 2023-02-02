/* exported Student */

class Student {
  constructor(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
    this.fullName = `${this.firstName} ${this.lastName}`;
  }

  getFullName(firstName, lastName) {

    return this.fullName;
  }

  getIntroduction(firstName, lastName, subject) {
    return `Hello, my name is ${this.fullName} and I am studying ${this.subject}.`;
  }
}
