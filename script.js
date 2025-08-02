const dq = document.querySelectorAll.bind(document);
const dgId = document.getElementById.bind(document);

const CsName = "are";

const bg = dq(`${CsName}`);
const footer = dgId("footer");
const box = dgId("box");
const info = dgId("info")

let cou =0;
const Addcontent =5;

const AddHtml=(`<section class="${CsName}"></section>`);



const ober = new IntersectionObserver((aaaa) =>{
    aaaa.forEach(a =>{
        if(a.isIntersecting){
                
                for(let i=0;Addcontent > i;i++){
                    box.innerHTML += AddHtml;
                    cou++;
                    console.log(`【メッセージ】${cou}回目の生成`)
                    chInfo();
                }
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

const mo = new MutationObserver((mat)=>{
    mat.forEach(mats=>{
        mats.addedNodes.forEach(node=>{
            if(node.nodeType === 1 && node.classList.contains(CsName)){
                console.log("追加")
                oberr.observe(node)
            }
        })
    })
})
mo.observe(box,{childList:true,subtree:false})

function chInfo(){
    info.textContent = (`現在の深度：${cou}`);
}