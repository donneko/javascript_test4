const dq = document.querySelectorAll.bind(document);
const dgId = document.getElementById.bind(document);

const bg = dq(".bg");
const footer = dgId("footer");
const box = dgId("box");



const AddHtml(`<section class="${}"></section>`);



const ober = new IntersectionObserver((aaaa) =>{
    aaaa.forEach(a =>{
        if(a.isIntersecting){
            box.innerHTML +=AddHtml;
        }else{
            console.log("見られてない");
        }
    });
});

ober.observe(footer);
