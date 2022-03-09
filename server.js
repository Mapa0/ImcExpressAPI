const express = require('express');
const app = express();
const PORT = process.env.PORT = 3000;

function calculaImc(peso ,altura){
    let imc = peso / (altura*altura)
    return imc
}
function classificaIMC(imc){
    if (imc < 18.5){
        return("<h1>Abaixo do peso</h1> <img src='https://media.istockphoto.com/photos/funny-sport-nerd-picture-id526668973?s=612x612'>")
    }
    else if (imc >= 18.5 && imc < 25){
        return("<h1>Peso Normal</h1> <img src='https://cdn.activebeat.com/https://media.istockphoto.com/photos/cheerful-young-athlete-outdoors-by-the-river-picture-id944300692?s=612x612'>")
    }
    else if (imc >= 25 && imc < 30){
        return("<h1>Acima do Peso</h1> <img src='https://media.istockphoto.com/photos/depressed-fat-man-sitting-on-bed-at-home-worried-about-overweight-picture-id1088764544?s=612x612'>")
    }
    else if (imc >= 30){
        return("<h1>Obeso</h1> <img src='https://media.istockphoto.com/photos/dietitian-consultation-woman-visits-nutritionist-for-treatment-picture-id1315142707?s=612x612'>")
    }
}

app.get('/', function (req, res){
    res.send("<h1>API CALCULADORA DE IMC</h1>")
})

app.get('/imc', function(req, res){
    res.send("<h1>Preencha os campos de altura e peso!</h1>")
})

app.get('/imc/peso/:peso', function(req, res){
    res.send("<h1>Preencha a altura</h1>")
})

app.get('/imc/altura/:altura', function(req, res){
    res.send("<h1>Preencha o peso</h1>")
})

app.get('/imc/peso/:peso/altura/:altura', function(req, res){
    let peso = req.params.peso;
    let altura = req.params.altura;
    console.log(peso, altura);
    let imc = calculaImc(peso,altura)
    res.send(classificaIMC(imc))
})

app.get('/imc/altura/:altura/peso/:peso', function(req, res){
    let peso = req.params.peso;
    let altura = req.params.altura;
    console.log(peso, altura);
    let imc = calculaImc(peso,altura)
    res.send(classificaIMC(imc))
})

app.listen(PORT, function(){
    console.log("Servidor rodando na porta: ", PORT);
});