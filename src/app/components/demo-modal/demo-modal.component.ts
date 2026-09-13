import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
@Component({selector:'app-demo-modal',standalone:true,imports:[NgIf],templateUrl:'./demo-modal.component.html',changeDetection:ChangeDetectionStrategy.OnPush})
export class DemoModalComponent {
 @Input() title='Product Demo Coming Soon';
 @Input() open=false;
 @Output() closed=new EventEmitter<void>();
 protected close():void{this.closed.emit();}
 protected backdropClick(event:MouseEvent):void{if(event.target===event.currentTarget)this.close();}
}
