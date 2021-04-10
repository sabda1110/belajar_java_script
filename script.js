function tambah() //memberikan function declaration
{
     var hasil=0;
     for(var i=0; i<arguments.length;i++) //argument.length berguna untuk menghitung jumlah argument yang masuk
     {
     	hasil += arguments[i];
     }
     return hasil;
}

var total =tambah(1,2,3);
console.log(total);



