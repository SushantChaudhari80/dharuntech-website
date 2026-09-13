import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({selector:'app-header',standalone:true,templateUrl:'./header.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class HeaderComponent { protected menuOpen=false; protected toggleMenu():void{this.menuOpen=!this.menuOpen;} protected closeMenu():void{this.menuOpen=false;} }
