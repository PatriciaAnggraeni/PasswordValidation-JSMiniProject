// ambil referensi dari semua class yang dibutuhkan

const inputPassword = document.querySelector('.password-wrapper input');
const icnEye = document.querySelector('.password-wrapper i');

// berikan event listener kepada icon mata
icnEye.addEventListener( "click", () => {

    // buat toggle, cek tipe dari inputan, apakah password atau text
    inputPassword.type = inputPassword.type === "password" ? "text" : "password";

    // rubah nama class dari icon mata jika toggle password berupa teks dan sebaliknya
    toggleIcn = inputPassword.type === "password" ? "" : "-slash";
    icnEye.className = `fa-solid fa-eye${toggleIcn}`;

} );