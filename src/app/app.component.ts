import { Element } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { TabComponent} from './components/tab/tab.component';
import { Tab } from './Tab';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
  @Input() ids = ['Tab-01', 'Tab-02','Tab-03', 'Tab-04']
  @Input() contents = ['Esse é o texto do Primeiro Tab', 'Esse é o texto do Segundo Tab', 'Esse é o texto do Terceiro Tab', 'Esse é o texto do Quarto Tab']

}
