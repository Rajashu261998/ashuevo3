let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`

fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(res){
        console.log(res)
        appenData(res.data)
    })
    .catch(function(err){
        console.log(err)
    })


    function appenData(data)
    {
        data.forEach(function(el){
            let box=document.createElement("div")

            let image=document.createElement("img")
            image.src=el.image

            let name=document.createElement("p")
            name.innerText=el.name

            let price=document.createElement("p")
            price.innerText=el.price

            box.append(image,name,price)
            document.getElementById("voucher_list").append(box)

        })
    }