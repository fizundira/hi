// Tanggal dan waktu yang dituju (2 November 2023 jam 20:30)
var targetDate = new Date('2023-11-09T17:00:00Z');

var countdown = setInterval(function() {
    var currentDate = new Date();
    var timeDiff = targetDate - currentDate;

    if (timeDiff <= 0) {
        // Jika waktu sudah tiba, hentikan hitungan mundur dan buka website
        clearInterval(countdown);
        document.getElementById('countdown').textContent = 'Website telah dibuka!';
        window.location.href = 'https://fizundira.github.io/login/'; // Ganti dengan URL website yang sesuai
    } else {
        // Hitung waktu yang tersisa
        var hours = Math.floor(timeDiff / 3600000);
        var minutes = Math.floor((timeDiff % 3600000) / 60000);
        var seconds = Math.floor((timeDiff % 60000) / 1000);
        document.getElementById('countdown').textContent = hours + ' jam ' + minutes + ' menit ' + seconds + ' detik';
    }
}, 1000);