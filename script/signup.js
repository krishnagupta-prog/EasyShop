let form=document.querySelector("form");
let memberData=JSON.parse(localStorage.getItem("account-data"))||[];
form.addEventListener("submit",function(e){
    e.preventDefault();
    let formData={
        name:form.name.value,
        email:form.email.value,
        pass:form.password.value,
    }
    memberData.push(formData);
    console.log(memberData)
    localStorage.setItem("account-data",JSON.stringify(memberData));
    alert("Register successfully");
})