// ambil referensi dari semua class yang dibutuhkan

const inputPassword = document.querySelector('.password-wrapper input');
const icnEye = document.querySelector('.password-wrapper i');
const reqList = document.querySelectorAll('.requirement-list li');

// berikan event listener kepada icon mata
icnEye.addEventListener( "click", () => {

    // buat toggle, cek tipe dari inputan, apakah password atau text
    inputPassword.type = inputPassword.type === "password" ? "text" : "password";

    // rubah nama class dari icon mata jika toggle password berupa teks dan sebaliknya
    toggleIcn = inputPassword.type === "password" ? "" : "-slash";
    icnEye.className = `fa-solid fa-eye${toggleIcn}`;

} );

// berikan event listener kepada inputan password, nanti ketika password sesuai dengan ketentuan
// ketentuan yg terkait akan terchecklist

const passRequirement = [
    { regex: /.{8,}/, index: 0 },
    { regex: /[0-9]/, index: 1 },
    { regex: /[^A-Za-z0-9]/, index: 2 },
];

inputPassword.addEventListener( "keyup", (e) => {

    passRequirement.forEach( item => {

        // mengecek apakah inputan sudah sama dengan yang diharapkan
        const valid = item.regex.test(e.target.value);
        const reqItem = reqList[item.index];

        // mengupdate nama class dan icon dari list syarat password
        if (valid) {

            // jika keadaan benar, maka ubah icon menjadi check dan tambahkan nama class valid
            reqItem.firstElementChild.className = "fa-solid fa-check";
            reqItem.classList.add("valid");
        } else {

            // jika tidak, maka samakan dengan yang di awal
            reqItem.firstElementChild.className = "fa-solid fa-circle";
            reqItem.classList.remove("valid");
        }
    } );
} );