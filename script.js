document.getElementById("botonEncriptar").addEventListener("click", function() {
    let inputText = document.getElementById("textoEntrada").value;
    if (inputValido(inputText)) {
        document.getElementById("outputText").textContent = encriptarTexto(inputText);
    } else {
        alert("Solo se permiten letras minúsculas y sin caracteres especiales.");
    }
});

document.getElementById("botonDesencriptar").addEventListener("click", function() {
    let inputText = document.getElementById("textoEntrada").value;
    if (inputValido(inputText)) {
        document.getElementById("outputText").textContent = desencriptarTexto(inputText);
    } else {
        alert("Solo se permiten letras y espacios, sin caracteres especiales.");
    }
});

document.getElementById("copyButton").addEventListener("click", function() {
    let outputText = document.getElementById("outputText").textContent;
    navigator.clipboard.writeText(outputText).then(() => {
        alert("Texto copiado al portapapeles: " + outputText);
    });
});

function encriptarTexto(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function desencriptarTexto(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

function cambiarCaracteres(char, shift) {
    if (char.match(/[a-z]/i)) {
        let code = char.charCodeAt(0);
        let lower = (char === char.toLowerCase());
        code = ((code - (lower ? 97 : 65) + shift + 26) % 26) + (lower ? 97 : 65);
        return String.fromCharCode(code);
    }
    return char;
}

function inputValido(text) {
    return /^[a-z\s]+$/.test(text);
}
