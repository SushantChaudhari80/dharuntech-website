import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DemoModalComponent } from '../demo-modal/demo-modal.component';
import { ExpertiseComponent } from '../expertise/expertise.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { IndustriesComponent } from '../industries/industries.component';
import { ProcessComponent } from '../process/process.component';
import { ProductsComponent } from '../products/products.component';
import { WhyComponent } from '../why/why.component';

@Component({selector:'app-home',standalone:true,imports:[HeaderComponent,HeroComponent,AboutComponent,ExpertiseComponent,ProductsComponent,ProcessComponent,WhyComponent,IndustriesComponent,ContactComponent,FooterComponent,DemoModalComponent],templateUrl:'./home.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class HomeComponent {
  protected demoOpen=false;
  protected demoTitle='Product Demo Coming Soon';
  protected openDemo(title:string):void { this.demoTitle=`${title} Demo Coming Soon`; this.demoOpen=true; }
  protected closeDemo():void { this.demoOpen=false; }
}
