export class Details{
    idDetails:number;
    conditionnement_primaire:string;
    specification:string;
    dci:string;
    classement_veic:string;
    classe_therapeutique:string;
    Sous_classe:string;
    tableau:string;
    duree_conservation:string;
    indication:string;
    constructor(idDetails:number,
        conditionnement_primaire:string,
        specification:string,
        dci:string,
        classement_veic:string,
        classe_therapeutique:string,
        Sous_classe:string,
        tableau:string,
        duree_conservation:string,
        indication:string
        ){
         this.idDetails = idDetails;
         this.conditionnement_primaire = conditionnement_primaire;
         this.specification=specification;
         this.dci = dci;
         this.classement_veic = classement_veic;
         this.classe_therapeutique = classe_therapeutique;
         this.Sous_classe = Sous_classe;
         this.tableau =tableau;
         this.duree_conservation =duree_conservation;
         this.indication =indication
        }
 }