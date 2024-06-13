import { Citta, Mezzo, Utente } from './classes.js';
import { statoVeicolo, tipoVeicolo } from './interfaces.js';
// Istanza mezzi
const bici1 = new Mezzo(tipoVeicolo.BICI, 'B1001', statoVeicolo.DISPONIBILE);
const bici2 = new Mezzo(tipoVeicolo.BICI, 'B1002', statoVeicolo.DISPONIBILE);
const monopattino1 = new Mezzo(tipoVeicolo.MONOPATTINO, 'M3001', statoVeicolo.DISPONIBILE);
const monopattino2 = new Mezzo(tipoVeicolo.MONOPATTINO, 'M3002', statoVeicolo.DISPONIBILE);
const scooter1 = new Mezzo(tipoVeicolo.SCOOTER, 'S2001', statoVeicolo.DISPONIBILE);
const scooter2 = new Mezzo(tipoVeicolo.SCOOTER, 'S2002', statoVeicolo.DISPONIBILE);
// Istanza utenti
const utente1 = new Utente('Lorenzo', 'Castelletti', 'mailprova@gmail.com', 'carta di credito');
const utente2 = new Utente('Andrea', 'Bianchi', 'qwerty@gmail.com', 'paypal');
// Istanza città
const citta1 = new Citta('Roma');
const citta2 = new Citta('Brescia');
// Aggiunta mezzi a città
citta1.aggiungiMezzo(bici1);
citta2.aggiungiMezzo(bici2);
citta1.aggiungiMezzo(monopattino1);
citta2.aggiungiMezzo(monopattino2);
citta1.aggiungiMezzo(scooter1);
citta2.aggiungiMezzo(scooter2);
// Prenotazione mezzi dagli utenti
utente1.prenotaMezzo(bici2);
utente1.prenotaMezzo(monopattino2);
utente1.prenotaMezzo(scooter2);
utente2.prenotaMezzo(bici1);
utente2.prenotaMezzo(monopattino2);
utente2.prenotaMezzo(scooter2);
