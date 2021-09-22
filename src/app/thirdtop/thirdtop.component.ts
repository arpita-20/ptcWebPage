// import { NodeserviceService } from './../nodeservice.service';
import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {MessageService} from 'primeng/api';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 3.1, name: 'Functional requirements', weight: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of ', symbol: 'Author'},
   {position: 3.2, name: 'Aesthetic requirements ', weight: 'Blank slates', symbol: 'Shared'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 1, name: 'Hydrogen', weight: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden- Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of ', symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 'Blank slates', symbol: 'He'},
  {position: 3.3, name: 'Line requirements', weight: 'It is a long established fact that a reader will be distracted by the ', symbol: 'Reuse'},
  {position: 3.4, name: 'System requirements', weight: 'You don’t have to be a designer to appreciate good typography – just check out this student-made device that can detect and name fonts ', symbol: 'Author'},
  {position: 3.41, name: 'System versions', weight: 'It is a long established fact that a reader ', symbol: 'Shared'},
  {position: 3.42, name: 'Carbon', weight: 'ghjhgm', symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
 ];

@Component({
  selector: 'app-thirdtop',
  templateUrl: './thirdtop.component.html',
  styleUrls: ['./thirdtop.component.css'],
  providers: [MessageService]
  
})
export class ThirdtopComponent implements OnInit {
  // files1: TreeNode[]=[];
    
  // files2: TreeNode[]=[];
  nodes: TreeNode[]=[];
    
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  activeState: boolean[] = [true, false, false];
  
  rowGroupMetadata: any;

  constructor(private messageService: MessageService) {}

  // onTabClose(event:any) {
  //     this.messageService.add({severity:'info', summary:'Tab Closed', detail: 'Index: ' + event.index})
  // }
  
  // onTabOpen(event:any) {
  //     this.messageService.add({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
  // }

  // toggle(index: number) {
  //     this.activeState[index] = !this.activeState[index];
  // }

  ngOnInit(): void {
    // this.nodeService.getFiles().then(files => this.files1 = files);
    //     this.nodeService.getFiles().then(files => this.files2 = files);
    
    
   
  
  
//   expandAll(){
//     this.files2.forEach( node => {
//         this.expandRecursive(node, true);
//     } );
// }

// collapseAll(){
//     this.files2.forEach( node => {
//         this.expandRecursive(node, false);
//     } );
// }

// private expandRecursive(node:TreeNode, isExpand:boolean){
//     node.expanded = isExpand;
//     if (node.children){
//         node.children.forEach( childNode => {
//             this.expandRecursive(childNode, isExpand);
//         } );
//     }
// }
this.nodes = [
  {
      key: '1',
      label: '1. Requirements section',
      expandedIcon:"pi pi-minus-circle",collapsedIcon:"pi pi-plus-circle",
      children: [
          {key: '0-0', label: 'Handbook commencing the assembly from the', },
          // {key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url'},
          // {key: '0-2', label: 'Learn and Explore', data:'https://angular.io/guide/architecture', type: 'url'},
          // {key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url'}
      ]
  },
  {
      key: '2',
      label: '2. Audits section',expandedIcon:"pi pi-minus-circle",collapsedIcon:"pi pi-plus-circle",
      children: [
          {key: '1-0', label: 'Auditing will be a mandatory session occurring '},
          // {key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url'},
          // {key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url'},
          // {key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url'}
      ]
  },
  {
    key: '3',
    label: '3. 3. Requirements',expandedIcon:"pi pi-minus-circle",collapsedIcon:"pi pi-plus-circle",
    children: [
        {key: '1-0', label: 'This is the primary source of information for all'},
        {
          key:'3.1',
          label: '3.1 Functional requirements',
          children:[ {key:'3.1.0',label:'Contrary to popular belief, Lorem Ipsum is not'},
          {key:'3.2',label: '3.2 Aesthetic requirements',children:[ {key:'3.2.0',label:'Blank slates'},
          {key:'3.3',label: '3.3 Line requirements',children:[ {key:'3.3.0',label:'It is a long established fact that a reader will be'},
          {key:'3.4',label: '3.4 System requirements',children:[ {key:'3.3.0',label:'You don’t have to be a designer to appreciate '},
        
          {
            key: '3.4.1', label: '3.4.1 System Versions',
        children:[{key:'3.4.1.0',label:'It is a long established fact that a reader '}]
      },
        ]
        },

        
        ]
        },

        // {key: '1-1', label: 'User Input', data: 'https://angular.io/guide/user-input', type: 'url'},
        // {key: '1-2', label: 'Hooks', data: 'https://angular.io/guide/lifecycle-hooks', type: 'url'},
        // {key: '1-3', label: 'Attribute Directives', data: 'https://angular.io/guide/attribute-directives', type: 'url'}
    ],
},
  


],
},
          ],
        },

        {
          key: '4',
          label: '4. Finance details',
          expandedIcon:"pi pi-minus-circle",collapsedIcon:"pi pi-plus-circle",
          children: [
              {key: '4.1.0', label: 'Finance manager has assembled all the required', },
              // {key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url'},
              // {key: '0-2', label: 'Learn and Explore', data:'https://angular.io/guide/architecture', type: 'url'},
              // {key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url'}
          ]
      },
      {
        key: '5',
        label: '5. Annual conference',
        expandedIcon:"pi pi-minus-circle",collapsedIcon:"pi pi-plus-circle",
        children: [
            {key: '5.1.0', label: 'Meeting schedules for the new financial term will', },
            // {key: '0-1', label: 'Getting Started', data: 'https://angular.io/guide/setup-local', type: 'url'},
            // {key: '0-2', label: 'Learn and Explore', data:'https://angular.io/guide/architecture', type: 'url'},
            // {key: '0-3', label: 'Take a Look', data: 'https://angular.io/start', type: 'url'}
        ]
    },

      ];
    


}

}




  


