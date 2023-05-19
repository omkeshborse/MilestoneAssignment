let data = [
  "HTML and Semantics",
  "Starting with CSS",
  "Working Template",
  "Mobile responsive webpages",
  "Grid and Flex-box in CSS",
  "Projects using HTML & CSS",
  "Getting Started with JavaScript",
  "Advance JavaScript",
  "Working with DOM",
  " Making Projects using HTML, CSS and JavaScript",
  " Understanding Fundamental of Computer Science",
  " Getting Started with Database",
  " Understanding the Database",
  " Starting with NodeJS and Express",
  " Understanding React and its Fundamentals",
  " Understanding Hooks and Routers",
  " Starting and Completing Full Fledge Projects",
]

let counter = 0;

function addItems() {
  if (data.length > counter) {
    let listData = document.createElement("li")

    let storage = document.querySelector(".para")

    listData.innerText = data[counter]

    counter++

    document.querySelector(".para").appendChild(listData)

    console.log(listData)
    console.log(storage)
  } else {
    alert("All items have been added.") ;
  }
}
