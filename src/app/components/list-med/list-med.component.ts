import { Component, OnInit} from '@angular/core';
import { MedicamentService } from 'src/app/services/medicament.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-med',
  templateUrl: './list-med.component.html',
  styleUrls: ['./list-med.component.css']
})

export class ListMedComponent implements OnInit {
  public MedicamentForm:FormGroup
  filterText:string="";
  MedicamentList:any[]=[]
  constructor( private fb:FormBuilder,private medicamentService:MedicamentService , private toastr:ToastrService,private router:Router) { 
    let formControls={
      co: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      nom: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]+"),
        Validators.minLength(2)
      ]),
      presentation: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+"),
      ]),
      nom_generique: new FormControl('', [
        Validators.required,

      ]),
      labo: new FormControl('', [
        Validators.required,

      ]),
      g_p: new FormControl('', [
        Validators.required,

      ]),
      pays: new FormControl('', [
        Validators.required,

      ]),
      amm: new FormControl('', [
        Validators.required,

      ]),
      date_amm: new FormControl('', [
        Validators.required,

      ]),
      dosage: new FormControl('', [
        Validators.required,

      ]),

    }
    this.MedicamentForm=this.fb.group(formControls)
  }
  get co() { return this.MedicamentForm.get("co")}
  get nom() { return this.MedicamentForm.get("nom")}
  get presentation() { return this.MedicamentForm.get("presentation")}
  get nom_generique() {return this.MedicamentForm.get("nom_generique")}
  get labo(){ return this.MedicamentForm.get("labo")}
  get g_p(){ return this.MedicamentForm.get("g_p")}
  get pays() { return this.MedicamentForm.get("pays")}
  get amm() { return this.MedicamentForm.get("amm")}
  get date_amm() { return this.MedicamentForm.get("date_amm")}
  get dosage(){ return this.MedicamentForm.get("dosage")}
 
  addMed(){
   let data = this.MedicamentForm.value;
   this.medicamentService.addMedicament(data).subscribe(
     res=>{
      this.toastr.success("success");

      this.router.navigate(['/ListMedicament']);
      
     }
   )
  }

  ngOnInit(): void {
    this.medicamentService.getAllListMed().subscribe(
      res=>{
        this.MedicamentList= res
      }
    )
  }
  delete(m: any) {
    let index = this.MedicamentList.indexOf(m);
    this.MedicamentList.splice(index, 1);
    this.medicamentService.deleteUser(m.idMedicament).subscribe(
      res => {
        this.toastr.error("delete");
        
      },
      err => {
        console.log(err);

      }
    )
  }
 

}
