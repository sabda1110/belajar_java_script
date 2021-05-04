//Versi Prototype
// function mahasiswa(nama,energi)
// {
//   //let Mahasiswa=object.create(mahasiswa.prototype) yang terjadi di balik layar
//   this.nama=nama;
//   this.energi=energi;
// }
// mahasiswa.prototype.makan = function(porsi)
// {
//   this.energi+=porsi;
//   return `Helo ${this.nama},Selamat Makan`;
// }
// mahasiswa.prototype.main = function(jam)
// {
//   this.energi-=jam;
//   return`Helo ${this.nama},Selamat Bermain`;
// }

// let sabda = new mahasiswa('Sabda',10);


//Versi Class
class mahasiswa{
  constructor(nama,energi)
  {
    this.nama=nama;
    this.energi=energi;
  }
  makan(porsi)
  {
    this.energi+=porsi;
    return`Helo ${this.nama},Selamat Makan`;
  }
  main(jam)
  {
    this.energi-=jam;
    return`Helo ${this.nama},Selamat Bermain`;
  }
}

let siswa1 = new mahasiswa('sabda',10);