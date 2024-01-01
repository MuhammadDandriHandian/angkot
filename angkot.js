var angkot = 1;
var jmlAngkot = 10;
var beroperasi = 4;
while (angkot <= beroperasi){
    console.log("Angkot no. " + angkot + " siap beroperasi")
    angkot++;
}
for (angkot = beroperasi + 1; angkot <= jmlAngkot; angkot++){
    console.log("Angkot no. " + angkot + " tidak beroperasi")
}