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
});
