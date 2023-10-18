import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"

const primaryNav = document.querySelector('.primary-navigation')
const navBorder = document.querySelector('.nav-border')
const navToggle = document.querySelector('.nav-custom')
const scrollTracker = document.querySelector('.scroller-tracker')
const textBoxAnimate = document.querySelectorAll('.text-container')
const progress = document.querySelector('.progress')
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

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(20), CSS.percent(100)],
})


scrollTracker.animate(
    {
        transform: ["scaleX(0)", "scaleX(1)"]
    },
    {
        duration: 1,
        timeline: scrollTrackingTimeline,
    }
)

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
    const trigger300px = window.innerHeight - 300;

    textBoxAnimate.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        const isBoxVisible = boxTop < trigger300px;
        let progressHeight;

        if (isBoxVisible && !box.classList.contains('show')) {
            box.classList.add('show');
            show = document.querySelectorAll('.show');

            progressHeight = ((show.length-1) / 5) * 100;
            progress.style.height = progressHeight + '%';
            console.log(show.length)
            console.log(progress.style.height);

        } else if (!isBoxVisible && box.classList.contains('show')) {
            box.classList.remove('show');
            show = document.querySelectorAll('.show');

            progressHeight = ((show.length-1) / 5) * 100;
            progress.style.height = progressHeight + '%';
        }
    });

}

window.addEventListener('scroll', textBoxes)
