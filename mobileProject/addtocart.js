let addtocartData=JSON.parse(localStorage.getItem("AddtoCartData"))||[]


console.log(addtocartData);




let maindiv=document.getElementById("maindiv")



function display(x){

x.map((val,ind,arr)=>{



    let card=document.createElement("div");
    

    let img=document.createElement("img");
    img.setAttribute("src", val["images"][0]);
    img.style.width="300px"

    // console.log(val["images"])
    let title=document.createElement("h3");
    title.innerText=`${val["title"]}`

    let price=document.createElement("h3");
    price.innerText=`Price:- ${val["price"]}$/-`;

    let discountPercentage=document.createElement("h2");

    discountPercentage.innerText=`Discount:- ${val["discountPercentage"]}%`;

    let brand=document.createElement("h4");

    let deletebtn=document.createElement("button")
    deletebtn.innerText="Delete"


    brand.innerText=`Brand:- ${val["brand"]}`

card.append(img,title,price,brand,discountPercentage,deletebtn)


maindiv.append(card)


})


}

display(addtocartData)

