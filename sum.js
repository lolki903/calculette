//
class User {
    constructor(lastname, age, firstname, email) {
      this.lastname = lastname;
      this.age = age;
      this.firstname = firstname;
      this.email = email;
    }
  }
// const u = new User('Doe', 25, 'John', 'rt@gmail.com');

function isValide(firstname,lastname,age,email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (age < 13) {
        throw new Error('Invalid age');
    }else if (firstname === '' || firstname === undefined|| firstname === null) {
        throw new Error('Invalid firstname');
    }else if (lastname === '' || lastname === undefined|| lastname === null) {
        throw new Error('Invalid lastname');
    }else if (!regex.test(email)) {
        throw new Error('Invalid email');
    }else{
    return true
}
}
module.exports = {
    isValide,
    User
}
