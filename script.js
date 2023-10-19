// import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const primaryNav = document.querySelector('.primary-navigation')
const navBorder = document.querySelector('.nav-border')
const navToggle = document.querySelector('.nav-custom')
// const scrollTracker = document.querySelector('.scroller-tracker')
const textBoxAnimate = document.querySelectorAll('.text-container')
const progress = document.querySelector('.progress')
const workText = document.querySelector('.worktext')
let show = document.querySelectorAll('.show')


function responsive() {

    if (window.scrollY > 50 || window.innerWidth <= 800) {
        primaryNav.classList.add('side-bar');
        navToggle.style.display = 'flex'
        navBorder.style.display = 'none'
    } else {
        primaryNav.classList.remove('side-bar');
        navToggle.style.display = 'none'
        navBorder.style.display = 'block'
    }

}

navToggle.addEventListener('click', () => {
    if (primaryNav.classList.contains('side-bar')) {
        primaryNav.classList.toggle('show');
        navToggle.classList.toggle('active');
    }
});
  
  window.addEventListener('scroll', responsive);
  window.addEventListener('resize', responsive);

responsive();

const typingEffect = new Typed(".dynamic-text", {
    strings : ["Developer","Engineer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500,
})

// const scrollTrackingTimeline = new ScrollTimeline({
//     source: document.scrollingElement,
//     orientation: "block",
//     scrollOffsets: [CSS.percent(20), CSS.percent(100)],
// })


// scrollTracker.animate(
//     {
//         transform: ["scaleX(0)", "scaleX(1)"]
//     },
//     {
//         duration: 1,
//         timeline: scrollTrackingTimeline,
//     }
// )

// textBoxAnimate.forEach((textBox) => {
    
//     const offsetTop = textBox.offsetTop;
//     const textBoxHeight = textBox.offsetHeight;

//     textBox.animate(
//         {
//             transform: ["perspective(1000px) rotateX(90deg)", "perspective(1000px) rotate(0deg)"],
//             opacity: ["0.5", "1"]
//         },
//         {
//             duration: 1,
//             easing: "linear",
//             timeline: new ScrollTimeline({
//                 // scrollOffsets: [
//                 //     {target: textBox, edge: "end", threshold: "0"},
//                 //     {target: textBox, edge: "start", threshold: "1"},
//                 // ]

//                 scrollOffsets: [
//                     CSS.px(-1000),
//                     CSS.px(1000)
//                 ]
//             }), 
//         }
    
//     )
// })

function textBoxes () {

    // const triggerBottom = window.innerHeight / 2; // 50% from the bottom of the screen
    const trigger200px = window.innerHeight - 200;

    textBoxAnimate.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const isBoxVisible = boxTop < trigger200px;
        let progressHeight;

        if (isBoxVisible && !box.classList.contains('show')) {
            box.classList.add('show');
            show = document.querySelectorAll('.show');

            progressHeight = ((show.length-1) / 5) * 100;
            progress.style.height = progressHeight + '%';

        } else if (!isBoxVisible && box.classList.contains('show')) {
            box.classList.remove('show');
            show = document.querySelectorAll('.show');

            progressHeight = ((show.length-1) / 5) * 100;
            progress.style.height = progressHeight + '%';
        }
    });

}

window.addEventListener('scroll', textBoxes)



// Form Validation
const form = document.querySelector(".contact-form");
const username = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const messages = document.querySelectorAll(".message");

const error = (input, message) => {
  input.nextElementSibling.classList.add("error");
  input.nextElementSibling.textContent = message;
};

const success = (input) => {
  input.nextElementSibling.classList.remove("error");
};

const checkRequiredFields = (inputArr) => {
  inputArr.forEach((input) => {
    if (input.value.trim() === "") {
      error(input, `${input.id} is required`);
    }
  });
};

const checkLength = (input, min) => {
  if (input.value.trim().length < min) {
    error(input, `${input.id} must be at least ${min} characters`);
  } else {
    success(input);
  }
};

const checkEmail = (input) => {
  const regEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEx.test(input.value.trim())) {
    success(input);
  } else {
    error(input, "Email is not valid");
  }
};

form.addEventListener("submit", (e) => {
  checkLength(username, 2);
  checkLength(subject, 2);
  checkLength(message, 10);
  checkEmail(email);
  checkRequiredFields([username, email, subject, message]);

  const notValid = Array.from(messages).find((message) => {
    return message.classList.contains("error");
  });

  notValid && e.preventDefault();
});
// End of Form Validation
