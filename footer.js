document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-2">
                    <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" alt="Logo" class="h-10 mb-6">
                    <p class="text-gray-500 max-w-sm leading-relaxed font-medium">
                        Providing consistent, compassionate, and convenient ABA therapy for children with ASD across New Jersey and Ohio. We bridge the gap between school and home.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul class="space-y-4 text-gray-600 font-bold">
                        <li><a href="index.html" class="hover:text-brandPurple transition">Home</a></li>
                        <li><a href="services.html" class="hover:text-brandPurple transition">Our Services</a></li>
                        <li><a href="faq.html" class="hover:text-brandPurple transition">FAQs</a></li>
                        <li><a href="contact.html" class="hover:text-brandPurple transition">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-xs">States Served</h4>
                    <ul class="space-y-4 text-gray-600 font-bold">
                        <li class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-brandPurple"></span> New Jersey
                        </li>
                        <li class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-brandBlue"></span> Ohio
                        </li>
                        <li class="pt-4">
                            <a href="tel:8338235433" class="text-brandBlue font-black text-lg">833-823-5433</a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Divider and Signature Badge -->
            <div class="h-px bg-gray-200 w-full my-12"></div>
            
            <style>
                /* Helper styles for the custom signature badge */
                .text-gold { color: #d4af37; }
                .border-gold\\/60 { border-color: rgba(212, 175, 55, 0.6); }
                .bg-gold\\/10 { background-color: rgba(212, 175, 55, 0.1); }
                .via-gold\\/10 { 
                    background-image: linear-gradient(to right, transparent, rgba(212, 175, 55, 0.1), transparent); 
                }
            </style>

            <div class="flex justify-center items-center w-full mb-12">
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

            <div class="text-center text-gray-400 text-sm italic font-medium">
                © 2025 New Bridges ABA. All rights reserved. | Convenient. Consistent. Compassionate.
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
