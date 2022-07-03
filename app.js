var rbtns=document.querySelectorAll(".rbtn");
var menu=document.querySelector("#menu");
var aside=document.querySelector("aside");
var close=document.querySelector("#close");
menu.addEventListener("click",function(){
    aside.style.display="flex";
    close.style.display="block";
    menu.style.display="none";
})
close.addEventListener("click",function(){
    aside.style.display="none";
    menu.style.display="block";
    close.style.display="none";
})
a=[
    {
        img:"images/avatar-anisha.png",
        name:"Anisha Li",
        p:"“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”"
    },
    {
        img:"images/avatar-ali.png",
        name:"Ali Bravo",
        p:"“We have been able to cancel so many other subscriptions since usingManage. There is no more cross-channel confusion and everyone is much more focused.”"
    },
    {
        img:"images/avatar-richard.png",
        name:"Richard Watts",
        p:"“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”"
    },
    {
        img:"images/avatar-shanai.png",
        name:"Shanai Gough",
        p:"“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”"
    }
]
rbtns.forEach(rbtn=>{
    rbtn.addEventListener("click",function(){
        i=parseInt(rbtn.value)-1;
        var sc=document.querySelector("#sec3div2");
        sc.innerHTML=`<fieldset>
          <legend><img src=${a[i].img} alt="profilepic"></legend>
          <b>${a[i].name}</b>
          <p>${a[i].p}</p>
          </fieldset>`
    })
})
