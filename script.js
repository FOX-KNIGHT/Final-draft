document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const header = document.querySelector('header');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('Menu');
    const menuLinks = document.querySelectorAll('.Menu-list');
    
    // Variables for scroll detection
    let lastScrollTop = 0;
    let scrollThreshold = 10; // Minimum scroll amount before showing/hiding
    
    // Toggle mobile menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        // Prevent scrolling when menu is open
        document.body.classList.toggle('no-scroll');
    }
    
    // Close mobile menu
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }
    
    // Handle scroll events
    function handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Only check if we've scrolled enough to avoid tiny movements
        if (Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) return;
        
        // Hide on scroll down, show on scroll up
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            // Scrolling down & not at the top
            header.classList.add('nav-hidden');
        } else {
            // Scrolling up or at the top
            header.classList.remove('nav-hidden');
        }
        
        lastScrollTop = currentScrollTop;
    }
    
    // Event Listeners
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close menu when clicking a link
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Add scroll event with throttling for performance
    let isScrolling;
    window.addEventListener('scroll', () => {
        // Clear previous timeout
        window.clearTimeout(isScrolling);
        
        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(handleScroll, 10);
    });
});

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add content wrapper div for better layout
    const leftDiv = document.querySelector('.left');
    const rightDiv = document.querySelector('.right');
    const greetingDiv = document.querySelector('.greeting');

    if (leftDiv && rightDiv && greetingDiv) {
        // Remove greeting from its current position
        const frontElement = document.querySelector('.front');
        greetingDiv.parentNode.removeChild(greetingDiv);

        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'content-wrapper';

        // Get the parent element
        const aboutDiv = document.querySelector('.About');

        // Remove left and right from their current position
        leftDiv.parentNode.removeChild(leftDiv);
        rightDiv.parentNode.removeChild(rightDiv);

        // Add them to the content wrapper
        contentWrapper.appendChild(leftDiv);
        contentWrapper.appendChild(rightDiv);

        // Add the content wrapper to the About section
        aboutDiv.appendChild(contentWrapper);

        // Add greeting after the content wrapper
        aboutDiv.appendChild(greetingDiv);





        // Set up typed text animation
        const typedTextElement = document.querySelector('.typed-text');
        const textArray = ["Frontend Developer", "Web Designer", "Backend Developer"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingDelay = 100;

        function typeText() {
            const currentText = textArray[textIndex];

            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingDelay = 50;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingDelay = 150;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingDelay = 1000; // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % textArray.length;
                typingDelay = 500; // Pause before typing next text
            }

            setTimeout(typeText, typingDelay);
        }

        // Start the typing animation
        setTimeout(typeText, 2500); // Start after initial animations

        // Toggle between About and More sections
        const aboutSection = document.querySelector('.About');

        moreBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                if (aboutSection.style.display !== 'none') {
                    aboutSection.style.display = 'none';
                    moreSection.style.display = 'block';
                    window.scrollTo(0, 0);
                } else {
                    aboutSection.style.display = 'flex';
                    moreSection.style.display = 'none';
                    window.scrollTo(0, 0);
                }
            });
        });
    }
});

// Proficiency section
// Create enhanced floating particles effect
        const particlesContainer = document.getElementById('particles');
        const particleCount = 100; // Increased particle count
        
        // Clear existing particles
        particlesContainer.innerHTML = '';
        
        // Create particle types and variants
        const particleTypes = [
            { class: 'particle', size: [1, 4], speed: [15, 25], opacity: [0.3, 0.7] },
            { class: 'particle-large', size: [3, 6], speed: [20, 30], opacity: [0.4, 0.8] },
            { class: 'particle-glow', size: [2, 5], speed: [15, 20], opacity: [0.5, 0.9] }
        ];
        
        // Create particles
        for (let i = 0; i < particleCount; i++) {
            // Select random particle type
            const typeIndex = Math.floor(Math.random() * particleTypes.length);
            const particleType = particleTypes[typeIndex];
            
            const particle = document.createElement('div');
            particle.classList.add(particleType.class);
            
            // Apply basic particle styling
            particle.style.position = 'absolute';
            particle.style.borderRadius = '50%';
            
            // Add specific particle styling
            if (particleType.class === 'particle') {
                particle.style.background = '#d9a84e';
                particle.style.boxShadow = '0 0 5px #d9a84e';
            } else if (particleType.class === 'particle-large') {
                particle.style.background = 'transparent';
                particle.style.border = '1px solid #d9a84e';
                particle.style.boxShadow = '0 0 8px #d9a84e';
            } else if (particleType.class === 'particle-glow') {
                particle.style.background = '#d9a84e';
                particle.style.boxShadow = '0 0 15px #d9a84e, 0 0 30px #d9a84e';
            }
            
            // Random positioning
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random size within type range
            const size = Math.random() * (particleType.size[1] - particleType.size[0]) + particleType.size[0];
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random opacity within type range
            const opacity = Math.random() * (particleType.opacity[1] - particleType.opacity[0]) + particleType.opacity[0];
            particle.style.opacity = opacity;
            
            // Animation properties
            const speed = Math.random() * (particleType.speed[1] - particleType.speed[0]) + particleType.speed[0];
            particle.style.animation = `particle-float ${speed}s infinite linear`;
            particle.style.animationDelay = `${Math.random() * speed}s`;
            
            particlesContainer.appendChild(particle);
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active class
                document.querySelectorAll('.skillbar-list').forEach(item => {
                    item.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
        
        // Improved Intersection Observer for scroll animations with staggered timing
        const sections = document.querySelectorAll('.section');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered animation delay
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, index * 150); // 150ms delay between each section animation
                    
                    // Update active navigation
                    const id = entry.target.getAttribute('id');
                    document.querySelectorAll('.skillbar-list').forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${id}`) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }, { threshold: 0.2 }); // Trigger earlier
        
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
            section.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)'; // Improved easing function
            observer.observe(section);
        });
        
        // Add parallax effect to sections on scroll
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            
            sections.forEach((section, index) => {
                const speed = index % 2 === 0 ? 0.05 : -0.05;
                const offset = scrollPosition * speed;
                section.style.backgroundPositionY = `${offset}px`;
            });
            
            // Parallax for particles container
            particlesContainer.style.transform = `translateY(${scrollPosition * 0.03}px)`;
        });
        
        // Handle window resize for better responsiveness
        window.addEventListener('resize', () => {
            // Recalculate any necessary dimensions
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });
        
        // Initial call to set viewport height variable
        window.dispatchEvent(new Event('resize'));




        // Earth rotation on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY;
            const earth = document.querySelector('.earth');
            const rotationSpeed = scrollPosition / 20;
            
            earth.style.transform = `rotate(${rotationSpeed}deg)`;
        });
        
        // Contact modal functionality
        const openContactBtn = document.getElementById('open-contact');
        const closeContactBtn = document.getElementById('close-contact');
        const contactModal = document.getElementById('contact-modal');
        
        openContactBtn.addEventListener('click', function() {
            contactModal.style.display = 'flex';
        });
        
        closeContactBtn.addEventListener('click', function() {
            contactModal.style.display = 'none';
        });
        
        window.addEventListener('click', function(event) {
            if (event.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });
