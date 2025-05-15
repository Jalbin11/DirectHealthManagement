function Header() {
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header>
            <h1>Lynn Dugger Direct Health Management</h1>
            <nav>
                <a
                    href="#welcome"
                    onClick={(e) => {
                        const section = document.getElementById('welcome');
                        if (section) {
                            e.preventDefault(); // Prevent default only if the section exists
                            handleScroll('welcome');
                        }
                    }}
                >
                    Welcome
                </a>
                <a
                    href="#about"
                    onClick={(e) => {
                        const section = document.getElementById('about');
                        if (section) {
                            e.preventDefault();
                            handleScroll('about');
                        }
                    }}
                >
                    About
                </a>
                <a
                    href="#products"
                    onClick={(e) => {
                        const section = document.getElementById('products');
                        if (section) {
                            e.preventDefault();
                            handleScroll('products');
                        }
                    }}
                >
                    Products & Services
                </a>
                <a
                    href="#recommendations"
                    onClick={(e) => {
                        const section = document.getElementById('recommendations');
                        if (section) {
                            e.preventDefault();
                            handleScroll('recommendations');
                        }
                    }}
                >
                    Recommendations
                </a>
                <a
                    href="#owner"
                    onClick={(e) => {
                        const section = document.getElementById('owner');
                        if (section) {
                            e.preventDefault();
                            handleScroll('owner');
                        }
                    }}
                >
                    Owner Profile
                </a>
                <a
                    href="#contact"
                    onClick={(e) => {
                        const section = document.getElementById('contact');
                        if (section) {
                            e.preventDefault();
                            handleScroll('contact');
                        }
                    }}
                    className="contact-button"
                >
                    Contact Us
                </a>
            </nav>
        </header>
    );
}

export default Header;