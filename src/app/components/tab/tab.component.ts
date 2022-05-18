import { Component, OnInit, Input } from '@angular/core';
import { Tab } from 'src/app/Tab'

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})


export class TabComponent implements OnInit {

  @Input()
  ids: Array<String> = [];
  @Input()
  contents: Array<String> = [];

  @Input() state = 'Tab-01'; //Exportando do dado para um Pai

  @Input() onClick(id:string){
    this.state = id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
