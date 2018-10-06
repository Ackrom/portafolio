import { Component, OnInit } from '@angular/core';
import { CurriculumService } from '../../services/curriculum.service';
import { ToolOrTecnology } from '../../models/ToolOrTecnology';

@Component({
  selector: 'app-tecnology-and-tools',
  templateUrl: './tecnology-and-tools.component.html',
  styleUrls: ['./tecnology-and-tools.component.css']
})
export class TecnologyAndToolsComponent implements OnInit {

  constructor(private curriculum:CurriculumService) { }

  private toolsOrTecnologies:ToolOrTecnology[];

  ngOnInit() {
    this.curriculum.getToolsOrTecnologies()
    .subscribe((data)=>{
      console.log("TecnologyAndToolsComponent");
      console.log(data);
      this.toolsOrTecnologies = data;
    },
    (error)=>{console.log("TecnologyAndToolsComponent");console.log(error);});
  }

}
