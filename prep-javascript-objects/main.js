const person = {
  firstName: "Jon",
  lastName: "Snow",
  hobby: "Surviving winter",
};
console.log(person);

const fullName = person.firstName + " " + person.lastName;
console.log("The person's name is: " + fullName);

person.job = "Brother of the Night's Watch";
console.log("The person's current job is:", person.job);

person["previousJob"] = 'Bastard of Ned Stark';
console.log("The person's previous job was:", person["previousJob"]);

console.log("The complete person object:", person);
