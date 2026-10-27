var list = document.getElementById("list")
var array = []
list.innerHTML = (`<li>${"João"}</li>`)
var f = document.getElementById("f")
f.addEventListener(
    "submit", function(a){
        a.preventDefault()
        array.push(document.getElementById("insert").value)

         for (var nomes of array){
            
            list.innerHTML += `<li>${nomes}</li>`

        }

    }
)
       