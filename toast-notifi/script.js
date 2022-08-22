const btn = document.getElementById("btn");
const container  = document.getElementById("container");
btn.addEventListener("click",createnoti);

function createnoti(e){
    e.preventDefault();
  const noti  = document.createElement("div");
   noti.classList.add("toast");
   noti.innerText  = "win 1CR in five days! "

    container.append(noti);
    setTimeout(()=>{
      noti.remove(); 

    },3000)

}