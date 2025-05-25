// Referrals section expand/collapse logic
document.addEventListener('DOMContentLoaded', function () {
    // Referrals expand/collapse
    const referralsContainer = document.getElementById('referralsContainer');
    const referralsContent = document.getElementById('referralsContent');
    const expandIcon = referralsContainer ? referralsContainer.querySelector('.expand-icon') : null;

    if (referralsContainer && referralsContent && expandIcon) {
        referralsContainer.addEventListener('click', function () {
            referralsContent.classList.toggle('expanded');
            expandIcon.classList.toggle('expanded');
        });
    }

    // Smooth scroll for anchor links (for browsers that don't support CSS scroll-behavior)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            const target = document.getElementById(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Animate elements with .fade-in-up class on scroll
    const fadeEls = document.querySelectorAll('.fade-in-up');
    if (fadeEls.length > 0) {
        const revealOnScroll = () => {
            fadeEls.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 50) {
                    el.style.opacity = 1;
                    el.style.transform = 'translateY(0)';
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();
    }

    // Products carousel logic
    // Carousel
    const track = document.querySelector('.products-grid.carousel-track');
    const cards = document.querySelectorAll('.products-grid.carousel-track .product-card');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    // Determine how many cards to show based on screen width
    function getCardsPerView() {
        if (window.innerWidth >= 1100) return 3;
        if (window.innerWidth >= 700) return 2;
        return 1;
    }

    function updateCarousel() {
        const cardsPerView = getCardsPerView();
        const cardWidth = cards[0].offsetWidth + 32; // 32px gap
        const maxIndex = Math.max(0, cards.length - cardsPerView);
        currentIndex = Math.min(currentIndex, maxIndex);
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === maxIndex;
    }

    if (track && cards.length && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentIndex = Math.max(0, currentIndex - 1);
            updateCarousel();
        });
        nextBtn.addEventListener('click', () => {
            const cardsPerView = getCardsPerView();
            const maxIndex = Math.max(0, cards.length - cardsPerView);
            currentIndex = Math.min(maxIndex, currentIndex + 1);
            updateCarousel();
        });
        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }
});
