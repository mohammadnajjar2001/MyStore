document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // منع إرسال النموذج

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('error-message');

    if (!fullName || !email || !message) {
        errorMessage.textContent = 'الرجاء ملء جميع الحقول';
    } else if (!validateEmail(email)) {
        errorMessage.textContent = 'الرجاء إدخال بريد إلكتروني صحيح';
    } else {
        errorMessage.textContent = '';
        alert('تم إرسال الرسالة بنجاح!');
        // هنا يمكنك إرسال البيانات إلى السيرفر أو أي عملية أخرى
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('toggleServices').addEventListener('click', function () {
    const servicesList = document.getElementById('servicesList');
    if (servicesList.style.display === 'none' || servicesList.style.display === '') {
        servicesList.style.display = 'block';
    } else {
        servicesList.style.display = 'none';
    }
});
window.onload = function () {
    const currentTime = new Date().getHours();
    let message;

    if (currentTime >=9 && currentTime <= 12) {
        message = 'صباح الخير!';
    } else if (currentTime < 18) {
        message = 'مساء الخير!';
    } else {
        message = 'المحل مغلق!';
    }

    alert(message + ' مرحبًا بك في موقعنا.');
};
function searchWord(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على الزر

    // الحصول على الكلمة المطلوبة من المستخدم
    const searchTerm = document.getElementById('searchInput').value.trim();

    // إذا لم يتم إدخال كلمة، أخرج من الوظيفة
    if (!searchTerm) return;

    // مسح أي تحديدات سابقة
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(el => {
        el.classList.remove('highlight');
    });

    // البحث عن الكلمة في جميع عناصر النص
    const bodyText = document.body.innerHTML;
    const searchRegex = new RegExp(searchTerm, 'gi'); // البحث بدون مراعاة حالة الأحرف

    if (bodyText.search(searchRegex) !== -1) {
        // تسليط الضوء على جميع التطابقات
        document.body.innerHTML = bodyText.replace(searchRegex, match => `<span class="highlight">${match}</span>`);

        // الذهاب إلى أول تطابق
        const firstMatch = document.querySelector('.highlight');
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    } else {
        alert("لم يتم العثور على الكلمة المطلوبة.");
    }
}