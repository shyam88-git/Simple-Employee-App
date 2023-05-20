// for form control

var addBtn=document.getElementById("add-btn");
var model=document.querySelector(".model");
var closeIcon=document.querySelector(".close-icon");

addBtn.onclick = function() {
    model.classList.add('active');
};

closeIcon.onclick=function(){

    model.classList.remove('active');
}

var empData=[];
// start all global variable
var id=document.getElementById('id');
var name=document.getElementById('name');
var lname=document.getElementById('lname');
var email=document.getElementById('email');
var office=document.getElementById('code');
var jtitle=document.getElementById('jtitle');
 var registerBtn=document.getElementById('register-btn');
 var registerForm=document.getElementById('registerForm');


//end all global variable


//start register coding

registerBtn.onclick=function(e){
    e.preventDefault();

    registrationData();
    registerForm.reset('');
    // closeIcon.click();

}

function registrationData(){
    empData.push(
        {id:id.value,
        name:name.value,
        lname:lname.value,
        email:email.value,
        office:code.value,
        jtitle:jtitle.value
    }
    );

    var empString=JSON.stringify(empData);
    localStorage.setItem("empData",empString);


}