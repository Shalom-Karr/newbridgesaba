document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-brandBeige pt-32 pb-16 relative overflow-hidden">
        <!-- Background Accents -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brandPurple/20 to-transparent"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 md:w-96 md:h-96 bg-brandPurple/5 rounded-full blur-3xl"></div>
        <div class="absolute -top-24 -right-24 w-64 h-64 md:w-96 md:h-96 bg-brandLightPurple/5 rounded-full blur-3xl"></div>

        <div class="max-w-7xl mx-auto px-6 relative z-10">
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mb-8 lg:mb-12 lg:mb-24">
                
                <!-- Brand Bio -->
                <div class="space-y-8">
                    <img src="images/new-bridges-aba-logo.png" alt="Logo" class="h-12 w-auto transition-all hover:scale-105">
                    <p class="text-gray-500 text-base leading-relaxed font-medium max-w-xs">
                        Providing the support, tools, and guidance necessary to help children with autism bridge the gap between their current skills and their highest potential. 
                    </p>
                    <!-- <div class="flex gap-4">
                            <div class="h-10 w-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brandPurple hover:bg-brandPurple hover:text-white transition-all cursor-pointer">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </div>
                            <div class="h-10 w-10 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-brandPurple hover:bg-brandPurple hover:text-white transition-all cursor-pointer">
                                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </div>
                        </div> -->
                </div>

                <!-- Navigation -->
                <div class="lg:pl-12">
                    <h4 class="font-black text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Explore</h4>
                    <ul class="space-y-4">
                        <li><a href="index.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Home</a></li>
                        <li><a href="about.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Our Approach</a></li>
                        <li><a href="services.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Our Services</a></li>
                        <li><a href="locations.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Locations</a></li>
                    </ul>
                </div>

                <!-- Resources -->
                <div class="lg:pl-12">
                    <h4 class="font-black text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Resources</h4>
                    <ul class="space-y-4">
                        <li><a href="faq.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Help Center</a></li>
                        <li><a href="careers.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Join Our Team</a></li>
                        <li><a href="blog.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Blog</a></li>
                        <li><a href="contact.html" class="text-gray-500 hover:text-brandPurple transition-colors font-bold text-sm flex items-center gap-2 group"><span class="w-1.5 h-1.5 rounded-full bg-brandPurple scale-0 group-hover:scale-100 transition-transform"></span> Contact Us</a></li>
                    </ul>
                </div>

                <!-- Contact Us -->
                <div>
                    <h4 class="font-black text-gray-900 mb-8 uppercase tracking-[0.2em] text-[11px]">Reach Out</h4>
                    <div class="space-y-8">
                        <div class="group">
                             <p class="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-2">Phone</p>
                             <a href="tel:8338235433" class="text-xl font-black text-gray-900 group-hover:text-brandPurple transition-colors duration-300">
                                (833) 823-5433
                             </a>
                        </div>
                        <div class="group">
                            <p class="text-[10px] text-brandPurple font-black uppercase tracking-[0.2em] mb-2">Email</p>
                            <a href="mailto:info@newbridgesaba.org" class="text-base font-black text-gray-900 group-hover:text-brandPurple transition-colors duration-300 break-all">
                                info@newbridgesaba.org
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Divider and Signature Badge -->
            <div class="h-px bg-gray-200 w-full my-12"></div>
            
            <style>
                .text-gold { color: #d4af37; }
                .border-gold\\/60 { border-color: rgba(212, 175, 55, 0.6); }
                .bg-gold\\/10 { background-color: rgba(212, 175, 55, 0.1); }
                .via-gold\\/10 { 
                    background-image: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.1), transparent); 
                }
            </style>

            <div class="flex justify-center items-center w-full mb-8 lg:mb-12">
                <a href="https://shalomkarr.pages.dev" target="_blank" class="group relative flex items-center justify-center gap-3 px-6 py-2.5 w-full max-w-[300px] md:w-auto bg-[#1a2c3b] hover:bg-[#233545] rounded-full border border-white/5 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_0_25px_rgba(212,175,55,0.15)] active:scale-95">
                    <span class="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 via-gold/10"></span>
                    <span class="relative text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 group-hover:text-gold transition-colors font-bold">Built By</span>
                    <div class="relative flex items-center gap-2 border-l border-white/10 pl-3">
                        <span class="font-serif font-bold text-slate-300 group-hover:text-white transition-colors text-base">Shalom Karr</span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-gold opacity-70 group-hover:opacity-100 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                    </div>
                </a>
            </div>

            <div class="flex flex-col md:flex-row justify-between items-center gap-8">
                <div class="text-center md:text-left text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black">
                    © 2026 New Bridges ABA. All rights reserved. <br> 
                    <span class="text-brandPurple italic mt-2 inline-block">Convenient. Consistent. Compassionate.</span>
                </div>
                
                <!-- Back to Top -->
                <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" class="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-brandPurple transition-colors">
                    Back to top
                    <span class="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-brandPurple group-hover:bg-brandPurple group-hover:text-white transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});

