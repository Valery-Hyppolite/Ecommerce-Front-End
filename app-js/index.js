const ProductData = [
    {
        index: '01',
        name: "Kora Frosted",
        image: "img10.jpg",
        desc: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem molestias, iste Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem molestias Lorem ipsum dol.",
        smdesc: "sit amet consectetur adipisicing elit. Autem molestias Lorem ipsum dol."
    },

    {
        index: '02',
        name: "Elklan Mesh",
        image: "img12.jpg",
        desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. ",
        smdesc: "Nemo enim ipsam voluptatem quia voluptas sit."
    },

    {
        index: '03',
        name: "Clio Task",
        image: "img28.jpg",
        desc: " Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur,Excepteur sint occaecat cupidatat non proident.",
        smdesc: "natus error sit voluptatem accusantium doloremque laudantiu."
    },

    {
        index: '04',
        name: "Fonder Side",
        image: "img9.jpg",
        desc: " Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        smdesc: "Sed ut perspiciatis unde omnis iste."
    },

]

const nxtbtn = document.querySelector('.nxt-btn');

let smImgContainer = document.querySelector('.sm-product-img-container');
let smIgm = document.querySelector('.sm-product-img');
let productIndex = document.querySelector('.product-index');
let smProductDecs = document.querySelector('.sm-product-desc');

let productImgContainer = document.querySelector('.product-img-container');
let productImg = document.querySelector('.product-img');
let backdropImg = document.querySelector('.backdrop-img');

let productDetail = document.querySelector('.product-detail');
let productName = document.querySelector('.product-name');
let productDesc = document.querySelector('.product-desc');

let currentProduct = 0;

nxtbtn.addEventListener('click', () => {
    if (currentProduct >= ProductData.length - 1) {
        currentProduct = 0;
    } else {
        currentProduct++;
    }
    productIndex.innerHTML = ProductData[currentProduct].index;
    smProductDecs.innerHTML = ProductData[currentProduct].smdesc;
    productDesc.innerHTML = ProductData[currentProduct].desc;

    smImgContainer.classList.add('slide');
    productImgContainer.classList.add('slide');
    productDetail.classList.add('fade');
    backdropImg.classList.add('fade');
    setTimeout(() => {
        smImgContainer.classList.remove('slide');
        productImgContainer.classList.remove('slide');
        productDetail.classList.remove('fade');
        backdropImg.classList.add('fade');
    }, 1000)

    productName.innerHTML = ProductData[currentProduct].name;
    productDesc.innerHTML = ProductData[currentProduct].desc;
    smIgm.src = productImg.src = backdropImg.src = `/img/${ProductData[currentProduct].image}`;

    // setTimeout(() => {
    //     productName.innerHTML = ProductData[currentProduct].name;
    //     productDesc.innerHTML = ProductData[currentProduct].desc;
    //     smIgm.src = productImg.src = backdropImg.src = `/img/${ProductData[currentProduct].image}`;
    // }, 600);





})