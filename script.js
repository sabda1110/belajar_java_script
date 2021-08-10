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


//4. querySelector
const p4 = document.querySelector('#b p');
p4.style.color="red";

const li = document.querySelector('#b ul li:nth-child(2)');
li.style.backgroundColor="blue";

//5. querySelectorAll()
const paragraf4 = document.querySelectorAll('p');
for(let i=0; i<paragraf4.length;i++){
    if(i==3){
        paragraf4[i].style.backgroundColor="green";
    }
}































