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
    document.getElementById('otsikko').innerHTML = "Jouluaattoon on aikaa"

    if (paivat == 364) {
        document.getElementById('otsikko').innerHTML = "Nyt on jouluaatto"
        document.getElementById('hyvaaJoulua').innerHTML = "Hyvää ja Rauhallista Joulua!"
        document.getElementById('yot').style = "display: none"
        document.getElementById('yo').style = "display: none"
        document.getElementById('ptms').style = "display: none"
        document.getElementById('valiLause').style = "display: none"
    }

    if (paivat == 0) {
        document.getElementById('yo').innerHTML = " yö"
        document.getElementById('paivat').style = "display: none"
        document.getElementById('pva').style = "display: none"
    } else {
        document.getElementById('yo').innerHTML = " yötä"
    }

    if (paivat == 0) {
        document.getElementById('paivat').style = "display: none"
        document.getElementById('pva').style = "display: none"
    } else {
        document.getElementById('sekunnit').style = "display: span"
        document.getElementById('sek').style = "display: span"
    }

    if (paivat == 1) {
        document.getElementById('pva').innerHTML = " päivä"
    } else {
        document.getElementById('pva').innerHTML = " päivää"
    }

    if (tunnit == 0) {
        document.getElementById('tunnit').style = "display: none"
        document.getElementById('tun').style = "display: none"
    } else {
        document.getElementById('sekunnit').style = "display: span"
        document.getElementById('sek').style = "display: span"
    }

    if (tunnit == 1) {
        document.getElementById('tun').innerHTML = " tunti"
    } else {
        document.getElementById('tun').innerHTML = " tuntia"
    }

    if (minuutit == 0) {
        document.getElementById('minuutit').style = "display: none"
        document.getElementById('min').style = "display: none"
    } else {
        document.getElementById('minuutit').style = "display: span"
        document.getElementById('min').style = "display: span"
    }

    if (minuutit == 1) {
        document.getElementById('min').innerHTML = " minuutti"
    } else {
        document.getElementById('min').innerHTML = " minuuttia"
    }

    if (sekunnit == 0) {
        document.getElementById('sekunnit').style = "display: none"
        document.getElementById('sek').style = "display: none"
    } else {
        document.getElementById('sekunnit').style = "display: span"
        document.getElementById('sek').style = "display: span"
    }

    if (sekunnit == 1) {
        document.getElementById('sek').innerHTML = " sekunti"
    } else {
        document.getElementById('sek').innerText = " sekuntia"
    }
}  

setInterval(aikaLaskuri, 1000); 
aikaLaskuri();
