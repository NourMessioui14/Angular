import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from 'src/app/Core/Services/user.service';
import { user } from 'src/app/Models/us';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {

  SearchItem!:String;
  list: user[] = [ ]; 
  utilisateursFiltres: user[] = [];


 

  supprimerUtilisateur(index: number): void {
    if (index >= 0 && index < this.list.length) {
      this.list.splice(index, 1); // Supprimer l'utilisateur à l'index spécifié
    }
  }
  users = this.userService.list;

  constructor(private userService: UserService){
    
  }

  // ... autres méthodes


  
   
  ngOnInit() {
    this.list = this.userService.list;

 }
 

 allUsers: user[] = [
  
 ];


 calculateCount(): void {
  // Exemple d'utilisation de fetchNbInList
  const attribute = "accountCategory";
  const attributeVal = "Customer";

  const count = this.userService.fetchNbInList(this.list, attribute, attributeVal);
  console.log(`Nombre d'utilisateurs dont ${attribute} est égal à ${attributeVal} : ${count}`);
}

 


}
