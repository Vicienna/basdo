console.log('Hehe boui :)')

function sendEmail() {
    const recipiecipient = 'contact@tagado.us.to';
    const subject = 'Taga Contact';
    const body = document.getElementById('mes').value;

    // Membangun URL `mailto:` dengan parameter yang diisi oleh pengguna
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Membuka komposisi email menggunakan fungsi window.location.href
    window.location.href = mailtoLink;
}
