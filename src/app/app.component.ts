import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name='sourav'
dogcount=1                                            
addDog(){
  this.dogcount +=1
}

}
