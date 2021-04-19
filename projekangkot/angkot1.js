function Angkot(supir,jalur,penumpang,kas)
{
	this.supir=supir;
	this.jalur=jalur;
	this.penumpang=penumpang;
	this.kas=kas;

	this.penumpnagNaik =function(namapenumpang)
	{
		this.penumpang.push(namapenumpang);
		return this.penumpang;
	}


	this.penumpnagTurun= function(namapenumpang,bayar)
	{
		if(this.penumpang.length == 0)
		{
			alert("Penumpang Kosong");
			return false;
		}
		for(var i =0 ; i<this.penumpang.length;i++ )
		{
			if(this.penumpang[i]==namapenumpang)
			{
				this.penumpang[i]=undefined ;
				this.kas+=bayar;
				return this.penumpang;
			}
		}
	}
}

var angkot1= new Angkot('Sabda',['Tangor','Anur'],[],0);
var angkot2=new Angkot('Sadar',['badak','harapan raya'],[],0);

 