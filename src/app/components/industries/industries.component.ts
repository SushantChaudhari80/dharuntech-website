import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
@Component({selector:'app-industries',standalone:true,imports:[NgFor,RevealDirective],templateUrl:'./industries.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class IndustriesComponent { protected readonly industries=['Geospatial Technology','Aerospace & Drone Technology','Industrial Automation','Electronics','Embedded Systems','AI & Data Intelligence','Software Technology','Product Development','Research & Innovation']; }
