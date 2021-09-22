import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-boxgrid',
  templateUrl: './boxgrid.component.html',
  styleUrls: ['./boxgrid.component.css'],
  providers: [MessageService]
})
export class ThirdtopComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
  }
  activeState: boolean[] = [true, false, false];
 

    onTabClose(event:any) {
        this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
    }
    
    onTabOpen(event:any) {
        this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
    }

    toggle(index: number) {
        this.activeState[index] = !this.activeState[index];
    }
  

}
