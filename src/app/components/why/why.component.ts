import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
interface WhyItem {title:string;description:string;}
@Component({selector:'app-why',standalone:true,imports:[NgFor,RevealDirective],templateUrl:'./why.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class WhyComponent { protected readonly items:WhyItem[]=[
{title:'Engineering Expertise',description:'Strong capabilities across software, electronics, embedded systems and hardware.'},{title:'Practical Innovation',description:'Solutions focused on real-world problems and deployable outcomes.'},{title:'End-to-End Development',description:'From concept and architecture to prototype, development and production support.'},{title:'AI-Enabled Solutions',description:'Integrating artificial intelligence into modern software and engineering solutions.'},{title:'Reliable Engineering',description:'Systems designed with performance, efficiency and reliability in mind.'},{title:'Technology Partnership',description:'Working closely with clients to turn ideas into practical products.'}]; }
