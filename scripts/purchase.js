

let money=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=money
document.getElementById("#confirm").addEventListener("click",function(){

let item=document.getElementById("number_of_items").value
let cost=100*(Number(item))
console.log(cost)
let diff=money-cost
if (diff<100)
{
    alert("Insufficient Balance")
}
else{
    localStorage.setItem("amount",diff)
    window.location.reload()
    alert("Booking Successfull")
}

})


let book_item=JSON.parse(localStorage.getItem("name"))
showData(book_item)
console.log(book_item)


function showData(el)
{
    let div=document.createElement("div")

    let title=document.createElement("h2")
    title.innerText=`Name:${el.Name}`

    let img=document.createElement("img")
    img.src=el.
}