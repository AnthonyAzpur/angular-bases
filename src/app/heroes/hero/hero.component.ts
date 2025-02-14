import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name : string = 'ironman';
  public age : number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getherroDescription():string{
    return `${ this.name} - ${ this.age}`
  }

  changeHero():void {
    this.name = 'spiderman'
  }
  changeAge():void {
    this.age = 25;

  }


}
