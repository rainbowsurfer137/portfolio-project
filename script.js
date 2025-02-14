function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".down-arrow").forEach((arrow, index, arrows) => {
        arrow.addEventListener("click", function () {
            const targetId = this.getAttribute("data-target");
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offset = 100;
                const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                if (index === arrows.length - 1) {
                    setTimeout(() => {
                        window.scrollTo({ 
                            top: document.body.scrollHeight, 
                            behavior: 'smooth' 
                        });
                    }, 100);
                }
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const socialIcons = [
        { id: "facebook", hoverSrc: "./assets/images/facebook-hover.png", defaultSrc: "./assets/images/facebook.png", link: "https://facebook.com/" },
        { id: "instagram", hoverSrc: "./assets/images/insta-hover.png", defaultSrc: "./assets/images/insta.png", link: "https://instagram.com/" },
        { id: "github", hoverSrc: "./assets/images/github-hover.png", defaultSrc: "./assets/images/github.png", link: "https://github.com/" }
    ];

    socialIcons.forEach(icon => {
        const img = document.getElementById(icon.id);
        if (img) {
            img.addEventListener("mouseover", () => img.src = icon.hoverSrc);
            img.addEventListener("mouseout", () => img.src = icon.defaultSrc);
            img.addEventListener("click", () => window.open(icon.link, "_blank"));
        }
    });
});