import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';
export interface Product { number:string; title:string; highlight:string; description:string; tags:string[]; image:string; alt:string; label:string; status:string; gallery?:string; }
@Component({selector:'app-products',standalone:true,imports:[NgFor,NgIf,RevealDirective],templateUrl:'./products.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class ProductsComponent {
 @Output() demoRequested=new EventEmitter<string>();
 protected readonly products:Product[]=[
 {number:'PRODUCT 01',title:'Predictive Preventive &',highlight:'Ship Machine Monitoring',description:'Monitor ship machinery in real time, identify early signs of equipment failure and support preventive maintenance with clear, actionable operational data.',tags:['Live Monitoring','Predictive Alerts','Machine Health','Maintenance Insights'],image:'assets/images/product1.png',gallery:'assets/images/product11.png',alt:'Predictive preventive machine monitoring dashboard',label:'PREDICTIVE / MONITORING',status:'SYSTEM HEALTH'},
 {number:'PRODUCT 02',title:'AI-Based',highlight:'Satellite Image Analysis',description:'Turn complex satellite imagery into meaningful intelligence with AI-assisted analysis for pattern recognition, geographic assessment and faster decision-making.',tags:['Image Processing','Feature Detection','Pattern Recognition','Data Visualization'],image:'assets/images/product2.png',alt:'AI based satellite image analysis interface',label:'SATELLITE / ANALYSIS',status:'PROCESSING IMAGERY'},
 {number:'PRODUCT 03',title:'GCS -',highlight:'Mission Planner',description:'Plan, prepare and monitor missions from one focused ground-control workspace with route planning, waypoint management and operational visibility.',tags:['Mission Planning','Route / Waypoints','Map Visualization','Mission Monitoring'],image:'assets/images/product3.png',alt:'GCS Mission Planner interface',label:'GCS / MISSION PLANNER',status:'MISSION STATUS'}
 ];
 protected openDemo(product:Product):void{this.demoRequested.emit(`${product.title} ${product.highlight}`);}
}
