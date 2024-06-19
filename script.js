function analyserPhrase(phrase) {
    let longueurPhrase = 0;
    let nombreMots = 0;
    let nombreVoyelles = 0;

    for (let i = 0; i < phrase.length; i++) {
        // Calcul de la longueur de la phrase
        if (phrase[i] !== ' ') {
            longueurPhrase++;
        }

        // Calcul du nombre de mots
        if (phrase[i] === ' ' || i === phrase.length - 1) {
            nombreMots++;
        }

        // Calcul du nombre de voyelles
        if ('aeiouAEIOU'.includes(phrase[i])) {
            nombreVoyelles++;
        }
    }

    // Affichage des résultats
    console.log("Longueur de la phrase : " + longueurPhrase);
    console.log("Nombre de mots : " + nombreMots);
    console.log("Nombre de voyelles : " + nombreVoyelles);
}
// Exemple d'utilisation
let phrase = "Bonjour, comment ça va ?";
analyserPhrase(phrase);