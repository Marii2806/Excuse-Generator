window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
console.log("My dog ate my homework");

let adjective = ["A slow", "A two headed", "A lonely", "A crazy"];
let subject = ["merchant", "penecone", "jogger", "dog", "comedian"];
let action = ["threw", "yelled at", "kicked", "burned"];
let item = ["my computer", "my sandwich", "my car"];
let where = [
  "on the street",
  "in my house",
  "in front of the office",
  "near the toilet",
  "in front of my face"
];

function generateExcuse() {
  let adjIndx = Math.floor(Math.random() * adjective.length);
  let subjIndx = Math.floor(Math.random() * subject.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let itemIndx = Math.floor(Math.random() * item.length);
  let whereIndx = Math.floor(Math.random() * where.length);

  return `${adjective[adjIndx]} ${subject[subjIndx]} ${action[actIndx]} ${item[itemIndx]} ${where[whereIndx]}`;
}
