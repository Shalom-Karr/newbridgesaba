document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <nav class="fixed w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100" x-data="{ mobileMenu: false }">
        <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            
            <!-- Logo -->
            <a href="index.html" class="flex items-center">
                <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" alt="New Bridges ABA Logo" class="h-9 md:h-11">
            </a>
            
            <!-- Desktop Menu (Hidden on Mobile & Tablet < 1024px) -->
            <div class="hidden lg:flex items-center space-x-8 font-bold text-sm uppercase tracking-widest text-gray-500">
                <a href="index.html" class="hover:text-brandPurple transition">Home</a>
                <a href="services.html" class="hover:text-brandPurple transition">Services</a>
                <a href="faq.html" class="hover:text-brandPurple transition">FAQ</a>
                <a href="contact.html" class="hover:text-brandPurple transition">Contact</a>
                <div class="h-6 w-px bg-gray-200"></div>
                <a href="tel:8338235433" class="text-brandBlue flex items-center gap-2">
                    <span class="bg-brandBlue/10 p-2 rounded-full">📞</span> 833-823-5433
                </a>
                <a href="contact.html" class="bg-brandPurple text-white px-8 py-3 rounded-full hover:bg-brandBlue transition shadow-lg shadow-brandPurple/20">Enroll Now</a>
            </div>

            <!-- Hamburger Button (Visible on Mobile & Tablet < 1024px) -->
            <button @click="mobileMenu = !mobileMenu" 
                    class="lg:hidden p-2 text-brandPurple rounded-xl bg-brandPurple/5 hover:bg-brandPurple/10 transition-colors"
                    aria-label="Toggle Menu">
                <!-- Hamburger Icon (3 Bars) -->
                <svg x-show="!mobileMenu" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Close Icon (X) -->
                <svg x-show="mobileMenu" x-cloak xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Full-Screen Mobile/Tablet Menu Overlay -->
        <div x-show="mobileMenu" 
             x-cloak 
             x-transition:enter="transition ease-out duration-300"
             x-transition:enter-start="opacity-0 translate-y-[-20px]"
             x-transition:enter-end="opacity-100 translate-y-0"
             x-transition:leave="transition ease-in duration-200"
             x-transition:leave-start="opacity-100 translate-y-0"
             x-transition:leave-end="opacity-0 translate-y-[-20px]"
             class="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]">
            
            <div class="flex flex-col p-8 space-y-6">
                <a href="index.html" @click="mobileMenu = false" class="text-2xl font-black text-gray-900 italic hover:text-brandPurple transition">Home</a>
                <a href="services.html" @click="mobileMenu = false" class="text-2xl font-black text-gray-900 italic hover:text-brandPurple transition">Services</a>
                <a href="faq.html" @click="mobileMenu = false" class="text-2xl font-black text-gray-900 italic hover:text-brandPurple transition">FAQ</a>
                <a href="contact.html" @click="mobileMenu = false" class="text-2xl font-black text-gray-900 italic hover:text-brandPurple transition">Contact</a>
                
                <div class="h-px bg-gray-100 w-full my-2"></div>
                
                <a href="tel:8338235433" class="flex items-center gap-4 text-xl font-extrabold text-brandBlue">
                    <span class="bg-brandBlue/10 p-3 rounded-2xl">📞</span> 833-823-5433
                </a>
                
                <a href="contact.html" @click="mobileMenu = false" class="w-full bg-brandPurple text-white text-center py-5 rounded-[2rem] font-black text-xl shadow-xl shadow-brandPurple/20 active:scale-95 transition">
                    Start Enrollment
                </a>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
});
