import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Base46dataService } from './base64data.service';


import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

import jsPDF from 'jspdf';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';
import { DataService } from '../form-two/providers/data.service';


@Component({
  selector: 'app-form-two-template',
  templateUrl: './form-two-template.component.html',
  styleUrls: ['./form-two-template.component.scss'],
  providers: [DataService]

})
export class FormTwoTemplateComponent implements OnInit {

  public drawStarted:boolean = false;
  
  @ViewChild('canvasRef', { static:false }) canvasRef:any;

  public width:number  = 200;
  public height:number = 100;

  private cx!: CanvasRenderingContext2D;

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
  @HostListener("document:mousedown",["$event"])
  onMouseDown(e:any) {
    this.drawStarted = true;
    if (e.target.id == "canvasId"){
      this.cx.clearRect(0,0,this.width,this.height);
    }
  }
  @HostListener("document:touchstart",["$event"])
  onTouchStart(e:any) {
    this.drawStarted = true;
    if (e.target.id == "canvasId"){
      this.cx.clearRect(0,0,this.width,this.height);
    }
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
  
  private write(res:any):any {
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


  firm64img:string = "a";
  img64url:string = "";
  

  date:Date = new Date();
  constructor(public dataService:DataService, base64data:Base46dataService){
    this.img64url = base64data.img64url;
  }
  ngOnInit(): void {
  }


  @ViewChild('pdfTable') pdfTable: ElementRef | undefined;


  setImg(data:string):void{
    this.firm64img = data;
  }
  
  public async downloadAsPDF() {
    
    let data:string = "";

    this.firm64img = await htmlToImage.toJpeg(document.getElementById('canvasId')!, { quality: 1 })

    // console.log(this.firm64img);
    // htmlToImage.toJpeg(document.getElementById('canvasId'), { quality: 1 })
    // .then(function (dataUrl) {
    //   // var link = document.createElement('a');
    //   // link.download = 'my-image-name.jpeg';
    //   // link.href = dataUrl;
    //   // link.click();
    //   // console.log(dataUrl);
    //   console.log(dataUrl);
    //   data = dataUrl;
    //   console.log(data);
    // });
    // console.log(data);
    // this.createPDF(data);
    setTimeout(()=>{
      const doc = new jsPDF();
    
      const pdfTable = this.pdfTable!.nativeElement;
  
      var html = htmlToPdfmake(pdfTable.innerHTML);
  
      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).download("FS-SST-02_"+this.dataService.data.form.metadata.info.driverName);
      console.log("Finish")
    },1000);
  }

  createPDF(data:string){
    this.firm64img = data; 
  }
}
