function carregar(){
    /* MODAL */
    
    document.getElementsByClassName('modal-container')[0].style.display = "block"
}

function menu(){
    // Verifica Checkbox
    var checkbox = document.getElementsByName('checkMenu')[0].checked
    //console.log(checkbox)
    
    if(checkbox){
        document.getElementsByClassName('container-menu')[0].style.display = "block";
    }
    
    else{
        document.getElementsByClassName('container-menu')[0].style.display = "none";
    }
}

function fecharModal(){
    document.getElementsByClassName('modal-container')[0].style.display = "none"
}