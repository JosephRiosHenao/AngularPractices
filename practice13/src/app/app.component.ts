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

  public width:number  = 200;
  public height:number = 100;

  private cx:CanvasRenderingContext2D;

  private points:Array<any> = [];

  @HostListener("document:mousemove",["$event"])
  onMouseMove = (e:any) => {
    if (e.target.id == "canvasId" && this.drawStarted) {
      this.disableScroll();
      this.write(e);
    }
  }
  @HostListener("document:touchmove",["$event"])
  onTouchMove = (e:any) => {
    if (e.target.id == "canvasId" && this.drawStarted) {
      this.disableScroll();
      this.write(e);
    }
  }
  @HostListener("document:mousedown")
  onMouseDown() {
    this.drawStarted = true;
    this.cx.clearRect(0,0,this.width,this.height);
  }
  @HostListener("document:touchstart")
  onTouchStart() {
    this.drawStarted = true;
    this.cx.clearRect(0,0,this.width,this.height);
  }
  @HostListener("document:mouseup")
  onMouseUp() {
    this.drawStarted = false;
    while (this.points.length > 1){
      this.points.pop()
    }
    this.enableScroll();
  }
  @HostListener("document:touchend")
  onTouchEnd() {
    this.drawStarted = false;
    while (this.points.length > 1){
      this.points.pop()
    }
    this.enableScroll();
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
    let prevPos = { x:0, y:0 };
    if (res.changedTouches == undefined){
      prevPos = {
        x: res.clientX - rect.left,
        y: res.clientY - rect.top
      };
    }else {
      prevPos = {
        x: res.changedTouches[0].pageX - rect.left,
        y: res.changedTouches[0].clientY - rect.top
      };
    }
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


  disableScroll(){  
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
    window.scroll(x,y);
  }

  enableScroll(){  
    window.onscroll = null;
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
