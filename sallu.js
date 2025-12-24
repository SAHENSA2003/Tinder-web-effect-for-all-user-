import user from "./Userdata.js";





function select(element) {
    return document.querySelector(element);
}

let curr = 0;
let isAnimating = false;

function setData(index) {
    select('.badge').textContent = user[index].PendingMessage;
    select('.part1 h3').textContent = user[index].location;
    select('.part1 h3').title = user[index].location;
    select('.part2 h1:nth-child(1)').textContent = user[index].Name;
    select('.part2 h1:nth-child(2)').textContent = user[index].Age;
    select('.NameofProfile').textContent = user[index].Name;
    select('.ProfilePic').src = user[index].ProfilePicture;
    select('.ProfilePic').title = `Hi I am ${user[index].Name}!`;
    select('.Prop').src = user[index].ProfilePicture;

    var Clutter = '';

    user[index].Status.forEach((Sta) => {
        Clutter += `<div class="tag flex items-center justify-center px-2 rounded-full gap-2 bg-white/30">
         ${Sta.icon}                       
         <h3>${Sta.interest}</h3>
                            </div>`
    });
    select('.tags').innerHTML = Clutter;
    select('.bio p').textContent = user[index].Bio;
};

(function setInitial() {
    select('.mainCard img').src = user[curr].DisplayPicture;
    select('.pflImage img').src = user[curr].ProfilePicture;
    setData(curr);
    select('.incomingCard img').src = user[curr + 1]?.DisplayPicture;
    curr = 2;
})();

function ImageChange() {
    if (!isAnimating) {
        isAnimating = true;
        let tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
                let main = select('.mainCard');
                let incoming = select('.incomingCard');

                incoming.classList.remove('z-[2]');
                incoming.classList.remove('incomingCard');
                incoming.classList.add('z-[3]');

                main.classList.remove('z-[3]');
                main.classList.add('z-[2]');
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                });

                if (curr === user.length) curr = 0;
                select('.mainCard img').src = user[curr].DisplayPicture;
                curr++;
                main.classList.remove('mainCard');
                incoming.classList.add('mainCard');
                main.classList.add('incomingCard');
            }
        });

        tl.to(".mainCard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: .9
        }, "a")
        tl.from(".incomingCard", {
            scale: .9,
            opacity: 0,
            ease: Circ,
            duration: 1.1
        }, "a")
    }

}

let deny = select('.deny');
let love = select('.love');

deny.addEventListener('click', () => {
    setData(curr - 1);
    ImageChange();
    gsap.from(".detailed .element", {
        y: '100%',
        opacity: 0,
        duration: .7,
        ease: Power4.easeInOut,
        stagger: .06,

    });
});
love.addEventListener('click', () => {
    setData(curr - 1);
    ImageChange();
    gsap.from(".detailed .element", {
        y: '100%',
        opacity: 0,
        duration: .7,
        ease: Power4.easeInOut,
        stagger: .06,

    });
});

(function containerCreator() {
    document.querySelectorAll('.element').forEach((element) => {
        let div = document.createElement('div');
        div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
        div.appendChild(element);
        select('.detailed').appendChild(div);
    })
})();



select('.ProfilePic').addEventListener('click', () => {
    select('.mainApp').style.display = 'none';
    select('.profileSection').style.display = 'flex';
    gsap.from(".profileSection > *", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: Power4.easeOut,
        stagger: 0.1
    });
    select('.Home').addEventListener('click', () => {
        gsap.to(".profileSection", {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: Power2.easeIn,
            onComplete: () => {
                select('.profileSection').style.display = 'none';
                select('.mainApp').style.display = 'block';
                // Reset
                gsap.set(".profileSection", { opacity: 1, scale: 1 });

            }
        });
    });

});


function GenerateId() {
    const ImageFile = select("#ProflilePic").files[0];
    const ImageUrl = URL.createObjectURL(ImageFile);
    select('#selfCard').style.backgroundImage= `url('${ImageUrl}')`;
    console.log(select('#selfCard'));
    select('.login').innerHTML = `<img class="h-[50px] w-[50px] rounded-full object-cover " src="${ImageUrl}" alt="ProfilePic">`
}
let isGenerate = false;
let from = select('.mainFrom');


select('.generateId').addEventListener('click', () => {
    const inputs = from.querySelectorAll('input,textarea');
    let isFillded = true;
    inputs.forEach((input) => {
        if (input.value.trim() === '') {
            isFillded = false
        }
    })
    let ageOfUser = select('#age').value;
    let Gender = select('#gender').value;
    if (!isFillded) {
        alert('fill all the value before Generate!!')
        return// it will implement first , because we have to confirm first about the from validation 
    }
    if (ageOfUser < 18 || ageOfUser > 60) {
        alert('age should be with-in 18-60');
        return
    }
    if (Gender == 'select-gender') {
        alert('Gender should be male, female or other')
        return
    }
    const confirmation = confirm(
        "Are you sure all the information is correct?"
    )
    if (!confirmation) {
        return // and now if the confirm is false then return this element same 
    }
    gsap.to(".CreateID", {
        opacity: 0,
        scale: 0.95,
        duration: 0.3,
        ease: Power2.easeIn,
        onComplete: () => {
            select('.CreateID').style.display = 'none';
            select('.mainApp').style.display = 'block';
            gsap.set(".CreateID", { opacity: 1, scale: 1 });

        }

    })
    GenerateId();
    isGenerate = true;
});


select('.login').addEventListener('click', () => {
    if (!isGenerate) {
        select('.mainApp').style.display = 'none';
        select('.CreateID ').style.display = 'flex';

        gsap.from(".CreateID > *", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: Power4.easeOut,
            stagger: 0.1
        });

        select('.Home2').addEventListener('click', () => {
            gsap.to(".CreateID", {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: Power2.easeIn,
                onComplete: () => {
                    select('.CreateID').style.display = 'none';
                    select('.mainApp').style.display = 'block';
                    // Reset
                    gsap.set(".CreateID", { opacity: 1, scale: 1 });
                }
            });
        });
    } else if (isGenerate) {
        select('.mainApp').style.display = 'none';
        select('#OwnProfile').style.display = 'flex';
        gsap.from(".OwnProfile > *", {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: Power4.easeOut,
            stagger: 0.1
        });
        select('#Home3').addEventListener('click', () => {
            gsap.to("#OwnProfile", {
                opacity: 0,
                scale: 0.95,
                duration: 0.3,
                ease: Power2.easeIn,
                onComplete: () => {
                    select('#OwnProfile').style.display = 'none';
                    select('.mainApp').style.display = 'block';
                    gsap.set("#OwnProfile", { opacity: 1, scale: 1 });
                }
            });
        });
    }


})

function EditProfile() {
    select('#generateButton').textContent='Save';
    select('#OwnProfile').style.display = 'none';
    select('.CreateID ').style.display = 'flex';

    gsap.from(".CreateID > *", {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: Power4.easeOut,
        stagger: 0.1
    });
}

function DeleteProfile() {
    const confirm22 = confirm('Are you sure to delete your Profile, it will delete all data ');
    if (!confirm22) {
        return
    };
    select('#Home3').addEventListener('click', () => {
        gsap.to("#OwnProfile", {
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            ease: Power2.easeIn,
            onComplete: () => {
                select('#OwnProfile').style.display = 'none';
                select('.mainApp').style.display = 'block';
                gsap.set("#OwnProfile", { opacity: 1, scale: 1 });
            }
        });
    });



}

document.querySelector('#Edit').addEventListener('click', () => {
    EditProfile();
})










