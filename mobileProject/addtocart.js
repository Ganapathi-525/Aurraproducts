let addtocartData=JSON.parse(localStorage.getItem("AddtoCartData"))||[]


console.log(addtocartData);




let maindiv=document.getElementById("maindiv")



function display(x){

// x.map((val,ind,arr)=>{



//     let card=document.createElement("div");
    

//     let img=document.createElement("img");
//     img.setAttribute("src", val["images"][0]);
//     img.style.width="300px"

//     // console.log(val["images"])
//     let title=document.createElement("h3");
//     title.innerText=`${val["title"]}`

//     let price=document.createElement("h3");
//     price.innerText=`Price:- ${val["price"]}$/-`;

//     let discountPercentage=document.createElement("h2");

//     discountPercentage.innerText=`Discount:- ${val["discountPercentage"]}%`;

//     let brand=document.createElement("h4");

//     let deletebtn=document.createElement("button")
//     deletebtn.innerText="Delete"


//     brand.innerText=`Brand:- ${val["brand"]}`

// card.append(img,title,price,brand,discountPercentage,deletebtn)


// maindiv.append(card)


// })

x.map((val, ind, arr) => {
    let card = document.createElement("div");
    card.classList.add("card");
  
    let cardImg = document.createElement("div");
    cardImg.classList.add("card-img");
  
    let img = document.createElement("img");
    img.setAttribute("src", val["images"][0]);
  
  
    
  
    let cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = val["title"];
  
    let discountPercentage=document.createElement("h2");
  
        discountPercentage.innerText=`Discount:- ${val["discountPercentage"]}%`;
    
        let brand=document.createElement("h4");
    
    
        brand.innerText=`Brand:- ${val["brand"]}`
  
    let cardSubtitle = document.createElement("p");
    cardSubtitle.classList.add("card-subtitle");
    cardSubtitle.innerText = val["description"];
  
    let cardDivider = document.createElement("hr");
    cardDivider.classList.add("card-divider");
  
    let cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");
  
    let cardPrice = document.createElement("div");
    cardPrice.classList.add("card-price");
    cardPrice.innerHTML = `Price<span>$</span> ${val["price"]}`;
  
    let cardBtn = document.createElement("button");
    cardBtn.classList.add("card-btn");
  
    // let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    // svg.setAttribute("viewBox", "0 0 512 512");
  
    // let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    // path.setAttribute("d", "M397.78 316h-205.13a15 15 0 0 1 -14.65-11.67l-34.54-150.48a15 15 0 0 1 14.62-18.36h274.27a15 15 0 0 1 14.65 18.36l-34.6 150.48a15 15 0 0 1 -14.62 11.67zm-193.19-30h181.25l27.67-120.48h-236.6z");
  
  // Create a new button element
  var uiverseButton = document.createElement("button");
  uiverseButton.classList.add("uiverse");
  
  // Create a wrapper div for the button content
  var wrapperDiv = document.createElement("div");
  wrapperDiv.classList.add("wrapper");
  
  // Create a span for the button text
  var buttonTextSpan = document.createElement("span");
  buttonTextSpan.innerText = "Delete";
  
  // Create 12 circle div elements with class names circle-1 to circle-12
  for (var i = 12; i >= 1; i--) {
      var circleDiv = document.createElement("div");
      circleDiv.classList.add("circle", "circle-" + i);
      wrapperDiv.appendChild(circleDiv);
  }
  
  // Append the span and circle divs to the wrapper div
  wrapperDiv.appendChild(buttonTextSpan);
  
  // Append the wrapper div to the button
  uiverseButton.appendChild(wrapperDiv);
  
//   uiverseButton.addEventListener("click",()=>{
//              console.log(" HiEevil")
//             localStorage.setItem("seemore1",JSON.stringify(val));
//             window.location.assign("./seemore.html")
    
    
//           })
  
  // Append the button to the document body (you can replace 'document.body' with your desired parent element)
  // document.body.appendChild(uiverseButton);
  
  
  // Create a new button element
  var cartButton = document.createElement("button");
  cartButton.classList.add("CartBtn");
  
  // Create a span for the icon container
  var iconContainerSpan = document.createElement("span");
  iconContainerSpan.classList.add("IconContainer");
  
  // Create an SVG element
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("height", "1em");
  svg.setAttribute("viewBox", "0 0 576 512");
  svg.setAttribute("fill", "rgb(17, 17, 17)");
  svg.classList.add("cart");
  
  // Create a path element for the SVG icon
  var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z");
  
  // Append the path to the SVG
  svg.appendChild(path);
  
  // Append the SVG to the icon container span
  iconContainerSpan.appendChild(svg);
  
  // Create a paragraph element for the text
  var textParagraph = document.createElement("p");
  textParagraph.classList.add("text");
  textParagraph.innerText = "Add to Cart";
  
    cartButton.addEventListener("click", () => {
      // console.log(" hi man ")
        AddtocartData.push(val);
        console.log(AddtocartData);
        localStorage.setItem("AddtoCartData", JSON.stringify(AddtocartData));
    });
  
  
  // Append the icon container span and text paragraph to the button
  cartButton.appendChild(iconContainerSpan);
  cartButton.appendChild(textParagraph);
  
  // Append the button to the document body (you can replace 'document.body' with your desired parent element)
  // document.body.appendChild(cartButton);
  
  
  
    cardImg.appendChild(img);
    // cardFooter.appendChild(cardPrice);
    // cardFooter.appendChild(cardBtn);
  
    card.append(cardImg,cardTitle,cardPrice,discountPercentage,brand,cardDivider,uiverseButton);
  
    maindiv.append(card);
  });


}

display(addtocartData)

