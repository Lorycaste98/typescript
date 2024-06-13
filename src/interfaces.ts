// ENUM TYPES

export enum tipoVeicolo {
  BICI = 'bici',
  SCOOTER = 'scooter',
  MONOPATTINO = 'monopattino',
}

export enum statoVeicolo {
  DISPONIBILE = 'disponibile',
  OCCUPATO = 'occupato',
}

// INTERFACCE

export interface IMezzo {
  veicolo: tipoVeicolo;
  id: string;
  stato: statoVeicolo;
  assegnaUtente(utente: IUtente): void;
}

export interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  pagamento: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

export interface ICitta {
  citta: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}
