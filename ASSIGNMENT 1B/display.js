function handlesubmit()
{
    const finame = document.getElementById("firstname").value; //get first name
    const laname = document.getElementById("lastname").value;  //get last name
    const mname = document.getElementById("mname").value;  //get mother's name
    const fname = document.getElementById("fname").value;  //get father's name
    const email = document.getElementById("email").value; //get email
    const mobile = document.getElementById("mobile").value;  //get mobile no.
    const coursename = document.getElementById("coursename").value; //get coursename selected from dropdown

    //get gender from radio buttons
    const radios1 = document.getElementsByName("gender");
    const gender = Array.from(radios1).find(radio => radio.checked);

    //get coursetype from radio buttons
    const radios2 = document.getElementsByName("coursetype");
    const coursetype = Array.from(radios2).find(radio => radio.checked);

    //store values in local storage
    localStorage.setItem("FIRSTNAME", finame);  
    localStorage.setItem("LASTNAME", laname);
    localStorage.setItem("MNAME", mname);
    localStorage.setItem("FNAME", fname);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("MOBILE", mobile);
    localStorage.setItem("GENDER", gender.value)
    localStorage.setItem("COURSETYPE", coursetype.value);
    localStorage.setItem("COURSENAME", coursename);

    alert("Your form has been submitted! click on View conformation to view details")

    return;
}

window.addEventListener('load', ()=>{
const firstname = localStorage.getItem("FIRSTNAME");  //get first name from local storage
const lastname = localStorage.getItem("LASTNAME");
const mname = localStorage.getItem("MNAME");
const fname = localStorage.getItem("FNAME");
const email = localStorage.getItem("EMAIL");
const mobile = localStorage.getItem("MOBILE");
const gender = localStorage.getItem("GENDER");
const coursetype = localStorage.getItem("COURSETYPE");
const coursename = localStorage.getItem("COURSENAME");

document.getElementById("r-firstname").innerHTML = firstname;  //display first name on result page
document.getElementById("r-lastname").innerHTML = lastname;
document.getElementById("r-mname").innerHTML = mname;
document.getElementById("r-fname").innerHTML = fname;
document.getElementById("r-email").innerHTML = email;
document.getElementById("r-mobile").innerHTML = mobile;
document.getElementById("r-gender").innerHTML = gender;
document.getElementById("r-coursetype").innerHTML = coursetype;
document.getElementById("r-coursename").innerHTML = coursename;
})