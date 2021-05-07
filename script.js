//closuer
// function panggilan()
// {
//   let nama = 'Sabda'
//   function pendidikan()
//   {
//     console.log(`Helo ${nama}`);
//   }
//   pendidikan()
// }

// panggilan()


//1 . function factories

// function waktu(jam)
// {
//   return function nama(nama)
//   {
//     console.log(`Helo ${nama},sekarang waktu ${jam}`)
//   }
// }

// let selamatpagi=waktu('pagi');
// selamatpagi('Sabda');

//2. Private Metod
let add =  (function()
{
  let angka = 0;
  return function looping()
  {
    return ++angka;
  }
})(); //supaya dia tidak di simpan dalam nilai

console.log(add());
console.log(add());


