// Image slider Logic
const imgs = document.querySelectorAll("header ul img");
const prevBtn = document.querySelector(".control-prev");
const nextBtn = document.querySelector(".control-next");

let n = 0;

const changeImg = () => {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
};

changeImg();

prevBtn.addEventListener("click", (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1
    }
    changeImg();
});

nextBtn.addEventListener("click", (e) => {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeImg();
});

const scroller = document.querySelectorAll(".products");

for (const item of scroller) {
    item.addEventListener("wheel", (e) => {
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
};