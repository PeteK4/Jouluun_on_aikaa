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
}

setInterval(aikaLaskuri, 1000);
aikaLaskuri();
