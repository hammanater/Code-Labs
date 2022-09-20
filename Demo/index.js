function addRedSqaure(){
    console.log("Execute Add red square")
  let containerElement = document.getElementById("container")
    // Step 1 Create element
  let redSquareElement = document.createElement("div")
  // Step 2 style the element
  redSquareElement.style.backgroundColor = "red";
  redSquareElement.style.width = "200px";
  redSquareElement.style.height = "200px";
  redSquareElement.style.marginBottom = "10px"
   console.log(redSquareElement)
  // Step 3 add element to our container
  containerElement.appendChild(redSquareElement)
}

function addSquareEverySecond(){
    setInterval(addRedSqaure, 100)
}