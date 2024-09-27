function questios(){
    let qes1=document.createElement("h4");
    qes1.innerHTML="Which keyword is used to declare a constant variable in JavaScript?";
    document.body.appendChild(qes1);
    let container=document.getElementById("container");
    container.remove()
    let answer1=document.createElement("p");
    answer1.innerHTML="var";
    let answer2=document.createElement("p");
    answer2.innerHTML="let";
    let answer3=document.createElement("p");
    answer3.innerHTML="const"
    let answer4=document.createElement("p");
    answer4.innerHTML="Fixed";
    qes1.appendChild(answer1);
    qes1.appendChild(answer2);
    qes1.appendChild(answer3);
    qes1.appendChild(answer4);
    let savebtn=document.createElement("button");
   qes1.appendChild(savebtn);
    savebtn.innerHTML="Save & Next";
    answer1.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes1.remove();
            question2()
        });
    })

    answer2.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes1.remove();
            question2()
        });
    })
    answer3.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes1.remove();
            question2()
        });
    })
    answer4.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes1.remove();
            question2()
        });
    })

}
function question2(){
    let qes2=document.createElement("h4");
    qes2.innerHTML="What will be the output of: console.log(typeof [];"
    document.body.appendChild(qes2);
    let answer1=document.createElement("p");
    answer1.innerHTML="array";
    let answer2=document.createElement("p");
    answer2.innerHTML="object";
    let answer3=document.createElement("p");
    answer3.innerHTML="undefined"
    let answer4=document.createElement("p");
    answer4.innerHTML="null";
    qes2.appendChild(answer1);
    qes2.appendChild(answer2);
    qes2.appendChild(answer3);
    qes2.appendChild(answer4);
    let perbtn=document.createElement("button");
    perbtn.innerText="previous"
    qes2.appendChild(perbtn);
    perbtn.addEventListener("click",function(){
        questios();
    });
    let savebtn=document.createElement("button");
    qes2.appendChild(savebtn);
    savebtn.innerHTML="Save & Next";
    answer1.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question3()
        });
    })
    answer2.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question3()
        });
    })
    answer3.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question3()
        });
    })
    answer4.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes3.remove();
            question3()
        });
    })


}
function question3(){
    let qes3=document.createElement("h4");
    qes3.innerHTML="Which method is used to add an element to the end of an array?"
    document.body.appendChild(qes3);
    let answer1=document.createElement("p");
    answer1.innerHTML="push()";
    let answer2=document.createElement("p");
    answer2.innerHTML="pop()";
    let answer3=document.createElement("p");
    answer3.innerHTML="unshift()"
    let answer4=document.createElement("p");
    answer4.innerHTML="shift()";
    qes3.appendChild(answer1);
    qes3.appendChild(answer2);
    qes3.appendChild(answer3);
    qes3.appendChild(answer4);
    let perbtn=document.createElement("button");
    perbtn.innerText="previous"
    qes3.appendChild(perbtn);
    let savebtn=document.createElement("button");
    qes3.appendChild(savebtn);
    savebtn.innerHTML="Save & Next";
    answer1.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question4()
        });
    })
    answer2.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question4()
        });
    })
    answer3.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes2.remove();
            question4()
        });
    })
    answer4.addEventListener("click",function(){
        savebtn.addEventListener("click",function(){
            qes3.remove();
            question4()
        });
    })


}

