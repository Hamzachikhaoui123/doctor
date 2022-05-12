import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private addMedApi = "http://localhost:9093/medicament/save";
  private listMedApi="http://localhost:9093/medicament/find/all"
  private DeletMedApi="http://localhost:9093/medicament/delete/"
  private ListMedByIdApi="http://localhost:9093/medicament/find/"

  constructor(private http:HttpClient) { 
    
  }
  addMedicament(data :any){
    return this.http.post<any>(this.addMedApi, data);
  }
  getAllListMed(){
   return this.http.get<any>(this.listMedApi)
  }
  deleteUser(id: number) {
    return this.http.delete<any>(this.DeletMedApi + id)
  }
  getListById(id:number){
    return this.http.get<any>(this.ListMedByIdApi + id)

  }
}
