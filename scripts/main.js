let arr=JSON.parse(localStorage.getItem("user"))||[]


function Detail(n,e,add,a)
{
    this.name=n
    this.email=e
    this.address=add
    this.amount=a
}


function data(el)
{
    el.preventDefault()

    let form=document.getElementById("detail")

    let name=form.name.value
    let email=form.email.value
    let address=form.address.value
    letamount=form.amount.value

    let detail=new Detail(name,email,address,amount)

    arr.push(detail)

    localStorage.setItem("user",JSON.stringify(arr))

    window.location.reload()
}