import { Component, OnInit } from '@angular/core';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-thirdtopoptional',
  templateUrl: './thirdtopoptional.component.html',
  styleUrls: ['./thirdtopoptional.component.css'],
  providers: [MessageService]
})
export class ThirdtopoptionalComponent implements OnInit {

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
