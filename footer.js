document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                
                <!-- Brand Bio -->
                <div class="md:col-span-1">
                    <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" alt="Logo" class="h-10 mb-6 grayscale opacity-80">
                    <p class="text-gray-500 text-sm leading-relaxed font-medium">
                        Providing consistent, compassionate, and convenient ABA therapy for children with ASD across New Jersey and Ohio. 
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-[10px]">Navigation</h4>
                    <ul class="space-y-4 text-gray-600 font-bold text-sm">
                        <li><a href="index.html" class="hover:text-brandPurple transition">Home</a></li>
                        <li><a href="services.html" class="hover:text-brandPurple transition">Our Services</a></li>
                        <li><a href="faq.html" class="hover:text-brandPurple transition">FAQs</a></li>
                        <li><a href="contact.html" class="hover:text-brandPurple transition">Enrollment</a></li>
                    </ul>
                </div>

                <!-- Enrollment Support -->
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-[10px]">Enrollment Lines</h4>
                    <div class="space-y-6">
                        <div>
                            <p class="text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-1">NJ Enrollment</p>
                            <a href="tel:9739440903" class="text-lg font-black text-brandBlue hover:text-brandPurple transition tracking-tight">
                                (973) 944-0903
                            </a>
                        </div>
                        <div>
                            <p class="text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-1">OH Enrollment</p>
                            <a href="tel:9732067867" class="text-lg font-black text-brandOrange hover:text-brandPurple transition tracking-tight">
                                (973) 206-7867
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Email & General -->
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-[10px]">Contact Us</h4>
                    <div class="space-y-6">
                        <div>
                            <p class="text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-1">Email Us</p>
                            <a href="mailto:Contact@newbridgesaba.net" class="text-sm font-black text-gray-700 hover:text-brandPurple transition break-all">
                                Contact@newbridgesaba.net
                            </a>
                        </div>
                        <div>
                             <p class="text-[10px] text-gray-400 font-black uppercase tracking-tighter mb-1">General Inquiries</p>
                             <a href="tel:8338235433" class="text-sm font-black text-gray-700 hover:text-brandPurple transition">
                                833-823-5433
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

            <div class="text-center text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black">
                © 2026 New Bridges ABA. All rights reserved. <br> 
                <span class="text-brandPurple italic mt-2 inline-block">Convenient. Consistent. Compassionate.</span>
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
