document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
    <footer class="bg-gray-50 pt-24 pb-12 border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-2">
                    <img src="https://newbridgesaba.net/wp-content/uploads/2025/02/new-bridges-aba-logo.png" alt="Logo" class="h-10 mb-6">
                    <p class="text-gray-500 max-w-sm leading-relaxed">
                        Providing consistent, compassionate, and convenient ABA therapy for children with ASD across New Jersey and Ohio. We bridge the gap between school and home.
                    </p>
                </div>
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul class="space-y-4 text-gray-600 font-medium">
                        <li><a href="index.html" class="hover:text-brandPurple">Home</a></li>
                        <li><a href="services.html" class="hover:text-brandPurple">Our Services</a></li>
                        <li><a href="faq.html" class="hover:text-brandPurple">FAQs</a></li>
                        <li><a href="contact.html" class="hover:text-brandPurple">Contact Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-bold text-brandPurple mb-6 uppercase tracking-widest text-xs">States Served</h4>
                    <ul class="space-y-4 text-gray-600 font-medium">
                        <li>New Jersey (Statewide)</li>
                        <li>Ohio (Statewide)</li>
                        <li class="pt-4"><a href="tel:8338235433" class="text-brandBlue font-black">833-823-5433</a></li>
                    </ul>
                </div>
            </div>
            <div class="text-center pt-12 border-t border-gray-200 text-gray-400 text-sm italic">
                © 2025 New Bridges ABA. All rights reserved. | Convenient. Consistent. Compassionate.
            </div>
        </div>
    </footer>
    `;
    document.getElementById('footer-placeholder').innerHTML = footerHTML;
});
