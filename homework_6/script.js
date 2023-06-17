// задача 1
function everyTen () {
    const div = document.createElement("div")
    div.classList.add("numbers");
    for (let i = 100; i >= 50; i = i - 10) {
        div.innerHTML += `<p>${i}</p>`
    }
    document.body.appendChild(div);
}

//задача 2
function containerAdd () {
    const stringArray = ["Canada", "USA", "GB", "Australia", "New Zeland"]
    const div = document.createElement("div")
    div.classList.add("strings_container");
    for (let i = 0; i < stringArray.length; i++) {
        div.innerHTML += `<p>${stringArray[i]}</p>`
    }
    document.body.appendChild(div);
}

//задача 3
function addUserCard() {
    const objectArray = [
        {
            first_name: "Andrei",
            last_name: "Lambert",
            age: 25
        },
        {
            first_name: "Vaily",
            last_name: "Konev",
            age: 35
        },
        {
            first_name: "Erwinn",
            last_name: "Wallenstein",
            age: 40
        }
    ]
    const div = document.createElement("div")
    div.classList.add("users_container");
    for (let i = 0; i < objectArray.length; i++) {
        if (objectArray[i].age >= 18) {
            div.innerHTML += `<p>   ${objectArray[i].first_name}
                                    ${objectArray[i].last_name}
                                    ${objectArray[i].age}
        </p>`
        }
    }
    document.body.appendChild(div);
}