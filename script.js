// Selector DOM

// 1.getElementById()
const judul = document.getElementById('judul');
judul.style.color='red';
judul.style.backgroundColor="black";


// 2. getElementsByTagName()
const paragraf = document.getElementsByTagName('p');
for(let i=0;i<paragraf.length;i++){
    paragraf[i].style.backgroundColor='lightblue';
}


//3. getElementsByClassName()
const paragraf1 = document.getElementsByClassName('p1')[0];
paragraf1.style.fontStyle='italic';
































