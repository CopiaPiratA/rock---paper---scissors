var machineImg = document.getElementById("machine-selected-img");
    machineImg.src = "img/question.jpg"
function machineSelection(Option) { 
    // según el número que me de el Math.random, retorno un valor para optionMachine, que después se va a comparar en comparation().
    // También le doy a cada valor una imagen que se motrará en pantalla.
    if(Option === 0){
        machineImg.src = "img/rock.png"
        return optionMachine ="rock";
    }
    else if (Option === 1){
        machineImg.src = "img/paper.png"
        return optionMachine ="paper";
    }
    else {
        machineImg.src = "img/scissors.png"
        return optionMachine ="scissors";
    }
}
 var machinePoints = 0;
 var userPoints = 0;
function comparation(machine,user){                         //comparo la elección del usuario con la elección de la máquina.
    let winner = document.getElementById("winner");         
    if (machine == "0" && user == "scissors" || machine == "1" && user == "rock" || machine == 2 && user == "paper"){
        winner.innerHTML = "Machine Wins";
        machinePoints += 1; //según quén gane le sumo un punto.
    } 
    else if (machine == "0" && user == "paper" || machine == "1" && user == "scissors" || machine == 2 && user == "rock"){
        winner.innerHTML = "User Wins";
        userPoints += 1;
    }
    else {
        winner.innerHTML = "Tie";
    }
    document.getElementById("user-points").innerHTML =  userPoints;
    document.getElementById("machine-points").innerHTML = machinePoints;
}
var userOption = "";
var userSelectedImg = document.getElementById("user-selected-img");
userSelectedImg.src = "img/question.jpg";
document.getElementById('rock-btn').addEventListener('click', () => { 
    userSelectedImg.src = "img/rock.png";                             // según el botón que clickeo el usuario selecciono la imagen para mostrar.
    return userOption = "rock";});                                      //retorno el valor de su elección, que después se usará para la comparación.

document.getElementById('paper-btn').addEventListener('click', () => {
    userSelectedImg.src = "img/paper.png";
    return userOption = "paper";});
document.getElementById('scissors-btn').addEventListener('click', () => {
    userSelectedImg.src = "img/scissors.png";
    return userOption = "scissors";});

const playBtn = document.getElementById("play");

playBtn.addEventListener("click",()=>{
    let machineOption = Math.floor(Math.random() * 3);
    machineSelection(machineOption);        //Esta función me devolverá un valor, que será la elección de la máquina.
    comparation(machineOption,userOption);  //Esta función compara las dos elecciones.
})