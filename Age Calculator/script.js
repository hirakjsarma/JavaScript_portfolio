
var btnEl= document.getElementById("btn");
btnEl.addEventListener("click",calculateAge)

const birthdayEl = document.getElementById("birthday");

//Button click led to function call
function calculateAge(){
const birthdayValue = birthdayEl.value;
if(birthdayValue===""){
    alert("Please Enter Birthday");
}
else{
    const Calage=getAge(birthdayValue);
    console.log(Calage);
    document.getElementById("DiplayAge").innerHTML= "Your Current Age is "+ Calage;
}


}

//Got the current date and calculated the age

function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate =new Date(birthdayValue);
    var age= currentDate.getFullYear()-birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || month === 0  && currentDate.getDate() < birthdayDate.getDate()){
        age--;
    }
    return age;
}

