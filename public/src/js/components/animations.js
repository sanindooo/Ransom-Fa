import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// GSAP and handle resize bug
document.ready(function() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        markers: false
    });
});

// Hero background animation 

document.getElementByClassName("sticky-section").each(function (index) {
    let triggerElement = this;
    let targetElement = document.getElementByClassName("sticky-section_image");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        
        start: "top top",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.to(targetElement, {
      opacity:"1",
      backgroundSize: "110vw",
      duration: 1,
    });
  });
  


// About scroll animation 
gridAnim();
function gridAnim() {
$(".section.section--about").each(function (index) {
  let triggerElement = this;
  let background = document.getElementByClassName("grid_item");
	let images = document.getElementByClassName("grid_image");
  let text = document.getElementByClassName("scroll-anim")

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      
      start: "top top",
      end: "bottom bottom+=150px",
      scrub: 1
    }
  });
  tl.from(background, {
    x: -50,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    force3D: false,
  });
  tl.from(images, {
    x: -30,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    force3D: false,
  });
});
}

// Basic Animations
/* 
** Slide animations
*/
gsap.set(".slide-in", {y: 25, opacity: 0});
      ScrollTrigger.batch(".slide-in", {
      start: "top bottom-=100px",
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: 25, duration: 1, stagger: 0.1})
});

gsap.set(".slide-in--late", {opacity: 0, scale:0.9});
      ScrollTrigger.batch(".slide-in--late", {
      start: "top 50%",
      onEnter: batch => gsap.to(batch, {opacity: 1, scale:1, duration: 0.7, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, scale:0.9, duration: 0.7, stagger: 0.1})
});

gsap.set(".slide-down", {y: -25, opacity: 0});
      ScrollTrigger.batch(".slide-down", {
      start: "top bottom-=100px",
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, duration: 1, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, y: -25, duration: 1, stagger: 0.1})
});

gsap.set(".platforms", {width: "0%", opacity: 0});
      ScrollTrigger.batch(".platforms", {
      start: "top bottom-=100px",
      onEnter: batch => gsap.to(batch, {opacity: 1, width: "80%", duration: 0.5, stagger: 0.15}),
      onLeaveBack: batch => gsap.to(batch, {opacity: 0, width: "0%", duration: 1, stagger: 0.1})
});

// Block animations
/* 
** Music Block Animation
*/

let musicBlock = document.querySelectorAll(".music-block")

musicBlock.forEach( (element) => {
	let title = element.querySelectorAll(".music-block_title")
  let text = element.querySelectorAll(".music-block_text")
  let videos = element.querySelectorAll(".music-block_video")
	let images = element.querySelectorAll(".music-block_image")
  let platforms = element.querySelectorAll(".platform-list_image")
  
  
	let tl = gsap.timeline()
	  .from(videos, {
    opacity: 0,
    y: 25,
    duration: 1,
    })
    .from(images, {
    opacity: 0,
    y: 25,
    duration: 1,
    }, 0)
    .from(title, {
    y: 10, 
    opacity: 0,
    delay: 0.2,
    duration: 0.85,
    }, "-=0.85")
    .from(text, {
    y: 20,
    opacity: 0,
    duration: 0.95,
    }, "-=0.95")
    .from(platforms, {
    y: 10, 
    opacity: 0,
    duration: 0.75,
    },"-=0.55")
	
	ScrollTrigger.create({
		trigger:element,
		start:"top 50%",
		toggleActions:"play none none reverse",
		animation:tl
	})
})

/* 
** TV Block Animation
*/
let tvBlock = document.querySelectorAll(".tv-list_item")

tvBlock.forEach( (element) => {
	let title = element.querySelectorAll(".tv-block_title")
    let subtitle = element.querySelectorAll(".tv-block_subtitle")
	let images = element.querySelectorAll(".tv-block_link")
  
  
	let tl = gsap.timeline()
	  .from(images, {
    opacity: 0,
    y: 25,
    duration: 1,
    stagger: 0.1,
    })
		.from(title, {
    y: 15, 
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    }, "-=0.75")
    .from(subtitle, {
    y: 15, 
    opacity: 0,
    duration: 0.75,
    stagger: 0.1,
    }, "-=0.85")
	
	ScrollTrigger.create({
		trigger:element,
		start:"top 50%",
		toggleActions:"play none none reverse",
		animation:tl
	})
})

// Event image animation
let contentBlockHalf = document.querySelector(".content-block.is--half");

contentBlockHalf.forEach(function (index) {
    let triggerElement = this;
    let targetElement = document.getElementByClassName("event_image");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        
        start: "top 30%",
        end: "bottom bottom",
        scrub: 1
      }
    });
    tl.from(targetElement, {
      opacity:"0",
      y: 25,
      duration: 1,
    });
  });

// Footer Parallax animation 
const tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".footer",
		start: "top top",
		end: "bottom top",
		scrub: true
	}
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});