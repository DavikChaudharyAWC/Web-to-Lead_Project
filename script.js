let captchaChecked = false;

function beforeSubmit(event){
    if(captchaChecked()){
        let outputDate = document.querySelector(".outputDate");
        let inputDate = document.querySelector(".inputDate");
        console.log('inputDate.value',inputDate.value);
        
        let formattedDate = new Date(inputDate.value).toLocaleDateString("en-IN");
        outputDate.value = formattedDate;
    }else{
        alert('Please check the reCaptcha field to submit');
        event.preventDefault();
    }
}


 function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 

 function captchaSuccess(){
    captchaChecked = true;
 }
