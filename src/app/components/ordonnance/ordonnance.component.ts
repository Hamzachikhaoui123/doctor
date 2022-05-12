import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Medicament } from 'src/app/models/medicaments';
import { MedicamentService } from 'src/app/services/medicament.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.component.html',
  styleUrls: ['./ordonnance.component.css']
})
export class OrdonnanceComponent implements OnInit {
  MedicamentList:any[]=[]
  idMed!:Medicament
  listMedOb:Medicament[]=[]

  constructor(private medicamentService:MedicamentService,private rout:ActivatedRoute) { }
  filterText:string="";
  ngOnInit(): void {
    this.medicamentService.getAllListMed().subscribe(
      res=>{
        this.MedicamentList= res
      }
    )
  }
  addInOrdonnance(m: Medicament){
    
    
  //  this.medicamentService.getListById(i).subscribe(
  //    data=>{
      
  //      this.listMedOb = data
  //      console.log(this.listMedOb)
  //    }
  //  )
  this.listMedOb[this.listMedOb.length] = m;
  }
  delete(m:any){
    let index = this.listMedOb.indexOf(m);
    this.listMedOb.splice(index, 1);
  }
}
