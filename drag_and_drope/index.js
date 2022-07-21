const paragraphs = document.querySelectorAll(".paragraph")
const sections = document.querySelectorAll(".section")

paragraphs.forEach(paragraph =>{
    paragraph.addEventListener("dragstart", () =>{
        console.log("estoy arrastrando el parrafo: " + paragraph.innerText)
        paragraph.classList.add("dragging")
        event.dataTransfer.setData("id", paragraph.id)
        const ghost_element = document.querySelector(".ghost-img")
        event.dataTransfer.setDragImage(ghost_element, 0, 0)
        
    })

    paragraph.addEventListener("dragend", () =>{
        console.log("He soltado el parrafo: " + paragraph.innerText )
        paragraph.classList.remove("dragging")
    })
})

sections.forEach(section =>{
  section.addEventListener("dragover", event =>{
    event.preventDefault()
    event.dataTransfer.dropEffect= "link"
    console.log("drag over")
    
  } )    
  section.addEventListener("drop", () =>{
    console.log("drop")
   const id_paragraph = event.dataTransfer.getData("id") // Nos permiten tranferin informacion por medio de los propios eventos
  console.log("Parrafo id: ", id_paragraph)
  const paragraph = document.getElementById(id_paragraph)
  section.appendChild(paragraph)
 
})
})