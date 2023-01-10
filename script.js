const encriptaMensagem = () => {

    if (document.mensagem.elements["entrada-texto"].value == false) {
        let imagem = document.getElementById('imagem');
        imagem.style.display = 'block';
        let resultado = document.getElementById('texto');
        resultado.style.display = 'none';
    } else {
        let imagem = document.getElementById('imagem');
        imagem.style.display = 'none';
        let resultado = document.getElementById('texto');
        resultado.style.display = 'block';
    }

    let texto = document.mensagem.elements["entrada-texto"].value;
    criptografado = texto.replace(/e/g, "enter").
        replace(/i/g, "imes").
        replace(/a/g, "ai").
        replace(/o/g, "ober").
        replace(/u/g, "ufat");

    document.getElementById('saida-texto').value = criptografado;
}

const traduzMensagem = () => {

    if (document.mensagem.elements["entrada-texto"].value == false) {
        let imagem = document.getElementById('imagem');
        imagem.style.display = 'block';
        let resultado = document.getElementById('texto');
        resultado.style.display = 'none';
    } else {
        let imagem = document.getElementById('imagem');
        imagem.style.display = 'none';
        let resultado = document.getElementById('texto');
        resultado.style.display = 'block';
    }
    
    let texto = document.mensagem.elements["entrada-texto"].value;
    descriptografado = texto.replace(/enter/g, "e").
        replace(/imes/g, "i").
        replace(/ai/g, "a").
        replace(/ober/g, "o").
        replace(/ufat/g, "u");
    document.getElementById('saida-texto').value = descriptografado;

}

function limpar() {
    let form = document.getElementById("mensagem");
    form.reset();
}

function copiarTexto() {
    let textoCopiado = document.getElementById("saida-texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
}
