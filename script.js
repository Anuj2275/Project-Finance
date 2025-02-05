  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation for stats
const stats = document.querySelectorAll('.stat-number');
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

stats.forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'all 0.5s ease-out';
    observer.observe(stat);
});

// Add hover effect to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-2px)';
        button.style.transition = 'transform 0.2s ease';
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});
const pricingCards = document.querySelectorAll('.pricing-card');

pricingCards.forEach(card => {
card.addEventListener('mouseenter', () => {
// Add subtle lift effect
card.style.transform = 'translateY(-10px)';
card.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
card.style.transition = 'all 0.3s ease';

// Highlight features with staggered animation
const features = card.querySelectorAll('.pricing-feature');
features.forEach((feature, index) => {
    setTimeout(() => {
        feature.style.transform = 'translateX(10px)';
        feature.style.transition = 'transform 0.2s ease';
    }, index * 50);
});
});

card.addEventListener('mouseleave', () => {
// Reset card position and shadow
card.style.transform = 'translateY(0)';
card.style.boxShadow = 'none';

// Reset features position
const features = card.querySelectorAll('.pricing-feature');
features.forEach(feature => {
    feature.style.transform = 'translateX(0)';
});
});
});

// Pricing button interactions
const pricingButtons = document.querySelectorAll('.pricing-button');

pricingButtons.forEach(button => {
button.addEventListener('mouseenter', () => {
button.style.transform = 'scale(1.05)';
button.style.transition = 'all 0.2s ease';
});

button.addEventListener('mouseleave', () => {
button.style.transform = 'scale(1)';
});

button.addEventListener('click', (e) => {
const tier = e.target.closest('.pricing-card').querySelector('.pricing-tier').textContent;

// Add ripple effect
const ripple = document.createElement('div');
ripple.classList.add('ripple');
button.appendChild(ripple);

// Remove ripple after animation
setTimeout(() => ripple.remove(), 1000);

// Example of handling different pricing tiers
switch(tier.toLowerCase()) {
    case 'basic free':
        console.log('Starting free trial');
        break;
    case 'advanced':
        console.log('Redirecting to subscription page');
        break;
    case 'teams':
        console.log('Opening team registration');
        break;
    case 'enterprise':
        console.log('Opening contact form');
        break;
}
});
});

// Add intersection observer for scroll animations
const pricingSection = document.querySelector('.pricing');
const pricingObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
    // Animate cards sequentially when section comes into view
    pricingCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    pricingObserver.unobserve(entry.target);
}
});
}, {
threshold: 0.2
});

pricingObserver.observe(pricingSection);

// Add this CSS to the existing styles
const styleSheet = document.createElement('style');
styleSheet.textContent = `
.pricing-card {
opacity: 0;
transform: translateY(20px);
}

.ripple {
position: absolute;
border-radius: 50%;
background: rgba(255, 255, 255, 0.4);
transform: scale(0);
animation: ripple 0.6s linear;
pointer-events: none;
}

@keyframes ripple {
to {
    transform: scale(4);
    opacity: 0;
}
}

.pricing-feature {
transition: transform 0.2s ease;
}

.pricing-button {
position: relative;
overflow: hidden;
}
`;
document.head.appendChild(styleSheet);


Shery.mouseFollower();
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".hvr",{videos:[
    "./assets/0.mp4","./assets/2.mp4","./assets/3.mp4"
]})

Shery.imageEffect(".liquid",{
    style:2,
    config:{onMouse:{value:1}},
})

Shery.hoverWithMediaCircle(".hvr",{videos:[
    "./assets/0.mp4","./assets/2.mp4","./assets/3.mp4"
]})

Shery.imageEffect('.image-container ',{
    style:5,

})

function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
  }
  locomotiveAnimation();
  
  
  
  gsap.registerPlugin(ScrollTrigger);

// Hero section animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power3.out",
});

// Stats section animation
gsap.from(".stat-number", {
  scrollTrigger: {
    trigger: ".stats",
    start: "top 80%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  y: 30,
  stagger: 0.3,
  duration: 1,
});

// Features section animation
gsap.from(".features-content", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 85%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  x: -50,
  duration: 1.5,
  ease: "power3.out",
});

gsap.from(".features-image img", {
  scrollTrigger: {
    trigger: ".features",
    start: "top 85%",
    end: "bottom 60%",
    scrub: true,
  },
  opacity: 0,
  x: 50,
  duration: 1.5,
  ease: "power3.out",
});

// Financial features section
gsap.from(".financial-features-content", {
  scrollTrigger: {
    trigger: ".financial-features",
    start: "top 80%",
    end: "bottom 50%",
    scrub: true,
  },
  opacity: 0,
  y: 50,
  duration: 1.5,
});

gsap.from(".financial-features-image img", {
  scrollTrigger: {
    trigger: ".financial-features",
    start: "top 80%",
    end: "bottom 50%",
    scrub: true,
  },
  opacity: 0,
  x: -50,
  duration: 1.5,
});

// Button hover effects
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.05, duration: 0.2 });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1, duration: 0.2 });
  });
});
