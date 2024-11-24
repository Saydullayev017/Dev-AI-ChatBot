// Объявление константу и выбераем элемент с помошю querySelector 
const chatBody = document.querySelector(".chat-body");
const messageInput = document.querySelector(".message-input");
const sendMessageButton = document.querySelector("#send-messsage");

const userData ={
    message: null
}
// Функция для создания элемента сообщения
const createMessageElement = (content, classes) => {
    const div = document.createElement("div");
    div.classList.add("message", classes);
    div.innerHTML = content;
    return div;
}
// Обработка исходящего сообщения
const hendleOutgoingMessage = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы (если используется)
    userData.message = messageInput.value.trim(); // Получаем текст из поля ввода
    messageInput.value = ''; // После отправки сообщения стоит очищать поле ввода

    const messageContent = `<div class="message-text"></div>`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").textContent = userData.message; // Устанавливаем текст сообщения

    chatBody.appendChild(outgoingMessageDiv); // Добавляем сообщение в область чата
}

// Обработчик события нажатия клавиши
/*  Когда пользователь вводит текст и нажимает клавишу "Enter",
 сообщение выводится в консоль, если оно не пустое */
messageInput.addEventListener("keydown", (e) =>{
    // Здесь мы получаем текущее значение поля ввода (то есть текст, который пользователь ввел).
    const userMessage = e.target.value.trim(); // // Проверяем, нажата ли клавиша "Enter" и не пустое ли сообщение
    // Проверка условия и вывод сообщения
    if(e.key === "Enter" && userMessage) {
        hendleOutgoingMessage(e);
    }
})

// Обработчик события нажатия кнопки отправки
sendMessageButton.addEventListener("click", (e) => hendleOutgoingMessage(e));