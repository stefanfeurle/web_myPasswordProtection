users = [
   { name: "Stefan Wasserle", userName: "stefanwasserle", passWord: "cc022020sw"},
   { name: "Louis Tries", userName: "louistries", passWord: "cc022020lt"}
];

function login() {
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    isCorrect = false;

    for (let i = 0; i < users.length; i++) {        
        if (username === users[i].userName) {
            if (password === users[i].passWord) {
                isCorrect = true;
                window.document.location.href = "https://priceless-albattani-d9c60d.netlify.app/";
            }
        }       
    }   

    if( isCorrect === false) {
        alert("Falsches Passwort oder Username");
    }
}