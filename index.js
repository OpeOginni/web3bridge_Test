const addStudentButton = document.getElementById("addStudentButton");
const newPageButton = document.querySelector("Add_Student_Button");
const _studentName = document.getElementById("studentName");
const _mathsScore = document.getElementById("mathScore");
const _physicsScore = document.getElementById("physicsScore");
const _chemistryScore = document.getElementById("chemistryScore");
const Student_Info_Table = document.getElementById("Student_Info_Table");

let studentName;
let mathsScore;
let englishScore;
let physicsScore;
let chemistryScore;

function newPage() {
  var Intro_Page = document.querySelector(".Intro_Page");
  var Second_Page = document.querySelector(".Second_Page");

  Intro_Page.style.display = "none";
  Second_Page.style.display = "block";
}

function backFunction() {
  var Intro_Page = document.querySelector(".Intro_Page");
  var Second_Page = document.querySelector(".Second_Page");

  Intro_Page.style.display = "block";
  Second_Page.style.display = "none";
}

function addStudent() {
  studentName = document.getElementById("studentName").value;
  mathsScore = document.getElementById("mathsScore").value;
  englishScore = document.getElementById("englishScore").value;
  physicsScore = document.getElementById("physicsScore").value;
  chemistryScore = document.getElementById("chemistryScore").value;

  var newRow = Student_Info_Table.insertRow();

  var nameCell = newRow.insertCell(0);
  var mathsCell = newRow.insertCell(1);
  var englishCell = newRow.insertCell(2);
  var physicsCell = newRow.insertCell(3);
  var chemistryCell = newRow.insertCell(4);

  nameCell.innerHTML = studentName;
  mathsCell.innerHTML = mathsScore;
  englishCell.innerHTML = englishScore;
  physicsCell.innerHTML = physicsScore;
  chemistryCell.innerHTML = chemistryScore;

  console.log(studentName);
  var Intro_Page = document.querySelector(".Intro_Page");
  var Second_Page = document.querySelector(".Second_Page");

  Intro_Page.style.display = "block";
  Second_Page.style.display = "none";
}
