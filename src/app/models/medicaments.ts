import { Details } from "./Details";

export class Medicament{
    idMedicament:number;
    dosage:string;
    co:string;
    nom:string;
    presentation:string;
    nom_generique:string;
    labo:string;
    pays:string;
    amm:string;
    date_amm:Date;
    g_p:string;
    detail:Details
    constructor(idMedicament:number,
        dosage:string,
        co:string,
        nom:string,
        presentation:string,
        nom_generique:string,
        labo:string,
        pays:string,
        amm:string,
        date_amm:Date,
        g_p:string,
        detail:Details
        ){
        this.idMedicament=idMedicament;
        this.dosage = dosage;
        this.co = co;
        this.nom = nom;
        this.presentation = presentation;
        this.nom_generique=nom_generique;
        this.labo=labo;
        this.pays =pays;
        this.amm =amm;
        this.date_amm =date_amm;
        this.g_p=g_p;
        this.detail = detail
         

    }


}