function selectCar() {
    var x = document.getElementById("car").value;
    document.getElementById("demo").innerHTML = "Você selecionou" + x;
}

let totalCar = 0;
function countCar(){
    totalCar = totalCar +1;
    document.getElementById("count").innerHTML = "Quantidade de carros" + totalCar;
}

function loadCar(){
    alert("Parabéns!")
}

function validate() {
    if(document.formCadastro.Name.value == ""){
        alert("Por favor, informe seu nome");
        return false;
    }
    if (document.formCadastro.Email.value == ""){
        alert("Por favor, informe um email!");
        return false;
    } else {
        var emailID = document.formCadastro.Email.value;
        const email = document.getElementById('mail')
    }
}