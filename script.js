
// function login(){
//     admin = ['Tuhin', 'Mohiuddin'];
//     passWord= ['123', '456'];


//     let usrName = prompt("Username: ");
//     let pass = prompt("Password: ");
//     let status;




// for (let i = 0; i < admin.length; i++){
//     if (usrName === admin[i] && pass === passWord[i]){
//         status = "true"
//         break
//     }
// }  


// if(status == "true"){
//     console.log("welcome sir")
// } else{
//     console.log("Wrong User!")
// }

// }



// let todos = [
//     "Clean Room",
//     "Brush Teeth",
//     "Stay Home",
//     "Stay Same",
// ]




// for (let i = 0; i < todos.length; i++) {
//     document.write(todos[i] + "!" +"<br>");
// }






// let body = document.body
// body.append("")



// let div = document.createElement("div")
// body.append(div)
// div.innerText = "Hello World"


let btn = document.querySelector(".btn");
let input = document.querySelector("#usrInput");




btn.addEventListener("click", function () {
    // let search = prompt("Enter name where you wanna go: ");

    if (input.value === 'youtube') {
        window.open('https://www.youtube.com/');
    }
    else if (input.value === 'instagram') {
        window.open('https://www.instagram.com/')
    }
    else if (input.value === 'facebook') {
        window.open('https://www.facebook.com/');
    }

    else if (input.value === 'twitter'){
        window.open('https://twitter.com/');
    }
    else if (input.value === 'thetuhin'){   /** Persoanl Site*/
        window.open('site/tuhin.html')
    }
    else if (input.value === 'gmail'){
        window.open('https://mail.google.com/')
    }
    else if (input.value === 'pirate bay'){
        window.open('https://thepiratebay.org/index.html')
    }
    else if (input.value === 'github'){
        window.open('https://github.com/')
    }
    else if (input.value === 'kissasian'){
        window.open('https://kissasian.cam/')
    }
    else if (input.value === 'wikipedia'){
        window.open('https://www.wikipedia.org/')
    }
    else if (input.value === 'wikipedia'){
        window.open('https://www.wikipedia.org/')
    }
    else if (input.value === 'fari'){
        window.open('site/fp.html');           /**Farihaaa Paaarvin Site */
    }
    else if (input.value === 'Taspin' || input.value === 'taspin'){
        window.open('site/taspin.html')     /****************Tasmin Taslima Site********************** */
    }
    else if (input.value === 'Bichi' || input.value === 'bichi'){
        window.open('site/richi.html')     /****************Samia Jaman Site********************** */
    }
    else if (input.value === 'Sneha' || input.value === 'sneha' ){
        window.open('site/sneha.html')     /****************sneha Site********************** */
    }
    else if(input.value === 'yeasmin' || input.value === 'Yeasmin'){
        window.open('site/yeasin.html')     /****************yeasin Site********************** */
    }
    else if(input.value === 'dim' || input.value === 'Dim'){
        window.open('site/dim.html')        /****************Dim Site********************** */
    }
    else if(input.value === 'lobon' || input.value === 'Lobon'){
        window.open('site/lobon.html')
    }
    else {
        alert("sorry bitch!")
    }

})













