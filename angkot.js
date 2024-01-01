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
var angkot = 1;
var jmlAngkot = 10;
var beroperasi = 4;

for (angkot; angkot <= jmlAngkot; angkot++){
    if (angkot <= beroperasi){
        console.log("Angkot No. " +angkot+ " sedang beroperasi");
    } else if (angkot == 6) {
        console.log("Angkot No. " +angkot+ " sedang lembur");
    } else {
        console.log("Angkot No. " +angkot+ " sedang tidak beroparsi");
    }
}   
