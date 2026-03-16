document.addEventListener("DOMContentLoaded", () => {
    // Puoi cambiare qui il nome o recuperarlo da un database/form
    const nomeUtente = "Mario";
    const cognomeUtente = "Rossi";

    // Mostra il nome
    document.getElementById("user-name").textContent = `${nomeUtente} ${cognomeUtente}`;

    // Ottieni e formatta la data attuale
    const dataAttuale = new Date();
    const opzioni = { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const dataFormattata = dataAttuale.toLocaleDateString('it-IT', opzioni);

    // Inserisci la data nel rettangolo
    document.getElementById("access-date").textContent = "Data di accesso: " + dataFormattata;
});