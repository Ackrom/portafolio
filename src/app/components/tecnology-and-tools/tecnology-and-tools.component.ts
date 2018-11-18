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

  toolsOrTecnologies:ToolOrTecnology[];
  columns:ToolOrTecnology[][];
  active:boolean;

  ngOnInit() {
    this.active = true;
    if(localStorage.getItem('toolsOrTecnologies') !== null){
      this.toolsOrTecnologies = JSON.parse(localStorage.getItem('toolsOrTecnologies'));
      this.columns = this.toColumns(this.toolsOrTecnologies);
    }
    // this.curriculum.setDefaultTecnologyOrTool();
    this.curriculum.getToolsOrTecnologies()
    .subscribe((data)=>{
      // console.log("TecnologyAndToolsComponent");
      // console.log(data);
      this.toolsOrTecnologies = data;
      this.columns = this.toColumns(data);
      localStorage.setItem('toolsOrTecnologies',JSON.stringify(data));
    },
    (error)=>{console.log("TecnologyAndToolsComponent");console.log(error);});
  }

  toColumns(data:ToolOrTecnology[]):ToolOrTecnology[][]{
    let size = data.length;
    let output:ToolOrTecnology[][] = new Array(3);

    output[0] = new Array(0);
    for(let i=0;i<Math.round(size/3);i++){
      output[0].push(data[i]);
    }

    output[1] = new Array(0);
    for(let i=Math.round(size/3);i<Math.round(size/3)*2;i++){
      output[1].push(data[i]);
    }
    
    output[2] = new Array(0);
    for(let i=Math.round(size/3)*2;i<size;i++){
      output[2].push(data[i]);
    }

    return output;
  }

  changeTab(){
    this.active = !this.active;
  }

}
