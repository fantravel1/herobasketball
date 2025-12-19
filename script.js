/**
 * HeroBasketball - Interactive JavaScript
 * The Ultimate Women's Basketball Resource
 */

// =====================================================
// DOM Ready Handler
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initScrollEffects();
    initCounterAnimation();
    initRevealOnScroll();
    initPlayerCategories();
    initSearchBox();
    initNewsletterForm();
    initSmoothScrolling();
    initHeroAnimations();
});

// =====================================================
// Mobile Navigation
// =====================================================
function initNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle mobile menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu when clicking a link
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Header scroll effect
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

// =====================================================
// Scroll Effects
// =====================================================
function initScrollEffects() {
    const scrollIndicator = document.querySelector('.scroll-indicator');

    if (scrollIndicator) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        }, { passive: true });
    }
}

// =====================================================
// Counter Animation
// =====================================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-target]');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    // Use Intersection Observer to trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// =====================================================
// Reveal on Scroll
// =====================================================
function initRevealOnScroll() {
    // Add reveal class to elements that should animate
    const revealElements = document.querySelectorAll(
        '.league-card, .player-card, .feature-card, .training-card, .about-stat-card'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the animation
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// =====================================================
// Player Categories
// =====================================================
function initPlayerCategories() {
    const categoryBtns = document.querySelectorAll('.category-btn');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            // Get the category
            const category = btn.getAttribute('data-category');

            // Animate player cards
            const playerCards = document.querySelectorAll('.player-card');
            playerCards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';

                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            });

            // In a real implementation, you would filter players by category here
            console.log(`Showing ${category} players`);
        });
    });
}

// =====================================================
// Search Box
// =====================================================
function initSearchBox() {
    const searchInput = document.querySelector('.search-input');
    const searchFilterBtn = document.querySelector('.search-filter-btn');

    if (searchInput) {
        // Search input handling
        let debounceTimer;

        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = e.target.value.trim();
                if (query.length >= 2) {
                    // In a real implementation, you would search players here
                    console.log(`Searching for: ${query}`);
                }
            }, 300);
        });

        // Enter key handling
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    // Navigate to search results
                    console.log(`Search submitted: ${query}`);
                    // window.location.href = `/search?q=${encodeURIComponent(query)}`;
                }
            }
        });
    }

    if (searchFilterBtn) {
        searchFilterBtn.addEventListener('click', () => {
            // Show filter modal/dropdown
            console.log('Filter clicked');
            // In a real implementation, you would show filter options
        });
    }
}

// =====================================================
// Newsletter Form
// =====================================================
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const emailInput = form.querySelector('input[type="email"]');
            const submitBtn = form.querySelector('button[type="submit"]');
            const email = emailInput.value.trim();

            if (!email) return;

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Show loading state
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Subscribing...';
            submitBtn.disabled = true;

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success
            showNotification('Thanks for subscribing! 🏀', 'success');
            emailInput.value = '';

            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    }
}

// =====================================================
// Notification System
// =====================================================
function showNotification(message, type = 'info') {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" aria-label="Close notification">&times;</button>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%) translateY(100px);
        padding: 16px 24px;
        background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
        color: white;
        border-radius: 12px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 12px;
        font-family: 'Outfit', sans-serif;
        font-weight: 500;
        z-index: 1000;
        transition: transform 0.3s ease;
    `;

    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 20px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        opacity: 0.8;
    `;

    document.body.appendChild(notification);

    // Animate in
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Close button handler
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(-50%) translateY(100px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(-50%) translateY(100px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// =====================================================
// Smooth Scrolling
// =====================================================
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip if it's just "#" or a JavaScript void
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// =====================================================
// Hero Animations
// =====================================================
function initHeroAnimations() {
    // Parallax effect for floating balls
    const balls = document.querySelectorAll('.ball');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        balls.forEach((ball, index) => {
            const speed = (index + 1) * 10;
            const translateX = (x - 0.5) * speed;
            const translateY = (y - 0.5) * speed;

            ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
        });
    });

    // Add click interaction to player cards
    const playerCards = document.querySelectorAll('.player-card');

    playerCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.cursor = 'pointer';
        });

        // Add subtle tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// =====================================================
// Language Selector
// =====================================================
const langBtns = document.querySelectorAll('.lang-btn');
langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const lang = btn.textContent.toLowerCase();
        // In a real implementation, you would redirect or change language
        console.log(`Switching to ${lang}`);

        // Show notification
        const langNames = {
            'en': 'English',
            'es': 'Español',
            'fr': 'Français'
        };

        showNotification(`Language: ${langNames[lang] || lang}`, 'info');
    });
});

// =====================================================
// League Card Hover Effects
// =====================================================
const leagueCards = document.querySelectorAll('.league-card');
leagueCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add glow effect
        const league = card.getAttribute('data-league');
        if (league) {
            card.style.boxShadow = '0 20px 25px -5px rgba(91, 44, 111, 0.15), 0 0 30px rgba(91, 44, 111, 0.2)';
        }
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
    });
});

// =====================================================
// Performance: Passive Event Listeners
// =====================================================
// Already added { passive: true } to scroll listeners above

// =====================================================
// Accessibility: Focus Management
// =====================================================
document.addEventListener('keydown', (e) => {
    // Tab trap for mobile menu
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu && navMenu.classList.contains('active')) {
        const focusableElements = navMenu.querySelectorAll(
            'a, button, input, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// =====================================================
// Console Welcome Message
// =====================================================
console.log(
    '%c🏀 HeroBasketball',
    'font-size: 24px; font-weight: bold; color: #5B2C6F;'
);
console.log(
    '%cThe Ultimate Women\'s Basketball Resource',
    'font-size: 14px; color: #D4AC0D;'
);
console.log(
    '%cWant to contribute? Visit https://github.com/herobasketball',
    'font-size: 12px; color: #6B7280;'
);
