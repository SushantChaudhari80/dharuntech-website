import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
interface ProcessItem { number:string; title:string; description:string; }
@Component({selector:'app-process',standalone:true,imports:[NgFor,RevealDirective],templateUrl:'./process.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class ProcessComponent { protected readonly items:ProcessItem[]=[
{number:'01',title:'Discover',description:'Understand the problem, requirements and desired outcome.'},{number:'02',title:'Design',description:'Define architecture, technology, hardware and software requirements.'},{number:'03',title:'Prototype',description:'Develop proof-of-concept systems and functional prototypes.'},{number:'04',title:'Engineer & Validate',description:'Build, integrate, test and refine the solution.'},{number:'05',title:'Deploy / Produce',description:'Prepare the final solution for implementation, deployment or production.'}]; }
