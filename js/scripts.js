const promptNomeUtente = prompt("Inseire nome:")
console.log("Il nome dell'utente è:", promptNomeUtente)

const promptCognomeUtente = prompt("Inseire Cognome:")
console.log("Il cognome dell'utente è:", promptCognomeUtente)

const promptColorePreferitoUtente = prompt("Inseire colore preferito:")
console.log("Il colore preferito dell'utente è:", promptColorePreferitoUtente)

console.log("La password dell'utente è:", promptNomeUtente + promptCognomeUtente + promptColorePreferitoUtente + "21")
alert(`La vostra password è: ${promptNomeUtente}${promptCognomeUtente}${promptColorePreferitoUtente}21`);
