document.getElementById('musicCon1').addEventListener('click', function() {
    var audio = document.getElementById('music1');
    if (audio.paused) {
        audio.play();
        this.src = "https://i.pinimg.com/564x/31/68/bd/3168bd2436e327ecf3cbd6585d157fbb.jpg"; // Change image to pause button
    } else {
        audio.pause();
        this.src = "https://i.pinimg.com/564x/31/68/bd/3168bd2436e327ecf3cbd6585d157fbb.jpg"; // Change image to play button
    }
});

document.getElementById('musicCon2').addEventListener('click', function() {
    var audio = document.getElementById('music2');
    if (audio.paused) {
        audio.play();
        this.src = "https://i.pinimg.com/564x/bf/2b/99/bf2b9948017672254f33627181c02627.jpg"; // Change image to pause button
    } else {
        audio.pause();
        this.src = "https://i.pinimg.com/564x/bf/2b/99/bf2b9948017672254f33627181c02627.jpg"; // Change image to play button
    }
});

document.getElementById('musicCon3').addEventListener('click', function() {
    var audio = document.getElementById('music3');
    if (audio.paused) {
        audio.play();
        this.src = "https://i1.sndcdn.com/artworks-HnOyI1tto0vW7bnj-TnWpuw-t500x500.jpg"; // Change image to pause button
    } else {
        audio.pause();
        this.src = "https://i1.sndcdn.com/artworks-HnOyI1tto0vW7bnj-TnWpuw-t500x500.jpg"; // Change image to play button
    }
});

document.getElementById('musicCon4').addEventListener('click', function() {
    var audio = document.getElementById('music4');
    if (audio.paused) {
        audio.play();
        this.src = "https://i.pinimg.com/564x/c0/ea/7f/c0ea7ffd1de7150b673ae6793b7ad534.jpg"; // Change image to pause button
    } else {
        audio.pause();
        this.src = "https://i.pinimg.com/564x/c0/ea/7f/c0ea7ffd1de7150b673ae6793b7ad534.jpg"; // Change image to play button
    }
});

video.addEventListener("click", function Vid(){
    alert("Ini merupakan video music dari zayn yang berjudul\n I don't wanna live forever");
    alert("video lainnya di sambungkan Menggunakan link youtube yang dapat di tonton")
});

audio.addEventListener("click", function audio(){
    alert("Pada bagian ini dapat memutar lagu zayn yang berjudul\n I don't wanna live forever");
    alert("audio lainnya dapat di putar dengan mneg klik gambar yang dipilih")
});

Gambar.addEventListener("click", function Gambar(){
    alert("Pada bagian ini terdapat tiga tambar yang berbeda jika dilakukan pengecilan halaman");
});

About.addEventListener("click", function About(){
    alert("Bebas sih mau liat atau nggak, ga ada apa apa juga kok hehe");
});

function tampilmasuk(){
    var nama = prompt("Masukkan nama Anda:", "Zayn");
    if (nama != null) 
    {
        alert("Halo, " + nama + "! Selamat datang.");
        alert("Ini adalah Web terdiri dari HTML + CSS + JS")
        alert("Web ini bertujuan untuk menyelesaikan UCP Praktikum PDW")
        if (confirm("Apakah anda senang dengan web ini?")){
            alert("Terimakasihhh")
        }else{
            alert("Ywis gapapa deh!")
        }
        
    } 
    else 
    {
        confirm("Tolong Isi Nama Anda")
    }
}

