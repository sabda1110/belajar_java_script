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


//2. OBject.create();
let makanan = {
  makan : function(porsi)
  {
    this.energi+=porsi;
    console.log(`Hello ${this.nama},Selamat Makan Bro`);
  },
  tidur:function(jam){
    this.energi-=jam;
    console.log(`Helo ${this.nama},Selamat Bermain Bro`);
  }
}


function Mahasiswa(nama,energi){
  let mahasiswa=Object.create(makanan);
  mahasiswa.nama=nama;
  mahasiswa.energi=energi;
  // mahasiswa.makan=makanan.makan; //Jadinya Tidak Perlu Membuaat Seperti Ini Untuk object.create()
  // mahasiswa.main=makanan.tidur; //Jadinya Tidak Perlu Membuaat Seperti Ini Untuk object.create()
  return mahasiswa;
}

//Pemanggilan Objeck
let sabda = Mahasiswa('Sabda',10);




//3. Cunstuctor Function

// function Mahasiswa(nama,energi){
//   this.nama=nama;
//   this.energi=energi;
//   this.makan = function(porsi)
//   {
//     this.energi+=porsi;
//     console.log(`Hello ${this.nama},Selamat Makan Bro`);
//   }
  
// }

// Pemanggilan Objeck
// let sabda = new Mahasiswa('Sabda',10);