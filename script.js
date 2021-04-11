function menampilkan(a)
{
	if(a==0)
	{
		return 1;  //base case untuk memberhentikan rekursif
	}
	
	return a * menampilkan(a-1); //rekursif (memanggil diri nya lagi)
}


var hasil = menampilkan(5);

console.log(hasil)