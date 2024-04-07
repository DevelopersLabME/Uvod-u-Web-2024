let ime = localStorage.getItem("ime")
console.log(ime);

if (!ime) {
    let imeInput = prompt("Unesite Vase ime");
    localStorage.setItem("ime", imeInput);
}
else {
    alert(`Zdravo, ${ime}!`)
}



