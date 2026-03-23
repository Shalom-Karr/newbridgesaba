document.addEventListener('DOMContentLoaded', () => {
    const headerHTML = `
    <nav class="fixed top-0 left-0 w-full max-w-[100vw] z-[100] bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 transition-all duration-300" :class="{ 'h-screen !bg-white': mobileMenu }" x-data="{ mobileMenu: false, scrolled: false }" @scroll.window="scrolled = (window.pageYOffset > 20)" x-effect="document.body.style.overflow = mobileMenu ? 'hidden' : ''">
        <div class="max-w-7xl mx-auto px-4 md:px-8 h-20 md:h-24 flex justify-between items-center transition-all duration-500" :class="scrolled ? 'h-20' : 'h-20 md:h-24'">
            
            <!-- Logo -->
            <a href="index.html" class="flex items-center group">
                <div class="relative">
                    <img src="images/new-bridges-aba-logo.png" 
                         alt="New Bridges ABA Logo" 
                         class="h-9 sm:h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105">
                    <div class="absolute -inset-2 bg-brandPurple/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 -z-10"></div>
                </div>
            </a>
            
            <!-- Desktop Menu -->
            <div class="hidden lg:flex items-center space-x-1 font-bold text-[11px] uppercase tracking-[0.15em] text-gray-500">
                <a href="index.html" class="px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all">Home</a>
                
                <!-- About Us -->
                <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                    <button class="flex items-center px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all outline-none">
                        About Us
                        <svg class="w-3 h-3 ml-1 transition-transform duration-200" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" 
                         x-transition:enter="transition ease-out duration-200"
                         x-transition:enter-start="opacity-0 translate-y-2"
                         x-transition:enter-end="opacity-100 translate-y-0"
                         x-transition:leave="transition ease-in duration-150"
                         x-transition:leave-start="opacity-100 translate-y-0"
                         x-transition:leave-end="opacity-0 translate-y-2"
                         class="absolute top-full left-0 pt-2 w-56" style="display: none;">
                        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 flex flex-col overflow-hidden">
                            <a href="about.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Our Approach</a>
                            <a href="careers.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Join Our Team</a>
                        </div>
                    </div>
                </div>

                <!-- Care & Services -->
                <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                    <button class="flex items-center px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all outline-none">
                        Care & Services
                        <svg class="w-3 h-3 ml-1 transition-transform duration-200" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" 
                         x-transition:enter="transition ease-out duration-200"
                         x-transition:enter-start="opacity-0 translate-y-2"
                         x-transition:enter-end="opacity-100 translate-y-0"
                         x-transition:leave="transition ease-in duration-150"
                         x-transition:leave-start="opacity-100 translate-y-0"
                         x-transition:leave-end="opacity-0 translate-y-2"
                         class="absolute top-full left-0 pt-2 w-56" style="display: none;">
                        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 flex flex-col overflow-hidden">
                            <a href="services.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Services</a>
                            <a href="locations.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Locations</a>
                        </div>
                    </div>
                </div>

                <!-- Resources -->
                <div class="relative group" x-data="{ open: false }" @mouseenter="open = true" @mouseleave="open = false">
                    <button class="flex items-center px-3 py-2 rounded-full hover:text-brandPurple hover:bg-brandPurple/5 transition-all outline-none">
                        Resources
                        <svg class="w-3 h-3 ml-1 transition-transform duration-200" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" 
                         x-transition:enter="transition ease-out duration-200"
                         x-transition:enter-start="opacity-0 translate-y-2"
                         x-transition:enter-end="opacity-100 translate-y-0"
                         x-transition:leave="transition ease-in duration-150"
                         x-transition:leave-start="opacity-100 translate-y-0"
                         x-transition:leave-end="opacity-0 translate-y-2"
                         class="absolute top-full right-0 pt-2 w-56" style="display: none;">
                        <div class="bg-white rounded-2xl shadow-xl border border-gray-100 py-2 flex flex-col overflow-hidden">
                            <a href="faq.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Help Center</a>
                            <a href="blog.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Blog</a>
                            <a href="contact.html" class="px-5 py-3 hover:bg-brandPurple/5 hover:text-brandPurple transition-colors normal-case tracking-normal text-[13px] font-semibold text-gray-700">Contact Us</a>
                        </div>
                    </div>
                </div>
                
                <div class="h-8 w-px bg-gray-100 mx-4"></div>
                
                <div class="flex items-center gap-4">
                    <a href="tel:8338235433" class="text-brandLightPurple flex items-center gap-2 group">
                        <span class="bg-brandLightPurple/10 p-2.5 rounded-full group-hover:bg-brandLightPurple group-hover:text-white transition-all duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </span>
                        <span class="font-black text-sm tracking-widest">(833) 823-5433</span>
                    </a>
                    <a href="contact.html" class="group relative flex items-center gap-2 bg-gradient-to-r from-brandPurple to-brandLightPurple text-white px-8 py-3.5 rounded-2xl font-black shadow-xl shadow-brandPurple/40 hover:shadow-2xl hover:shadow-brandLightPurple/50 transition-all duration-500 hover:-translate-y-1 active:scale-95 overflow-hidden">
                        <div class="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 -translate-x-full skew-x-12"></div>
                        <span class="relative z-10 tracking-wide">Enroll Now</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
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
              
             x-transition:enter="transition ease-out duration-500"
             x-transition:enter-start="opacity-0 translate-y-[-20px]"
             x-transition:enter-end="opacity-100 translate-y-0"
             x-transition:leave="transition ease-in duration-300"
             class="lg:hidden fixed inset-0 z-[100] bg-white pt-24 px-6 overflow-y-auto">
            
            <div class="flex flex-col space-y-1">
                <a href="index.html" @click="mobileMenu = false" class="text-xl md:text-2xl font-black text-gray-900 italic hover:text-brandPurple transition-colors py-3 border-b border-gray-50">Home</a>
                
                <!-- About Us Accordion -->
                <div x-data="{ open: false }" class="border-b border-gray-50">
                    <button @click="open = !open" class="w-full flex justify-between items-center py-3 text-xl md:text-2xl font-black text-gray-900 italic hover:text-brandPurple transition-colors">
                        <span>About Us</span>
                        <svg class="w-6 h-6 transition-transform duration-300 text-brandPurple" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" x-collapse x-cloak
                         class="flex flex-col space-y-3 pb-4 pl-4" style="display: none;">
                        <a href="about.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Our Approach</a>
                        <a href="careers.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Join Our Team</a>
                    </div>
                </div>

                <!-- Care & Services Accordion -->
                <div x-data="{ open: false }" class="border-b border-gray-50">
                    <button @click="open = !open" class="w-full flex justify-between items-center py-3 text-xl md:text-2xl font-black text-gray-900 italic hover:text-brandPurple transition-colors">
                        <span>Care & Services</span>
                        <svg class="w-6 h-6 transition-transform duration-300 text-brandPurple" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" x-collapse x-cloak
                         class="flex flex-col space-y-3 pb-4 pl-4" style="display: none;">
                        <a href="services.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Services</a>
                        <a href="locations.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Locations</a>
                    </div>
                </div>

                <!-- Resources Accordion -->
                <div x-data="{ open: false }" class="border-b border-gray-50">
                    <button @click="open = !open" class="w-full flex justify-between items-center py-3 text-xl md:text-2xl font-black text-gray-900 italic hover:text-brandPurple transition-colors">
                        <span>Resources</span>
                        <svg class="w-6 h-6 transition-transform duration-300 text-brandPurple" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div x-show="open" x-collapse x-cloak
                         class="flex flex-col space-y-3 pb-4 pl-4" style="display: none;">
                        <a href="faq.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Help Center</a>
                        <a href="blog.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Blog</a>
                        <a href="contact.html" @click="mobileMenu = false" class="text-xl font-bold text-gray-600 hover:text-brandPurple transition-colors">Contact Us</a>
                    </div>
                </div>
                
                <div class="pt-12 space-y-8">
                    <div class="bg-brandLightPurple/5 p-8 rounded-[2.5rem] flex items-center justify-between group">
                        <div>
                            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-brandLightPurple mb-2">Direct Support</p>
                            <a href="tel:8338235433" class="text-2xl font-black text-gray-900">(833) 823-5433</a>
                        </div>
                        <div class="bg-brandLightPurple text-white p-4 rounded-full shadow-lg shadow-brandLightPurple/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                    </div>
                    
                    <a href="contact.html" @click="mobileMenu = false" class="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-brandPurple to-brandLightPurple text-white py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-brandPurple/30 hover:shadow-brandLightPurple/50 active:scale-95 transition-all duration-500 overflow-hidden">
                        <div class="absolute inset-0 w-full h-full bg-white/20 group-hover:translate-x-full transition-transform duration-700 -translate-x-full skew-x-12"></div>
                        <span class="relative z-10 tracking-wide">Start Enrollment</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 relative z-10 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </nav>
    `;
            document.getElementById('header-placeholder').innerHTML = headerHTML;
    if (window.Alpine) {
        // Alpine 3: Force initialization if MutationObserver missed it
        
    }
});