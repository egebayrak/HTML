function toplamaIslemi(a, b)
{ 
document.getElementById("islemSonuc").innerHTML = parseInt(document.getElementById("birinciSayi").value) + parseInt(document.getElementById("ikinciSayi").value);
}

function cikartmaIslemi(a, b)
{ 
document.getElementById("islemSonuc").innerHTML = parseInt(document.getElementById("birinciSayi").value) - parseInt(document.getElementById("ikinciSayi").value);
}

function carpmaIslemi(a, b)
{ 
document.getElementById("islemSonuc").innerHTML = parseInt(document.getElementById("birinciSayi").value) * parseInt(document.getElementById("ikinciSayi").value);
}

function bolmeIslemi(a, b)
{ 
document.getElementById("islemSonuc").innerHTML = parseInt(document.getElementById("birinciSayi").value) / parseInt(document.getElementById("ikinciSayi").value);
}
