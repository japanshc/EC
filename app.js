const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Belle",
      price: 119,
      colors: [
        {
          code: "#ffe273",
          img: "./img/belle.png",
        },
        {
          code: "skyblue",
          img: "./img/belle2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Snow White",
      price: 129,
      colors: [
        {
          code: "rgb(248, 143, 143)",
          img: "./img/snowwhite.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Cinderella",
      price: 139,
      colors: [
        {
          code: "rgb(228, 245, 253)",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Ariel",
      price: 149,
      colors: [
        {
          code: "rgb(252, 179, 134)",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Jasmine",
      price: 159,
      colors: [
        {
          code: "rgb(167, 233, 238)",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
     
let choosenProduct = products[0]

const currentProductImg = document.querySelector(".produntImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index)=> {
    item.addEventListener("click", ()=>{
        //change the curren slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //chnage the cooosen product
        choosenProduct = products[index] 

        //change texts of currentProducts
        currentProductTitle.textContent = "shc"
    });
});
