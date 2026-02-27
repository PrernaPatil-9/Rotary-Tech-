// main.js - ROTARY TECH Website

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Initialize GSAP and Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // ==================== MOBILE MENU FUNCTIONALITY ====================
    const menuToggle = document.getElementById('menuToggle');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileServicesBtn = document.getElementById('mobileServicesBtn');
    const mobileServicesContent = document.getElementById('mobileServicesContent');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.remove('-translate-x-full');
        });
    }

    if (closeMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });
    }

    // Close mobile menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('-translate-x-full');
        });
    });

    // Mobile Services Accordion
    if (mobileServicesBtn) {
        mobileServicesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            mobileServicesContent.classList.toggle('hidden');
            const arrow = mobileServicesBtn.querySelector('.arrow');
            if (arrow) {
                arrow.style.transform = mobileServicesContent.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
            }
        });
    }

    // ==================== GSAP ANIMATIONS ====================

    // Header Slide Down on Load
    gsap.from('#mainHeader', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // Hero Section Animations
    const heroTimeline = gsap.timeline();
    heroTimeline
        .from('.hero-headline', {
            y: 60,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        })
        .from('.hero-subheadline', {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out'
        }, '-=0.5')
        .from('.hero-buttons a', {
            y: 30,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'back.out(1.2)'
        }, '-=0.3');

    // Parallax Effect for Hero Background
    gsap.to('.parallax-bg', {
        scrollTrigger: {
            trigger: '#home',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        backgroundPositionY: '30%',
        ease: 'none'
    });

    // About Section Fade In
    gsap.from('#about .about-image', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('#about .about-text', {
        scrollTrigger: {
            trigger: '#about',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: 80,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power2.out'
    });

    // Industries Cards Fade In
    gsap.from('.industry-card', {
        scrollTrigger: {
            trigger: '#industries',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.2)'
    });

    // Service Cards Animation
    gsap.from('.service-card', {
        scrollTrigger: {
            trigger: '#services-detailed',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
    });

    // Process Timeline Animation (Desktop)
    gsap.from('.process-step', {
        scrollTrigger: {
            trigger: '#process',
            start: 'top 70%',
            end: 'bottom 30%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        onComplete: function() {
            // Animate progress line
            gsap.to('.process-progress', {
                scrollTrigger: {
                    trigger: '#process',
                    start: 'top 70%',
                    end: 'bottom 30%',
                    scrub: 1
                },
                width: '100%',
                ease: 'none'
            });

            // Change step colors as they come into view
            const steps = document.querySelectorAll('.process-step');
            steps.forEach((step, index) => {
                ScrollTrigger.create({
                    trigger: step,
                    start: 'top 70%',
                    onEnter: () => {
                        const circle = step.querySelector('div:first-child');
                        if (circle) {
                            circle.classList.remove('bg-gray-300', 'text-gray-600');
                            circle.classList.add('bg-industrial-orange', 'text-white');
                        }
                    }
                });
            });
        }
    });

    // Features Cards Animation
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '#why-choose-us',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // Contact Section Fade In
    gsap.from('#contact .grid > div:first-child', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    gsap.from('#contact .grid > div:last-child', {
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        x: 50,
        opacity: 0,
        duration: 1,
        ease: 'power2.out'
    });

    // ==================== COUNTER ANIMATIONS ====================
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 85%',
            onEnter: () => {
                let current = 0;
                const increment = target / 50; // Divide into 50 steps
                
                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCounter();
            },
            once: true
        });
    });

    // ==================== SMOOTH SCROLL FOR ANCHOR LINKS ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('-translate-x-full')) {
                    mobileMenu.classList.add('-translate-x-full');
                }
                
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: targetElement,
                        offsetY: 80 // Offset for sticky header
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // ==================== FORM SUBMISSION (Prevent default for demo) ====================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your interest! Our team will contact you shortly.');
            this.reset();
        });
    }

    // ==================== DROPDOWN ARROW ANIMATION ====================
    const dropdownToggle = document.querySelector('.group');
    if (dropdownToggle) {
        const arrow = dropdownToggle.querySelector('.dropdown-arrow');
        
        dropdownToggle.addEventListener('mouseenter', () => {
            if (arrow) {
                gsap.to(arrow, {
                    rotation: 180,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
        
        dropdownToggle.addEventListener('mouseleave', () => {
            if (arrow) {
                gsap.to(arrow, {
                    rotation: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        });
    }
});