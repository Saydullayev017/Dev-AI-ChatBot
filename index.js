// объявляем константу и выбераем элемент с помошю querySelector 
const messageInput = document.querySelector(".message-input");

/*  Когда пользователь вводит текст и нажимает клавишу "Enter",
 сообщение выводится в консоль, если оно не пустое */
messageInput.addEventListener("keydown", (e) =>{
    // Здесь мы получаем текущее значение поля ввода (то есть текст, который пользователь ввел).
    const userMessage = e.target.value.trim();
    // Проверка условия и вывод сообщения
    if(e.key === "Enter" && userMessage) {
        console.log(userMessage)
    }
})