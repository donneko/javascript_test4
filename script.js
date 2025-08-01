const dq = document.querySelectorAll.bind(document);
const dgId = document.getElementById.bind(document);

const CsName = "are";

const bg = dq(`${CsName}`);
const footer = dgId("footer");
const box = dgId("box");

let cou =0;


const AddHtml=(`<section class="${CsName}"></section>`);



const ober = new IntersectionObserver((aaaa) =>{
    aaaa.forEach(a =>{
        if(a.isIntersecting){
            box.innerHTML += AddHtml;
            cou++;
            console.log(`【メッセージ】${cou}回目の生成`)
        }else{
            console.log("見られてない");
        }
    });
});

ober.observe(footer);

const oberr = new IntersectionObserver((aaaa) =>{
    aaaa.forEach(a =>{
        if(a.isIntersecting){
            a.target.classList.add("ac")
        }else{
            a.target.classList.remove("ac")
        }
    });
});

bg.forEach(a=>{oberr.observe(a)});