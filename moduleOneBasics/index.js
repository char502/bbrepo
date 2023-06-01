const products = [
    {
        id: 1,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: "MORE"
    },
     {
        id: 2,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 3,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 4,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 5,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 6,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 7,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 8,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 9,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: ""
    },
     {
        id: 10,
        image: "http://design.blubolt.com/fe_codetests/grid/shoe.jpg",
        alt: "best trainers",
        agency: "BLUEBOLT",
        title: "The best trainers",
        price: 19.99,
        buttonBuy: "BUY",
        buttonMore: "More"
    },
];

const mappedProducts = products.map((product) => {
    let markup = new Array()
    const html = `
        <div class="product-card" key=${product.id}>
    <img src=${product.image} alt=${product.alt}>
    <div class="card_content">
      <h2 class="card_agency">${product.agency}</h2>
      <h2 class="card_title">${product.title}</h2>
      <p class="card_price">${product.price}</p>
      <div class="card_buttonGroup">
        <button class="card_buttonBuy">${product.buttonBuy}</button>
        <button class="card_buttonMore">${product.buttonMore}</button>
      </div>
    </div>
  </div>
    `
    markup.push(html)
    html = markup.join("")

    document.getElementById("container").innerHTML = html;
})
mappedProducts()