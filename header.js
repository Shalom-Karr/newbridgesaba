document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <nav class="fixed w-full z-[100] bg-white/80 backdrop-blur-2xl border-b border-gray-100/50" x-data="{ mobileMenu: false, scrolled: false }" @scroll.window="scrolled = (window.pageYOffset > 20)">
        <div class="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex justify-between items-center transition-all duration-500" :class="scrolled ? 'h-20' : 'h-20 md:h-24'">
            
            <!-- Logo -->
            <a href="index.html" class="flex items-center group">
                <div class="relative">
                    <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" 
                         alt="New Bridges ABA Logo" 
                         class="h-9 sm:h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute -inset-2 bg-brandPurple/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                </div>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center space-x-1 font-bold text-[11px] uppercase tracking-[0.15em] text-gray-500">
                <a href="index.html" class="px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all">Home</a>
                <a href="about.html" class="px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all">About</a>
                <a href="services.html" class="px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all">Services</a>
                <a href="contact.html" class="px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all">Contact Us</a>
                
                <div class="h-8 w-px bg-gray-100 mx-4"></div>
                
                <div class="flex items-center gap-4">
                    <a href="tel:8338235433" class="text-brandBlue flex items-center gap-2 group">
                        <span class="bg-brandBlue/10 p-2.5 rounded-full group-hover:bg-brandBlue group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        <span class="hidden xl:inline">833-823-5433</span>
                    </a>
                    <a href="contact.html" class="bg-brandPurple text-white px-8 py-3.5 rounded-2xl hover:bg-brandBlue hover:shadow-2xl hover:shadow-brandBlue/30 transition-all duration-500 transform hover:-translate-y-0.5 active:scale-95">
                        Enroll Now
                    </a>
                </div>
            </div>

            <!-- Hamburger Button -->
            <button @click="mobileMenu = !mobileMenu" 
                    class="lg:hidden p-3 text-brandPurple rounded-2xl bg-brandPurple/5 hover:bg-brandPurple/10 transition-all active:scale-90 relative z-[110]"
                    aria-label="Toggle Menu">
                <div class="w-6 h-5 relative flex flex-col justify-between">
                    <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300" :class="mobileMenu ? 'rotate-45 translate-y-2' : ''"></span>
                    <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300" :class="mobileMenu ? 'opacity-0' : ''"></span>
                    <span class="w-full h-0.5 bg-current rounded-full transition-all duration-300" :class="mobileMenu ? '-rotate-45 -translate-y-2' : ''"></span>
                </div>
            </button>
        </div>

        <!-- Mobile Menu Overlay -->
        <div x-show="mobileMenu" 
             x-cloak 
             x-transition:enter="transition ease-out duration-500"
             x-transition:enter-start="opacity-0 translate-y-[-20px]"
             x-transition:enter-end="opacity-100 translate-y-0"
             x-transition:leave="transition ease-in duration-300"
             class="lg:hidden fixed inset-0 z-[100] bg-white pt-24 px-6 overflow-y-auto">
            
            <div class="flex flex-col space-y-1">
                <a href="index.html" @click="mobileMenu = false" class="text-3xl font-black text-gray-900 italic hover:text-brandPurple transition-colors py-3 border-b border-gray-50">Home</a>
                <a href="about.html" @click="mobileMenu = false" class="text-3xl font-black text-gray-900 italic hover:text-brandPurple transition-colors py-3 border-b border-gray-50">About</a>
                <a href="services.html" @click="mobileMenu = false" class="text-3xl font-black text-gray-900 italic hover:text-brandPurple transition-colors py-3 border-b border-gray-50">Services</a>
                <a href="contact.html" @click="mobileMenu = false" class="text-3xl font-black text-gray-900 italic hover:text-brandPurple transition-colors py-3 border-b border-gray-50">Contact Us</a>
                
                <div class="pt-12 space-y-8">
                    <div class="bg-brandBlue/5 p-8 rounded-[2.5rem] flex items-center justify-between group">
                        <div>
                            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-brandBlue mb-2">Direct Support</p>
                            <a href="tel:8338235433" class="text-2xl font-black text-gray-900">833-823-5433</a>
                        </div>
                        <div class="bg-brandBlue text-white p-4 rounded-full shadow-lg shadow-brandBlue/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                    </div>
                    
                    <a href="contact.html" @click="mobileMenu = false" class="block w-full bg-brandPurple text-white text-center py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-brandPurple/30 active:scale-95 transition-all duration-300">
                        Start Enrollment
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
    document.getElementById('header-placeholder').innerHTML = headerHTML;
});
