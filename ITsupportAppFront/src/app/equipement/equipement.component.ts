import { Component, OnInit } from '@angular/core';
import { Equipement } from '../model/equipement';
import { EquipementService } from '../Service/equipement.service';

@Component({
  selector: 'app-equipement-list',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementListComponent implements OnInit {

  equipements: Equipement[] = [];

  constructor(private equipementService: EquipementService) { }

  ngOnInit(): void {
    this.equipementService.getEquipements().subscribe(data => {
      this.equipements = data;
    });
  }
}
