function aikaLaskuri() {
    const nytHetki = new Date();
    const kuluvaVuosi = nytHetki.getFullYear();
    const jouluaatto = new Date(`December 24, ${kuluvaVuosi} 00:00:00`);

    if (nytHetki > jouluaatto) {
        jouluaatto.setFullYear(kuluvaVuosi + 1);
    }

    const kaikkiSekunnit = (jouluaatto - nytHetki) / 1000;
    const paivat = Math.floor(kaikkiSekunnit / 3600 / 24);
    const tunnit = Math.floor(kaikkiSekunnit / 3600) % 24;
    const minuutit = Math.floor(kaikkiSekunnit / 60) % 60;
    const sekunnit = Math.floor(kaikkiSekunnit) % 60;

    document.getElementById('yot').innerHTML = paivat + 1;
    document.getElementById('paivat').innerHTML = paivat;
    document.getElementById('tunnit').innerHTML = tunnit;
    document.getElementById('minuutit').innerHTML = minuutit;
    document.getElementById('sekunnit').innerHTML = sekunnit;

    if (yot == 1) {
        document.getElementById('yo').innerHTML = " yö"
    } else {
        document.getElementById('yo').innerHTML = " yötä"
    }

    if (paivat == 1) {
        document.getElementById('pva').innerHTML = " päivä"
    } else {
        document.getElementById('pva').innerHTML = " päivää"
    }

    if (tunnit == 1) {
        document.getElementById('tun').innerHTML = " tunti"
    } else {
        document.getElementById('tun').innerHTML = " tuntia"
    }

    if (minuutit == 1) {
        document.getElementById('min').innerHTML = " minuutti"
    } else {
        document.getElementById('min').innerHTML = " minuuttia"
    }

    if (sekunnit == 1) {
        document.getElementById('sek').innerHTML = " sekunti"
    } else {
        document.getElementById('sek').innerHTML = " sekuntia"
    }
}  

setInterval(aikaLaskuri, 1000); 
aikaLaskuri();
