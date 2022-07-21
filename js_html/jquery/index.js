//$("li").hide() //-> ocultar los li

// Forma de trabajar -> $("selector").accion()

//$("h1").hide()

//$(document).ready(()=>{})
$(() =>{
    // Selectores:
    // id="el-1" =>"#el-1"
    //class="el-1"=>".el-1"
   
    $(".btn-hide").click(()=>{
        // $("h1").hide()
        $("h1").fadeOut() //hace que el cambio no sea tan repentino como con hide()
    })
    $(".btn-show").click(()=>{
        // $("h1").show()
        $("h1").fadeIn()
    })

    $("li").click(()=>{
        $("h1").css({color: "orange"})
    })
    $("#el-2").dblclick(()=>{
        $("h1").css({color: "blue"})
    })
    $("#el-3").click(()=>{
        $("h1").css({color: "green"})
    })
    $(".add-element").click(()=>{
        $("ul").append("<li>New Element</li>")
    })
    $("li").mouseenter((elem)=>{
       elem.target.style.color= "blue"
    })

    $("li").mouseleave(elem =>{
        elem.target.style.color = "black"
    })
})