/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
let projectFlag = "off";
let resumeFlag = "off";
let schoolFlag = "off";
let workFlag = "off";

function openProjects() {
  if(projectFlag === "off") {
    document.getElementById("myProjects").style.width = "1000px";
    document.getElementById("myResume").style.width = "0px";
    document.getElementById("mySchool").style.width = "0px";
    document.getElementById("myWork").style.width = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    projectFlag = "on";
  }
  else{
    closeMain();
  }
}

function openResume() {
  if(resumeFlag === "off") {
    document.getElementById("myProjects").style.width = "0px";
    document.getElementById("myResume").style.width = "1000px";
    document.getElementById("mySchool").style.width = "0px";
    document.getElementById("myWork").style.width = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    resumeFlag = "on";
  }
  else{
    closeMain()
  }
}

function openSchool() {
  if(schoolFlag === "off") {
    document.getElementById("myProjects").style.width = "0px";
    document.getElementById("myResume").style.width = "0px";
    document.getElementById("mySchool").style.width = "1000px";
    document.getElementById("myWork").style.width = "0px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    schoolFlag = "on";
  }
  else{
    closeMain()
  }
}

function openWork() {
  if(workFlag === "off") {
    document.getElementById("myProjects").style.width = "0px";
    document.getElementById("myResume").style.width = "0px";
    document.getElementById("mySchool").style.width = "0px";
    document.getElementById("myWork").style.width = "1000px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    workFlag = "on";
  }
  else{
    closeMain();
  }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeMain() {
  document.getElementById("myProjects").style.width = "0px";
  document.getElementById("myResume").style.width = "0px";
  document.getElementById("mySchool").style.width = "0px";
  document.getElementById("myWork").style.width = "0px";
  document.body.style.backgroundColor = "white";
  projectFlag = "off";
  resumeFlag = "off";
  schoolFlag = "off";
  workFlag = "off";
}
