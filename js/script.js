const lists=document.querySelectorAll(".list");
const svgs=document.querySelectorAll(".svgi");
const bars=document.querySelector(".bars");
const  ul=document.getElementsByTagName(".navbar");
const uls=document.querySelector(".ul");
const xmark=document.querySelector(".xmark");
 bars.addEventListener("click",()=>{
    lists.forEach((list)=>{
        list.classList.toggle("activelist");
        
    })
 })
 bars.addEventListener("click",()=>{
    svgs.forEach((svg)=>{
        svg.classList.toggle("activelist");
        
    })
 })
 bars.addEventListener("click",()=>{
      bars.classList.add("barsactive");
      xmark.classList.add("xmarkactive");
 }
 )
 xmark.addEventListener("click",()=>{
   bars.classList.remove("barsactive");
   xmark.classList.remove("xmarkactive");
}
)
 xmark.addEventListener("click",()=>{
   lists.forEach((list)=>{
       list.classList.toggle("activelist");
       
   })
})
xmark.addEventListener("click",()=>{
   svgs.forEach((svg)=>{
       svg.classList.toggle("activelist");
       
   })
})
