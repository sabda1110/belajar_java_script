var penumpang=['Sabda',undefined,'Fahri'];

var tambahpenumpang = function(namapenumpang,penumpang)
{
	if(penumpang.length == 0)
	{
      penumpang.push(namapenumpang);
      return penumpang;
	}

	else
	{
		for(var i=0;i<penumpang.length;i++)
		{
			if(penumpang[i]==undefined)
			{
				penumpang[i]=namapenumpang;
				return penumpang;
			}
			else if (penumpang[i]==namapenumpang)
			{
				console.log(namapenumpang +'Nama tersebut telah tersedia di angkot');
				return penumpang;
			}
			else if (i == penumpang.length -1 )
			{
				penumpang.push(namapenumpang);
				return penumpang;
			}
		}
	}
}

var hapuspenumpang = function(namapenumpang,penumpang)
{
	if (penumpang.length ==0 )
	{
		console.log("Penumpang Kosong");
		return penumpang;
	}
	else
	{
		for(var i=0;i<penumpang.length;i++)
		{
			if(namapenumpang == penumpang[i])
			{
				penumpang[i] = undefined;
				return penumpang;
			}
			else if(i == penumpang.length -1)
			{
              console.log(namapenumpang + " Nama tersebut tidak tersedia");
              return penumpang;
			}
		}
	}
}