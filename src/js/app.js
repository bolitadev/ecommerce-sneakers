const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./src/images/air.png",
            },
            {
                code: "darkblue",
                img: "./src/images/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./src/images/jordan.png",
            },
            {
                code: "green",
                img: "./src/images/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./src/images/blazer.png",
            },
            {
                code: "green",
                img: "./src/images/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./src/images/crater.png",
            },
            {
                code: "lightgray",
                img: "./src/images/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./src/images/hippie.png",
            },
            {
                code: "black",
                img: "./src/images/hippie2.png",
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
        //alterar o slide atual
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //alterar o produto escolhido
        choosenProduct = products[index];

        //alterar textos de currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //avaliando novas cores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})


currentProductSizes.forEach((size, index) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });


        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    if (productButton && payment && close) {
        productButton.addEventListener("click", () => {
            console.log('Product button clicked');
            payment.style.display = "flex";
        });

        close.addEventListener("click", () => {
            payment.style.display = "none";
        });
    } else {
        console.error("Elemento não encontrado. Verifique suas classes no HTML.");
    }
});
