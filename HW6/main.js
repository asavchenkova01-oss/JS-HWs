// Classwork
// const randomNumbers = [];

// while (randomNumbers.length < 10){
//     const num = Math.floor(Math.random() * 101); 
//     randomNumbers.push(num)
// }

// randomNumbers.forEach(number => {
//     const p = document.createElement('p');
    
//     p.textContent = `Value: ${number}`;
    
//     document.body.appendChild(p);
// });


// Task 1

// const btn = document.getElementById("changeBtn")
// const p = document.getElementById("message")
// const newText = "Text has been changed!"

// let text = p.textContent 


// console.log(text)

// function changeText () {
//     p.textContent = newText
// }

// btn.addEventListener ( 'click', changeText )

// Task 2

// const li = document.querySelectorAll("li")
// const studentList = Array.from(li)

// studentList.forEach ((value) => {
//     console.log(`Student - ${value.textContent}`)
// })

// Task 3

// const list = document.getElementById("list")
// const btn = document.getElementById("addBtn")

// function addItem () {
//     const li = document.createElement("li")
//     li.textContent = "Some Text"

//     list.appendChild(li)
// }

// btn.addEventListener("click", addItem)

// Task 4

const filterBtn = document.getElementById("filterBtn")
const liWords = document.querySelectorAll("#words li")
const wordsArray = Array.from(liWords)
const output = document.getElementById("output")

filterBtn.addEventListener("click", () => {
    const longWords = wordsArray.filter(li => li.textContent.length > 5)

    longWords.forEach(li => {
        const p = document.createElement("p")
        p.textContent = li.textContent
        output.appendChild(p)
    })
})