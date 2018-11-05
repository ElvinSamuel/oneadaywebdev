function openForm() {
    document.getElementById("formNav").style.height = "100%";
    document.getElementById("myNav").style.backgroundColor = "#333";
}

function closeForm() {
    document.getElementById("formNav").style.height = "0%";
    document.getElementById("myNav").style.backgroundColor = "#00688B";
}

/*function navColorChange(event){
    if(event.target.attributes.href.value === "#resume"){
        document.getElementById("myNav").style.backgroundColor = document.getElementById("home").style.backgroundColor;
    }
}*/