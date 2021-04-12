var nama =["Sabda","Bombom","Rahmad","ari","Fauzi"];

// for(var i=0;i<nama.length;i++)
// {
// 	console.log(nama[i]);
// }


//nama.push("Ari"); //memberikan nilai baru di ahkir array
//nama.pop(); //menghapus nilai array yang terahkir
//nama.unshift("ustad"); //memberikan nilai baru di depan array
//nama.shift(); //menghapus nilai array yang di awal
//namaarray.spliece(indexawal,elemet yang mau di hapus,element baru);
//nama.splice(2,0,"Fahri");

var baru =nama.slice(1,4);
console.log(nama.join(" - "));
console.log(baru.join(" - "));

