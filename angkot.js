// buat daftar dari 10 angkot dimana ada 4 angkot yang tidak beroperasi
// var angkot = 1;
// var jmlAngkot = 10;
// var beroperasi = 4;
// while (angkot <= beroperasi){
//     console.log("Angkot no. " + angkot + " siap beroperasi");
//     angkot++;
// }
// for (angkot = beroperasi + 1; angkot <= jmlAngkot; angkot++){
//     console.log("Angkot no. " + angkot + " tidak beroperasi");
// }

// mengunakan if else
// var angkot = 1;
// var jmlAngkot = 10;
// var beroperasi = 8;

// for (angkot; angkot <= jmlAngkot; angkot++){
//     if (angkot <= beroperasi) {
//         console.log("Angkot No. " +angkot+ " siap beroperasi");
//     } else {
//         console.log("Angkot No. " +angkot+ " tidak dapat beroperasi");
//     }
// }

// tambahan ada satu angkot sedang lembur, buat menggunakan else if

// var jmlAngkot = 10;
// var beroperasi = 4;

// for(angkot = 1; angkot <= jmlAngkot; angkot++){
//     if(angkot <= beroperasi){
//         console.log("Angkot No. " + angkot + " sedang beroperasi");
//     } else if(angkot == 6 || angkot == 8){
//         console.log("Angkot No. " + angkot + " sedang lembur");
//     } else{
//         console.log("Angkot No. " + angkot + " sedang tidak beroperasi");
//     }
// }

// pake while
// var angkot = 1;
// var jmlAngkot = 10;
// var beroperasi = 5

// while (angkot <= jmlAngkot){
//     if (angkot <= beroperasi){
//         console.log("Angkot No. " +angkot+ " siap beroperasi");
//     } else if (angkot == 8 || angkot == 10){
//         console.log("Angkot No. " +angkot+ " sedang lembur");
//     } else {
//         console.log("Angkot No. " +angkot+ " sedang tidak dapat beroperasi");
//     }
//     angkot++;
// }

// pake while tapi ada pengecualian
var angkot = 1;
var jmlAngkot = 10;
var beroperasi = 5;

while (angkot <= jmlAngkot){
    if (angkot <= beroperasi && angkot != 5){
        console.log("Angkot " + angkot + " Gass");
    } else if (angkot == 6 || angkot == 8 || angkot == 5){
        console.log("Angkot " + angkot + " Lembur");
    } else {
        console.log("Angkot " + angkot +" Mogok");
    }
    angkot++;
}