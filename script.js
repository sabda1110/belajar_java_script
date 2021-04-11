function menampilkan(a)
{
	if(a==0)
	{
		return;  //base case untuk memberhentikan rekursif
	}
	console.log(a);
	return menampilkan(a-1); //rekursif (memanggil diri nya lagi)
}


menampilkan(10);