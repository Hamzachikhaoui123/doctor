import { Pipe, PipeTransform } from "@angular/core";
import { Medicament } from "./models/medicaments";
@Pipe({
    name:"filterSearch"
})
export class FilterPipe implements PipeTransform{
 transform(medicament:Medicament[],filterText:string) {
     if(medicament.length===0 || filterText ===""){
         return medicament;
     }
     else{
       return   medicament.filter((med)=>
         {
             return med.nom.toLowerCase()===filterText.toLowerCase()
            })
     }
 }
}