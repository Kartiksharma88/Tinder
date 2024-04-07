let users=[
    {
    profilePic: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 4, 
    location: "Delhi, India", 
    name: "Harshita", 
    age: 23, 
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing"
    }],
    bio: "I am a yoga lover and love to read. I am looking for someone who can share my interests and can be my yoga buddy.",    
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1548142813-c348350df52b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 6, 
    location: "Haryana, India", 
    name: "Priyanka", 
    age: 22, 
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing"
    }],
    bio: "I am a music lover and love to do yoga. I am looking for someone who can share my interests and can be my yoga buddy.",    
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA0fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic: "https://images.unsplash.com/photo-1614204424926-196a80bf0be8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 2, 
    location: "Jammu, India", 
    name: "Priya", 
    age: 24, 
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing"
    }],
    bio: "I am a travel enthusiast and love to blog. I am looking for someone who can share my interests and can be my travel buddy.",    
    isFriend: null
},
{
    profilePic: "https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwb3J0cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
    displayPic: "https://plus.unsplash.com/premium_photo-1668895511243-1696733f4fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    pendingMessage: 5, 
    location: "Mumbai, India", 
    name: "Harshita", 
    age: 25, 
    interests: [{
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music"
    },{
        icon: `<i class="ri-quill-pen-fill"></i>`,
        interest: "Writing"
    }],
    bio: "I am a game lover and love to travel. I am looking for someone who can share my interests and can be my travel buddy.",    
    isFriend: null
},

];

function select(elem){
    return document.querySelector(elem);
}

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    let clutter="";
    users[index].interests.forEach(function(interest){
        clutter+=` <div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3">
        ${interest.icon}<h3 class="text-sm tracking-tight capitalize">${interest.interest}</h3>
    </div>`
    })
    select(".tags").innerHTML = clutter;
    select(".bio p").textContent = users[index].bio;

}

(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;
    setData(curr);
    
    curr = 2;
})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: function(){
                isAnimating = false;
                let main = select(".maincard");
                let incoming = select(".incomingcard"); 
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
    
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                
                curr++;
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
            }
        });
        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a") 
        .from(".incomingcard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")   
    }
    
}

let deny = select(".deny");
    let accept = select(".accept");
    

    deny.addEventListener("click", function(){
      imageChange();
      setData(curr-1);  
      gsap.from(".details .element", {
        y: "100%",
        stagger: .06,
        ease: Power4.easeInOut,
        duration: 1.5
    })
    });

    accept.addEventListener("click", function(){
        imageChange();
        setData(curr-1);  
        gsap.from(".details .element", {
          y: "100%",
          stagger: .06,
          ease: Power4.easeInOut,
          duration: 1.5
      })
      });

    (function conatinerCreator(){
        document.querySelectorAll(".element")
        .forEach(function (element){
            let div = document.createElement("div");
            div.classList.add(`${element.classList[1]}container`, 'overflow-hidden');
            div.appendChild(element);
            select(".details").appendChild(div);
        })
    })();


    