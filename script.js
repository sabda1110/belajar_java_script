function volum(a,b) //memberikan function declaration
{
	var hasil,volum1,volum2; 
	volum1=a*a*a;
	volum2=b*b*b;
	hasil=volum1+volum2;
	return hasil;
}


alert("Hasil Penjumlahan 2 Kubus = "+volum(8,3));