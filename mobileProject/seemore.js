






let data=JSON.parse(localStorage.getItem("seemore1"));

let carouselExampleFade=document.getElementById("carouselExampleFade")


let maindiv=document.getElementById("maindiv");



let img1=document.getElementById("img1");

    img1.setAttribute("src",data["images"][0])
    console.log(data["images"][0])
  let img2=document.getElementById("img2");
  img2.setAttribute("src",data["images"][1])
  
  let img3=document.getElementById("img3");
  img3.setAttribute("src",data["images"][2])
  
  let img4=document.getElementById("img4");
  img4.setAttribute("src",data["images"][3])



  let data2=document.createElement("div");

  let h1=document.createElement("h1");
      h1.innerText=`Title : ${data["title"]}`;
  let price=document.createElement("h2");
  price.innerText=`Price  : ${data["price"]}$`;

  let brand=document.createElement("h2");

  brand.innerText=`Brand : ${data["brand"]}`;

  let discountPercentage=document.createElement("h2")

  discountPercentage.innerText=`Discount  :${data["discountPercentage"]}`;

  let rating=document.createElement("h2");
  rating.innerText=`Rating :${data["rating"]}`;

  let stock=document.createElement("h2");
  stock.innerText=`Stock  :${data["stock"]}`

  let category=document.createElement("h2");

  category.innerText=`Category  :${data["category"]}`;

  

  let description=document.createElement("h2");
  description.innerText=`Description  :${data["description"]}`;



  data2.append(h1,price,brand,discountPercentage,rating,stock,category,description)

  maindiv.append(data2)

  let homebtn=document.getElementById("homebtn");

  homebtn.addEventListener("click",()=>{

    window.location.assign("./index.html")

    // console.log("gana")
  })


  let addtocart=document.getElementById("addtocartbtn");
  addtocart.addEventListener("click",()=>{

    // console.log("gana")
  })











// console.log(data)