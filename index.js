let nomeDoHeroi = "TheCross"
let exp = 5580
let nivelDoHeroi = ""

if (exp < 1000){
    nivelDoHeroi = "Ferro"
}else if(exp >= 1001 && exp <= 2000){
    nivelDoHeroi = "Bronze"
}else if(exp >= 2001 && exp <= 6000){
    nivelDoHeroi = "Prata"
}else if(exp >= 6001 && exp <= 7000){
    nivelDoHeroi = "Ouro"
}else if(exp >= 7001 && exp <= 8000){
    nivelDoHeroi = "Platina"
}else if(exp >= 8001 && exp <= 9000){
    nivelDoHeroi = "Ascendente"
}else if(exp >= 9001 && exp <= 10000){
    nivelDoHeroi = "Imortal"
}
else{
    nivelDoHeroi = "Radiante"
}

console.log("O Herói de nome " + nomeDoHeroi + " está no nível " + nivelDoHeroi)