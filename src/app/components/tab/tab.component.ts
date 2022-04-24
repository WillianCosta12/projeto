import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})


export class TabComponent implements OnInit {

  tabTexts = [
    'Esse é o texto do Tab-01',
    'Esse é o texto do Tab-02',
    'Esse é o texto do Tab-03',
    'Esse é o texto do Tab-04'
  ]

  @Input() state = 'Tab-01';

  @Input() onClick(id:string){
    this.state = id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
