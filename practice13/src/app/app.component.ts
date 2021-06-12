import { Component, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

import jsPDF from 'jspdf';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { DataService } from './providers/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent implements AfterViewInit {
  
  public drawStarted:boolean = false;
  
  @ViewChild('canvasRef', { static:false }) canvasRef:any;

  public width:number  = 150;
  public height:number = 150;

  private cx:CanvasRenderingContext2D;

  private points:Array<any> = [];

  @HostListener("document:mousemove",["$event"])
  onMouseMove = (e:any) => {
    if (e.target.id == "canvasId" && this.drawStarted) {
      this.write(e);
    }
  }
  @HostListener("document:touchmove",["$event"])
  onTouchMove = (e:any) => {
    if (e.target.id == "canvasId" && this.drawStarted) {
      this.write(e);
    }
  }
  @HostListener("document:mousedown")
  onMouseDown() {
    this.drawStarted = true;
  }
  @HostListener("document:touchstart")
  onTouchStart() {
    this.drawStarted = true;
  }
  @HostListener("document:mouseup")
  onMouseUp() {
    this.drawStarted = false;
    while (this.points.length > 1){
      this.points.pop()
    }
  }
  @HostListener("document:touchend")
  onTouchEnd() {
    this.drawStarted = false;
    while (this.points.length > 1){
      this.points.pop()
    }
  }

  ngAfterViewInit():void {
    this.render();
  }
  
  private render():any {
    const canvasElement = this.canvasRef.nativeElement;
    this.cx = canvasElement.getContext("2d");
    
    canvasElement.width = this.width;
    canvasElement.height = this.height;
    
    this.cx.lineWidth = 3;
    this.cx.lineCap = "round";
    this.cx.strokeStyle = "#000";
  }
  
  private write(res):any {
    const canvasElement:any = this.canvasRef.nativeElement;
    const rect = canvasElement.getBoundingClientRect();
    const prevPos = {
      x: res.clientX - rect.left,
      y: res.clientY - rect.top
    };
    
    this.writeSingle(prevPos);
  }

  private writeSingle = (prevPos: { x: number; y: number; }) => {
    this.points.push(prevPos);
    if (this.points.length > 3){
      const prevPosition = this.points[this.points.length - 1];
      const currentPosition = this.points[this.points.length - 2];
      this.drawOnCanvas(prevPosition, currentPosition);
      
    }
  }
  
  drawOnCanvas(prevPos: { x: number; y: number; }, currentPos:  { x: number; y: number; }) {
    if (!this.cx) {
      return;
    }
    this.cx.beginPath();
    if (prevPos) {
      this.cx.moveTo(prevPos.x, prevPos.y);
      this.cx.lineTo(currentPos.x, currentPos.y);
      this.cx.stroke();
    }
  }


  img64url:string = "";


  date:Date = new Date();
  constructor(public dataService:DataService){}


  @ViewChild('pdfTable') pdfTable: ElementRef;



  public downloadAsPDF() {

    console.log("A");
    // const doc = new jsPDF();

    // const pdfTable = this.pdfTable.nativeElement;

    // var html = htmlToPdfmake(pdfTable.innerHTML);

    // const documentDefinition = { content: html };
    // pdfMake.createPdf(documentDefinition).download("Informe");

  }
}
