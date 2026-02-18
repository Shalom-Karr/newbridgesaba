document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <nav class="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" x-data="{ mobileMenu: false }">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <a href="index.html" class="flex items-center">
                <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" alt="Logo" class="h-10">
            </a>
            
            <div class="hidden lg:flex items-center space-x-8 font-bold text-sm uppercase tracking-wider text-gray-600">
                <a href="index.html" class="hover:text-brandPurple transition">Home</a>
                <a href="services.html" class="text-brandPurple">Services</a>
                <a href="faq.html" class="hover:text-brandPurple transition">FAQ</a>
                <a href="contact.html" class="hover:text-brandPurple transition">Contact</a>
                <a href="tel:8338235433" class="text-brandBlue font-extrabold flex items-center gap-2">
                    <span class="bg-brandBlue/10 p-2 rounded-full">📞</span> 833-823-5433
                </a>
                <a href="contact.html" class="bg-brandPurple text-white px-6 py-3 rounded-full hover:bg-brandBlue transition shadow-lg shadow-brandPurple/20">Enroll Now</a>
            </div>

            <button @click="mobileMenu = !mobileMenu" class="lg:hidden text-brandPurple">
                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
        </div>
        <!-- Mobile Menu -->
        <div x-show="mobileMenu" x-cloak class="lg:hidden bg-white border-t p-6 space-y-4 shadow-xl">
            <a href="index.html" class="block font-bold">Home</a>
            <a href="services.html" class="block font-bold text-brandPurple">Services</a>
            <a href="faq.html" class="block font-bold">FAQ</a>
            <a href="contact.html" class="block font-bold">Contact</a>
            <a href="tel:8338235433" class="block font-bold text-brandBlue">Call 833-823-5433</a>
        </div>
    </nav>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
});
