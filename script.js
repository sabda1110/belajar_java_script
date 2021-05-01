// //1. Objek Literal

// let mahasiswa = {
//   nama : 'Sabda',
//   energi : 10,
//   makan:function(porsi)
//   {
//     this.energi += porsi;
//     console.log(`Helo ${this.nama} , Selamat Makan`);
//   }
// }


//2. Function Declarasi

// function Mahasiswa(nama,energi){
//   let mahasiswa={};
//   mahasiswa.nama=nama;
//   mahasiswa.energi=energi;
//   mahasiswa.makan = function(porsi)
//   {
//     this.energi+=porsi;
//     console.log(`Hello ${this.nama},Selamat Makan Bro`);
//   }
//   return mahasiswa;
// }

// Pemanggilan Objeck
// let sabda = Mahasiswa('Sabda',10);




//3. Cunstuctor Function

function Mahasiswa(nama,energi){
  this.nama=nama;
  this.energi=energi;
  this.makan = function(porsi)
  {
    this.energi+=porsi;
    console.log(`Hello ${this.nama},Selamat Makan Bro`);
  }
  
}

// Pemanggilan Objeck
let sabda = new Mahasiswa('Sabda',10);