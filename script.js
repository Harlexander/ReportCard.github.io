
let _student,_grade, _dep, _sex, _teacher, _session;
window.onload = () => {
    showHide("form","block")
    showHide("report", "none")
    document.getElementById("student").value = get("name");
    document.getElementById("teacher").value = get("teacher");
    document.getElementById("grade").value = get("grade");
    document.getElementById("dep").value = get("dep");
    document.getElementById("sex").value = get("sex");
    document.getElementById("session").value = get("session");
}
function myFunction() {
    _student = document.getElementById("student").value;
    _grade = document.getElementById("grade").value;
    _dep =  document.getElementById("dep").value;
    _sex = document.getElementById("sex").value;
    _teacher = document.getElementById("teacher").value;
    _session = document.getElementById("session").value;

    storage("name", _student);
    storage("teacher", _teacher);
    storage("grade", _grade);
    storage("dep", _dep);
    storage("sex", _sex);
    storage("session", _session);


    if( _student!="" && _teacher != ""){
        showHide("form", "none")
        showHide("report", "block");

        personalInfo("fullname", get("name"));
        personalInfo("class", _grade);
        personalInfo("dept", _dep);
        personalInfo("gender", _sex);
        personalInfo("teachername", _teacher);
        personalInfo("term", _session);

        document.getElementById("date").innerHTML = new Date().getDate;

    }else{
        alert("please fill all")
    }
  }

const storage = (key, value) => {
  return sessionStorage.setItem(key, value)
}
const get = (value) => {
  return sessionStorage.getItem(value)
}

const personalInfo = (id, value) => {
    document.getElementById(id).innerHTML = value;
}

const showHide = (id, value) => {
    document.getElementById(id).style.display = value
}



    



