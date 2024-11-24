// Объявление константу и выбераем элемент с помошю querySelector 
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");

// Функция для создания элемента сообщения
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}
// Обработка исходящего сообщения
const hendleOutgoingMessage = (userMessage) => {
    const messageContent = `<div class="message-text">${userMessage}</div>`;

    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    chatBody.appendChild(outgoingMessageDiv);
}

// Обработчик события нажатия клавиши
/*  Когда пользователь вводит текст и нажимает клавишу "Enter",
 сообщение выводится в консоль, если оно не пустое */
messageInput.addEventListener("keydown", (e) =>{
    // Здесь мы получаем текущее значение поля ввода (то есть текст, который пользователь ввел).
    const userMessage = e.target.value.trim();
    // Проверка условия и вывод сообщения
    if(e.key === "Enter" && userMessage) {
        hendleOutgoingMessage(userMessage);
    }
})