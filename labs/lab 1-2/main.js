const requestURL = "https://jsonplaceholder.typicode.com/comments"

function sendRequset(method, url, body =  null) {
    return fetch(url).then(response => {
        return response.json()
    })
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

sendRequset('GET', requestURL)
    .then(data => {
        const limitedData = data.slice(0, 7);
        const parcontainerDiv = document.getElementById("review text");

        const arrayList = ["Отлично", "Хорошо", "Нормально", "Плохо", "Ужасно"]

        // Пример вставки данных в элементы containerDiv
        for (let i = 0; i < limitedData.length; i++) {
            const comment = limitedData[i];
            const containerDiv = document.createElement("div");
            containerDiv.classList.toggle("review");
            const pname = document.createElement("p");
            const pmark = document.createElement("p");
            const pbody = document.createElement("p");
            const pemail = document.createElement("p")
            pname.textContent = comment.name; // Пример - используйте соответствующие свойства объекта comment
            pbody.textContent = comment.body;
            pemail.textContent = comment.email;
            pmark.textContent = getRandomElement(arrayList);
            containerDiv.appendChild(pname); // Добавить созданный div в containerDiv
            containerDiv.appendChild(pemail);
            containerDiv.appendChild(pmark);
            containerDiv.appendChild(pbody);
            parcontainerDiv.appendChild(containerDiv);
        }
    })
    .catch(err => {console.log(err)})

