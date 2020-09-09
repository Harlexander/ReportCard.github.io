const columns = [1,2,3,4,5];
let ca, md, exam, agg;
let [totalca, totalmd, totalexam, total] = [0, 0, 0, 0];

window.onload = () => {
  //events that ll occcurs on screen load
    showHide("form","block")
    showHide("report", "none")
    document.getElementById("student").value = get("name");
    document.getElementById("teacher").value = get("teacher");
    document.getElementById("grade").value = get("grade");
    document.getElementById("dep").value = get("dep");
    document.getElementById("sex").value = get("sex");
    document.getElementById("session").value = get("session");

     
}

  class StudentInfo {
      constructor (student, grade, dep, sex, teacher, session){
        this.student = student;
        this.grade = grade;
        this.dep = dep;
        this.sex = sex;
        this.teacher = teacher;
        this.session = session;
      }
    }
function myFunction() {
    studentBio = new StudentInfo(document.getElementById("student").value, 
    document.getElementById("grade").value, 
    document.getElementById("dep").value, 
    document.getElementById("sex").value,
    document.getElementById("teacher").value, 
    document.getElementById("session").value)


    storage("name", studentBio.student);
    storage("teacher", studentBio.teacher);
    storage("grade", studentBio.grade);
    storage("dep", studentBio.dep);
    storage("sex", studentBio.sex);
    storage("session", studentBio.session);


    if( studentBio.student!="" && studentBio.teacher!= ""){
        showHide("form", "none")
        showHide("report", "block");

        personalInfo("fullname", get("name"));
        personalInfo("class", get("grade"));
        personalInfo("dept", get("dep"));
        personalInfo("gender", get("sex"));
        personalInfo("teachername", get("teacher"));
        personalInfo("term", get("session"));
    }else{
        alert("please fill all")
    }
  }
  for(const x of columns){
      document.getElementById("button").addEventListener('click', function(){
        
        ca = parseInt(document.getElementById("ca" + x).value);
        md = parseInt(document.getElementById("mt" + x).value);
        exam = parseInt(document.getElementById("exam" + x).value);
        agg = document.getElementById("aggregate" + x).innerHTML = (ca + md + exam)/2; 

        if (ca == "" || md == "" || exam == "") {
          return alert("input all scores")
         
        }
        document.getElementById("totalscoreca").innerHTML =  Math.floor(totalca += ca);
        document.getElementById("totalscoremt").innerHTML =  Math.floor(totalmd += md);
        document.getElementById("totalscoreexam").innerHTML =  Math.floor(totalexam += exam);
        document.getElementById("totalscore").innerHTML =  Math.floor((total += agg)/500 * 100) + "%";
        
        if(agg > 70){
          document.getElementById("performance" + x).style.backgroundColor = "green";
          document.getElementById("performance" + x).innerHTML = "A+";
        }else if(agg > 59 && agg< 70){
          document.getElementById("performance" + x).style.backgroundColor = "blue";
          document.getElementById("performance" + x).innerHTML = "B+";
        }else if(agg > 49 && agg< 60){
          document.getElementById("performance" + x).style.backgroundColor = "yellow";
          document.getElementById("performance" + x).innerHTML = "C+";         
        }else if(agg < 49){
          document.getElementById("performance" + x).style.backgroundColor = "red";
          document.getElementById("performance" + x).innerHTML = "F";  
        }else{
          document.getElementById("performance" + x).style.backgroundColor = "white";
          document.getElementById("performance" + x).innerHTML = ""; 
        }
        showHide("button", "none")
      })
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



    



