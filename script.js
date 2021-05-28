
//function expression biasa
// let panggil = function(nama){
// 	return `Hello, ${nama}`
// }
// console.log(panggil('Sabda'));


//function arrow function
// let panggil =(nama)=>{return `Hello,${nama}`}

// console.log(panggil('Sabda'));


//implisit return
// let panggil = nama=> `Haloha,${nama}`;

// console.log(panggil('Sabda'));



//masalah baru

// - menggunakan map biasa
 let mahasiswa = ['sabda setiawan','Rahmat Ardiansyah','Ibnumea Akbari'];

// let nama=mahasiswa.map(function(nama){
// 	return nama.length;
// });

// console.log(nama);

// - menggunakan arrow function

// let nama=mahasiswa.map(nama => nama.length);
// console.log(nama);

// -mencari nama dan jumlah karakter

let nama = mahasiswa.map(nama => ({nama:nama,jumlah_karakter:nama.length}));
// console.log(nama);
console.table(nama); //supaya terlihat menjadi table




























