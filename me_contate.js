
const { Alert } = require("bootstrap");


// Número do WhatsApp com código do Brasil + DDD + número
const numeroWhatsApp = "5585999999999";

// Mensagem automática
const mensagem = "Olá! Gostaria de fazer um orçamento.";

// Criando o botão
const botaoWhatsApp = document.createElement("a");

// Link do WhatsApp
botaoWhatsApp.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

// Abrir em nova aba
botaoWhatsApp.target = "_blank";

// Texto ou ícone do botão
botaoWhatsApp.innerHTML = "💬";

// Estilização pelo JavaScript
botaoWhatsApp.style.position = "fixed";
botaoWhatsApp.style.right = "20px";
botaoWhatsApp.style.bottom = "20px";
botaoWhatsApp.style.width = "60px";
botaoWhatsApp.style.height = "60px";
botaoWhatsApp.style.backgroundImage = url(whatapp.webp);
botaoWhatsApp.style.backgroundSize = "cover";
botaoWhatsApp.style.backgroundPosition = "center";
botaoWhatsApp.style.backgroundRepeat = "no-repeat";
botaoWhatsApp.style.color = "white";
botaoWhatsApp.style.borderRadius = "50%";
botaoWhatsApp.style.display = "flex";
botaoWhatsApp.style.alignItems = "center";
botaoWhatsApp.style.justifyContent = "center";
botaoWhatsApp.style.fontSize = "30px";
botaoWhatsApp.style.textDecoration = "none";
botaoWhatsApp.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
botaoWhatsApp.style.zIndex = "999";
botaoWhatsApp.style.transition = "0.3s";

// Efeito ao passar o mouse
botaoWhatsApp.addEventListener("mouseenter", function () {
  botaoWhatsApp.style.transform = "scale(1.1)";
  botaoWhatsApp.style.backgroundColor = "#1ebe5d";
});

botaoWhatsApp.addEventListener("mouseleave", function () {
  botaoWhatsApp.style.transform = "scale(1)";
  botaoWhatsApp.style.backgroundColor = "#25d366";
});

// Adicionando o botão na página
document.body.appendChild(botaoWhatsApp);