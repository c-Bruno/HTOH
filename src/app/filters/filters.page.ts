import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.page.html',
  styleUrls: ['./filters.page.scss'],
})
export class FiltersPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   customPopoverOptions: any = {
    header: 'Cor',
    subHeader: 'Selecione a cor que deseja',
    message: 'Only select your dominant hair color'
  };
}
