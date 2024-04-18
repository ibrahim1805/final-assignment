const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "white",
        img: "white airforces.webp",
      },
      {
        code: "black",
        img: "black airforces.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Jordan 4",
    price: 149,
    colors: [
      {
        code: "black",
        img: "black cats.webp",
      },
      {
        code: "Grey",
        img: "cool grey.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Dior",
    price: 109,
    colors: [
      {
        code: "Black",
        img: "883976_01.jpg.webp",
      },
      {
        code: "white",
        img: "img01.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Balenciaga",
    price: 129,
    colors: [
      {
        code: "black",
        img: "download.jpg",
      },
      {
        code: "pink",
        img: "shopping.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Clb Secrets",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "IMG_6908.jpg",
      },
      {
        code: "blue",
        img: "IMG_6281.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
