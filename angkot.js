 // var angkot = 1;
    // while(angkot <= 10) {
    //     console.log("Angkot No." + angkot + " beroperasi dengan baik.");
    //     angkot++;
    // }

    // cara yg lebih benar dengan while
    // var angkot = 1;
    // var jmlAngkot = 5;
    // while(angkot <= jmlAngkot) {
    //     console.log("Angkot No." + angkot + " beroperasi dengan baik.");
    //     angkot++;
    // }

    // pake for
    // for(var angkot=1; angkot <= 10; angkot++){
    //     console.log("Angkot No. " + angkot + " siap beroperasi")
    // }

    // Studi kasus ada 4 angkot tidak bisa beroperasi (pake while dan for)
    var angkot = 1;
    var jmlAngkot = 10;
    var beroperasi = 3;
    while (angkot <= beroperasi) {
        console.log("Angkot No. " + angkot + " siap beroperasi")
        angkot++;
    }
    for (angkot = beroperasi + 1; angkot <= jmlAngkot; angkot++){
        console.log("Angkot No. " + angkot + " tidak dapat beroperasi")
    }
