
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


const loadModal=(id)=>{
    const url=`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;
    fetch(url)
    .then((promise)=>promise.json())
    .then((collect)=>displayModal(collect.data))
}

const displayModal=(inf)=>{
    console.log(inf);
const findModalSection=document.getElementById("show-modal");
findModalSection.innerHTML=`
    <h3 class="text-lg font-bold">${inf.title}</h3>
    <div class="flex gap-2  items-center justify-around my-3.5"><button class="bg-green-500 p-2 border-green-500 rounded-2xl  text-white">${inf.status}</button><img class="h-min" src="./assets/Ellipse 5.png" alt=""> <p>Opened by ${inf.assignee}</p><img class="h-min" src="./assets/Ellipse 5.png" alt=""> <p>${inf.updatedAt}</p></div>
     <div class="flex flex-wrap gap-2 my-4">${
    inf.labels.map(label=>
   `<p class="bg-red-300 p-2.5  rounded-2xl">${label.toUpperCase()}</p>`
    ).join("")
  }</div>
    <p class="py-4">${inf.description}</p>
    <div class="bg-gray-100 py-3.5 px-6 rounded-3xl flex gap-32 space-y-4"><div class="space-y-2.5"><p class="text-[#64748B]">Assignee:</p>
    <h1 class="text-[20px] font-text-[#64748B]font-bold">${inf.assignee}</h1> 
   </div><div class="space-y-2.5"> <p class="">Priority:</p><p class="bg-[#EF4444] rounded-3xl px-4.5 py-1.5 text-center">${inf.priority}</p></div></div>
    `
document.getElementById("my_modal_5").showModal();
}


const displayMainBars=(data)=>{
 const mainbarsUpload=document.getElementById("all-container");
//  console.log(mainbarsUpload);
mainbarsUpload.innerHTML="";
// console.log(data);
// document.getElementById("open-container").innerHTML = "";
// document.getElementById("closed-container").innerHTML = "";
    const findButtons=document.getElementById("open-close-btn");
       const createButtoncontainer=document.createElement("div");
       
 createButtoncontainer.innerHTML=`
          <button onclick="allButton(this)"  id="all-btn" class="btn btn-outline btn-primary btn-active">All</button>
    <button onclick="openButton(this)" id="open-btn" class="btn btn-outline btn-primary ml-2">Open</button> <button onclick="closeButton(this)"  id="close-btn" class="btn btn-outline btn-primary ml-2">Closed</button>
       `
      findButtons.innerHTML=" "
      
   findButtons.append(createButtoncontainer);
data.forEach(element => {
    const createElement=document.createElement("div");
    // const findID=element.id;
    // openCards(findID);

    // console.log(element);
    const findUpperCase=element.priority.toUpperCase();
    // console.log(findUpperCase);
    const myDate=element.createdAt;
    const mynewDate=new Date(myDate);

    const lastDate=mynewDate.toDateString();
    createElement.innerHTML=`
   <div onclick="loadModal(${element.id})"  class=" bg-white  py-7 rounded-2xl p-2.5 shadow-gray-400 space-y-5 px-3.5 ${element.status==="open"? "border-t-4 border-[#00A96E]" : "border-t-4 border-[#A855F7]"}">
  <div class="flex justify-between"><div>${element.status==="open"? `<img class="h-min" src="./assets/Open-Status.png" alt="">`: `<img src="./assets/Closed- Status .png" alt="">`}</div><button id="high" class="btn bg-[#ffd2d2]  text-[#d71313] text-[15px] rounded-full p-5">${findUpperCase}</button></div>
  <h1 class="text-[20px] font-bold">${element.title} </h1>
  <p class="text-[#64748B]">${element.description}</p>
  <div class="flex flex-wrap gap-2">${
    element.labels.map(label=>
   `<p class="bg-amber-400 p-2.5  rounded-2xl">${label.toUpperCase()}</p>`
    ).join("")
  }</div>
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


document.getElementById("all-btn").addEventListener("click",()=>{
    const totalALl=data.length;
console.log(totalALl);
    const findNumber=document.getElementById("number");
    findNumber.innerText=totalALl;
})
document.getElementById("open-btn").addEventListener("click",()=>{
    const totalOpen=data.filter(item=>item.status==="open").length;
console.log(totalOpen);
 const findNumber=document.getElementById("number");
    findNumber.innerText=totalOpen;
})
document.getElementById("close-btn").addEventListener("click",()=>{   
const totalClosed=data.filter(data=>data.status==="closed").length;
console.log(totalClosed);
 const findNumber=document.getElementById("number");
    findNumber.innerText=totalClosed;
})
};     
loadallCards();

  const findSearchSOurce=(searchText)=>{
        const url=`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchText}`;
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>displaySearchWord(data))
    }
     const displaySearchWord=(word)=>{
console.log(word);
displayMainBars(word.data);
    }

document.getElementById("search-btn").addEventListener("click",()=>{
    const findInput=document.getElementById("search-input");
    const inputValue=findInput.value;
    console.log(inputValue); 
    findSearchSOurce(inputValue);
})
