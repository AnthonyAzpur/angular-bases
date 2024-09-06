import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames : string[] = ['spiderman','iroman','hulk', 'shehulk']
  public deletehero?:string;

  romevelasthero():void{
    this.deletehero=this.heroNames.pop();
  }


}
