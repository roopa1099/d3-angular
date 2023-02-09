import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as d3 from 'd3';
import * as d3Scale from 'd3';
import { Link, linkHorizontal, linkVertical } from 'd3';


export type Coords = {
  x: number;
  y: number;
};

@Component({
  selector: 'app-list-element-component',
  templateUrl: './list-element-component.component.html',
  styleUrls: ['./list-element-component.component.scss']
})
export class ListElementComponentComponent implements OnInit {

  start: Coords = { x: 0, y: 0 };
  end: Coords = { x: 0, y: 0 };
  fruits = ["Apple", "Banana", "Strawberry", "Grapes", "Watermelon", "Orange"];
  colors = ["Pink", "Green", "Red", "Yellow"];
  group = new FormGroup({
    fruit: new FormControl(''),
    color: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {

  }

  onFruitClick(id:string) {
   const coordinates= document.getElementById(id)?.getBoundingClientRect();

    this.start.x = (coordinates?.x || 0)-100;
    this.start.y = coordinates?.y || 0;

  }

  onClickColor(id:string) {
    const coordinates= document.getElementById(id)?.getBoundingClientRect();
    this.end.x = coordinates?.x || 0;
    this.end.y = (coordinates?.y || 0)+10;

    // const linkGen = d3.linkHorizontal();
    const singleLinkData = [{ source: this.start, target: this.end }];
    const d = linkHorizontal< any,
    { start: Coords; end: Coords },
    Coords>()
      .context(null)
      .source((d) => d.start)
      .target((d) => d.end)
      .x((d) =>  d.x)
      .y((d) => d.y)

     const path=d({start:this.start, end:this.end})


    const svg = d3.select("svg");
    const link = svg.append("path")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 1)
      .data(singleLinkData)
      .join("path")
      .attr("d",path)
      .attr("stroke","blue")
      .attr("strokeWidth","6")
      .attr("fill","none")
    // const link = svg
    //   .append("link")
    //   .attr('x1', this.start.x)
    //   .attr('y1', this.start.y)
    //   .attr('x2', this.end.x)
    //   .attr('y2', this.end.y)
    //   .attr('stroke', 'blue')
    //   .attr('stroke-width', 2);

    //   d3.select("#svg")
    // .data([singleLinkData])
    // .append("path")
    // .attr("d", linkGen)
    // .attr("fill", "none")
    // .attr("stroke", "black");

  }


  // link(start: Coords, end: Coords) {
  //   return linkHorizontal<any,
  //     { start: Coords; end: Coords },
  //     Coords>().context(null)
  //     .source(() => start)
  //     .target(() => end)
  //     .x((d) => d.x)
  //     .y((d) => d.y)
  // }



}
