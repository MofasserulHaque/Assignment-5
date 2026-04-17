
const openButton=(btn)=>{
    setActiveButton(btn);
 const findCloseContainer=document.getElementById("closed-container");
 console.log(findCloseContainer)
    findCloseContainer.classList.add("hidden");
    const findAllAllContainer=document.getElementById('all-container');
    findAllAllContainer.classList.add("hidden");
     const findOpenCOntainer=document.getElementById("open-container");
    findOpenCOntainer.classList.remove("hidden");
};
const closeButton=(btn)=>{
   setActiveButton(btn)
        const findAllAllContainer=document.getElementById('all-container');
    findAllAllContainer.classList.add("hidden");
         const findOpenCOntainer=document.getElementById("open-container");
    findOpenCOntainer.classList.add("hidden");
     const findCloseContainer=document.getElementById("closed-container");
 console.log(findCloseContainer)
    findCloseContainer.classList.remove("hidden");
};
const allButton=(btn)=>{
    setActiveButton(btn)
    const findOpenCOntainer=document.getElementById("open-container");
    findOpenCOntainer.classList.add("hidden");
    const findCloseContainer=document.getElementById("closed-container");
    console.log(findCloseContainer);
    findCloseContainer.classList.add("hidden");
    const findAllAllContainer=document.getElementById('all-container');
    findAllAllContainer.classList.remove("hidden");
}
 const setActiveButton=(clickBTN)=>{
  const allBTN=document.querySelectorAll(".btn");
    allBTN.forEach(btn=>{
        btn.classList.remove("btn-active");
    });
    clickBTN.classList.add("btn-active");
    // setActiveButton();
    }

const loadallCards=()=>{
    const url="https://phi-lab-server.vercel.app/api/v1/lab/issues";
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>displayMainBars(json.data))
};
// 

const displayMainBars=(data)=>{
 const mainbarsUpload=document.getElementById("all-container");
 console.log(mainbarsUpload);
mainbarsUpload.innerHTML="";
console.log(data);

    const findButtons=document.getElementById("open-close-btn");
       const createButtoncontainer=document.createElement("div");
       createButtoncontainer.innerHTML=`
          <button onclick="allButton(this)"  id="all-btn" class="btn btn-outline btn-primary ">All</button>
    <button onclick="openButton(this)" id="open-btn" class="btn btn-outline btn-primary ml-2">Open</button> <button onclick="closeButton(this)"  id="close-btn" class="btn btn-outline btn-primary ml-2">Closed</button>
       `
   findButtons.append(createButtoncontainer)
data.forEach(element => {
    const createElement=document.createElement("div");
    // const findID=element.id;
    // openCards(findID);

    console.log(element);
    const findUpperCase=element.priority.toUpperCase();
    console.log(findUpperCase);
    const myDate=element.createdAt;
    const mynewDate=new Date(myDate);
    const lastDate=mynewDate.toDateString();
    createElement.innerHTML=`
    <div class="bg-white  py-7 rounded-2xl p-2.5 shadow-gray-400 space-y-5 px-3.5">
  <div class="flex justify-between"><img class="h-min" src="./assets/Open-Status.png" alt=""><button id="high" class="btn bg-[#ffd2d2]  text-[#d71313] text-[15px] rounded-full p-5">${findUpperCase}</button></div>
  <h1 class="text-[20px] font-bold">${element.title} </h1>
  <p class="text-[#64748B]">${element.description}</p>
  <div class="flex flex-wrap gap-2"><button id="bug-btn" class="btn bg-[#FECACA]  text-[#EF4444] text-[15px] rounded-full border border-[#9c5050] p-4 gap-0.5:"><img src="./assets/BugDroid.png" alt=""> Bug</button>  <button id="bug-btn" class="btn bg-[#FDE68A]  text-[#D97706] text-[15px] rounded-full border border-[#FDE68A] p-2"><img src="./assets/BugDroid.png" alt="">HELP WANTED</button> </div>
  <hr class=" border-t-3 border-gray-300">
 <div class="flex justify-between ">
 <div> <p class="text-[#64748B]">#1 by ${element.author}</p>
  <p class="text-[#64748B]">Assignee: ${element.assignee}</p>
 </div>
 <div>
 <p  class="text-[#64748B]">${lastDate}</p>
 <p  class="text-[#64748B]">Updated: ${element.updatedAt}</p>
 </div>
 </div>
</div>
    `
    mainbarsUpload.append(createElement);
   

    if(element.status==="open"){
        const findOpenSection=document.getElementById("open-container");
        const takeInnerHTML=createElement.innerHTML;
        // console.log(takeInnerHTML);
        const createOpenDiv=document.createElement("div");
        createOpenDiv.innerHTML=takeInnerHTML;
        findOpenSection.append(createOpenDiv);
        
        
    }
    if(element.status==="closed"){
        const findClosedSection=document.getElementById("closed-container");
        const takeClosedInnerHTML=createElement.innerHTML;
        const creatClosedDiv=document.createElement("div");
        creatClosedDiv.innerHTML=takeClosedInnerHTML;
        findClosedSection.append(creatClosedDiv);
    }

 });
};
loadallCards()