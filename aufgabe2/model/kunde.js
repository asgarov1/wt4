module.exports = class Kunde {
  constructor(kundenID, firma, vorname, nachname, adresse, passnummer, geburtsdatum, email) {
    this._kundenID = kundenID;
    this._firma = firma;
    this._vorname = vorname;
    this._nachname = nachname;
    this._adresse = adresse;
    this._passnummer = passnummer;
    this._geburtsdatum = geburtsdatum;
    this._email = email;
  }

  get kundenID() {
    return this._kundenID;
  }

  get firma() {
    return this._firma;
  }

  get vorname() {
    return this._vorname;
  }

  get nachname() {
    return this._nachname;
  }

  get adresse() {
    return this._adresse;
  }

  get passnummer() {
    return this._passnummer;
  }

  get geburtsdatum() {
    return this._geburtsdatum;
  }

  get email() {
    return this._email;
  }
}
