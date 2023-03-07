function enviarFormulario(){
    alert("enviado");
}

function limparFormulario(){
    document.getElementById("idNome").value = "";
    document.getElementById("idEmail").value = "";
    document.getElementById("idTelefone").value = "";
}

function mudaFoto(foto){
   document.getElementById("icone").src = foto;
}