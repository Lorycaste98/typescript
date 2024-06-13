import { statoVeicolo } from './interfaces.js';
export class Mezzo {
    constructor(veicolo, id, stato) {
        this.veicolo = veicolo;
        this.id = id;
        this.stato = stato;
    }
    assegnaUtente(utente) {
        if (this.stato === statoVeicolo.DISPONIBILE) {
            this.stato = statoVeicolo.OCCUPATO;
            console.log(`Il mezzo n° ${this.id} è stato assegnato all'utente ${utente.nome} ${utente.cognome}. Ha pagato con ${utente.pagamento}`);
        }
        else {
            console.log(`Il mezzo n° ${this.id} non è disponibile`);
        }
    }
}
export class Utente {
    constructor(nome, cognome, email, pagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.pagamento = pagamento;
    }
    prenotaMezzo(mezzo) {
        if (mezzo.stato === statoVeicolo.DISPONIBILE) {
            mezzo.assegnaUtente(this);
        }
        else {
            console.log(`Il mezzo n° ${mezzo.id} non è disponibile.`);
        }
    }
}
export class Citta {
    constructor(citta) {
        this.citta = citta;
        this.mezziDisponibili = [];
    }
    aggiungiMezzo(mezzo) {
        this.mezziDisponibili.push(mezzo);
        console.log(`Mezzo n° ${mezzo.id} aggiunto a ${this.citta}.`);
    }
}
