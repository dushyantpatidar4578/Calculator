let str = "";
let Allbtn = document.querySelectorAll(".btn");
for(btns of Allbtn){
    btns.addEventListener("click" , async (event) =>{
        if(event.target.innerText == "="){
            str = eval(str);
            document.querySelector(".ipt").value = str;
        } else if (event.target.innerText == "C"){
            document.querySelector(".ipt").value = "";
            str = "";
        }else{
            str = str + event.target.innerHTML;
            document.querySelector(".ipt").value = str;
            console.log(str);
        }
    });
};