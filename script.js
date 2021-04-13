var nama =["Sabda","Bombom","Rahmad","ari","Fauzi"];

// for(var i=0;i<nama.length;i++)
// {
// 	console.log(nama[i]);
// }

// 1.push
//nama.push("Ari"); //memberikan nilai baru di ahkir array

// 2.pop
//nama.pop(); //menghapus nilai array yang terahkir

// 3.unshift
//nama.unshift("ustad"); //memberikan nilai baru di depan array

// 4.shift
//nama.shift(); //menghapus nilai array yang di awal

// 5.spliece
//namaarray.spliece(indexawal,elemet yang mau di hapus,element baru);
//nama.splice(2,0,"Fahri");

// 6.slice
// var baru =nama.slice(1,4); //membuat array baru kegunaan slice
// console.log(nama.join(" - "));
// console.log(baru.join(" - "));

// 7.ForEach
// nama.forEach(function(e,i)
// {
// 	console.log("Nama Mahasiswa ke - "+(i+1) + "Adalah = "+e);
// });


// 8.map
// var angka=[1,2,3,4,5];
// var angka1=angka.map(function(e)
// {
//    return e*2;
// });
// console.log(angka1.join("-"));

// 9. sort
// var angka=[5,6,3,2,1,4,1,20,30];
// angka.sort(function(a,b)
// 	{
// 		return a-b;
// 	});
// console.log(angka.join("-"));

// 10.filter
 // var angka=[5,6,3,2,1,4,1,20,30];

 // var angka2=angka.filter(function(e)
 // {
 // 	return e >=5 ;
 // });
 // console.log(angka2.join('-'));

// 11.Find
var angka=[5,6,3,2,1,4,1,20,30];
var angka2=angka.find(function(e)
{
	return e>5;
});

console.log(angka2);
