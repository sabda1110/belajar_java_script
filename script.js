alert("Selamat Datang"); //hanya menampilkan popup
var lagi = true;

while(lagi==true)
{
	var nama =prompt("Masukan Nama : "); //memberikan inputan
	alert("Nama : "+nama);
	lagi = confirm("Lagi ? "); //memberikan nilai true atau false
}
alert("Terima Kasih");