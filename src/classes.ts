import { ICitta, IMezzo, IUtente, statoVeicolo, tipoVeicolo } from './interfaces.js';

export class Mezzo implements IMezzo {
  veicolo: tipoVeicolo;
  id: string;
  stato: statoVeicolo;

  constructor(veicolo: tipoVeicolo, id: string, stato: statoVeicolo) {
    this.veicolo = veicolo;
    this.id = id;
    this.stato = stato;
  }

  assegnaUtente(utente: IUtente): void {
    if (this.stato === statoVeicolo.DISPONIBILE) {
      this.stato = statoVeicolo.OCCUPATO;
      console.log(
        `Il mezzo n° ${this.id} è stato assegnato all'utente ${utente.nome} ${utente.cognome}. Ha pagato con ${utente.pagamento}`
      );
    } else {
      console.log(`Il mezzo n° ${this.id} non è disponibile`);
    }
  }
}

export class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  pagamento: string;

  constructor(nome: string, cognome: string, email: string, pagamento: string) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.pagamento = pagamento;
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.stato === statoVeicolo.DISPONIBILE) {
      mezzo.assegnaUtente(this);
    } else {
      console.log(`Il mezzo n° ${mezzo.id} non è disponibile.`);
    }
  }
}

export class Citta implements ICitta {
  citta: string;
  mezziDisponibili: IMezzo[];

  constructor(citta: string) {
    this.citta = citta;
    this.mezziDisponibili = [];
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    this.mezziDisponibili.push(mezzo);
    console.log(`Mezzo n° ${mezzo.id} aggiunto a ${this.citta}.`);
  }
}
