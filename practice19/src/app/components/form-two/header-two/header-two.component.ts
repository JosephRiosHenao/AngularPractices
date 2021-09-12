import { Component, OnInit } from '@angular/core';
import { DataService } from '../providers/data.service';

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss']
})
export class HeaderTwoComponent implements OnInit {

  city:string;
  campus:string;
  driverName:string;
  identification:string;
  position:string;
  timeInPosition:string;
  immediateSupervisor:string;
  
  brand:string;
  model:string;
  propertyCard:string;
  licensePlate:string;  
  cylinderCapacity:string;
  yearSOAT:string;
  yearRTMG:string;
  ownerName:string;

  constructor( private dataService:DataService ) {
    this.city =   dataService.data.form.metadata.info.city;
    this.campus = dataService.data.form.metadata.info.campus;
    this.driverName =     dataService.data.form.metadata.info.driverName;
    this.identification = dataService.data.form.metadata.info.identification;
    this.position =       dataService.data.form.metadata.info.position;
    this.timeInPosition = dataService.data.form.metadata.info.timeInPosition;
    this.immediateSupervisor = dataService.data.form.metadata.info.immediateSupervisor
    this.brand = dataService.data.form.metadata.infoVehicle.brand;
    this.model = dataService.data.form.metadata.infoVehicle.model;
    this.propertyCard =     dataService.data.form.metadata.infoVehicle.propertyCard;
    this.licensePlate =     dataService.data.form.metadata.infoVehicle.licensePlate;  
    this.cylinderCapacity = dataService.data.form.metadata.infoVehicle.cylinderCapacity;
    this.yearSOAT =  dataService.data.form.metadata.infoVehicle.yearSOAT;
    this.yearRTMG =  dataService.data.form.metadata.infoVehicle.yearRTMG;
    this.ownerName = dataService.data.form.metadata.infoVehicle.ownerName;

   }

  ngOnInit(): void {
  }


  submitData(){
    this.dataService.data.form.metadata.info.city = this.city 
    this.dataService.data.form.metadata.info.campus = this.campus
    this.dataService.data.form.metadata.info.driverName = this.driverName 
    this.dataService.data.form.metadata.info.identification = this.identification
    this.dataService.data.form.metadata.info.position = this.position  
    this.dataService.data.form.metadata.info.timeInPosition = this.timeInPosition
    this.dataService.data.form.metadata.info.immediateSupervisor = this.immediateSupervisor    
    this.dataService.data.form.metadata.infoVehicle.brand = this.brand
    this.dataService.data.form.metadata.infoVehicle.model = this.model
    this.dataService.data.form.metadata.infoVehicle.propertyCard = this.propertyCard
    this.dataService.data.form.metadata.infoVehicle.licensePlate = this.licensePlate   
    this.dataService.data.form.metadata.infoVehicle.cylinderCapacity = this.cylinderCapacity
    this.dataService.data.form.metadata.infoVehicle.yearSOAT = this.yearSOAT 
    this.dataService.data.form.metadata.infoVehicle.yearRTMG = this.yearRTMG 
    this.dataService.data.form.metadata.infoVehicle.ownerName = this.ownerName

    if (this.city.length > 0 && this.campus.length > 0 && this.driverName.length > 0 && this.identification.length > 0 && this.position.length > 0 && this.timeInPosition.length > 0 && this.immediateSupervisor.length > 0 && this.brand.length > 0 && this.model.length > 0 && this.propertyCard.length > 0 && this.licensePlate.length > 0 && this.cylinderCapacity.length > 0 && this.yearSOAT.length > 0 && this.yearRTMG.length > 0 && this.ownerName.length > 0){
      this.dataService.confirmHeader = true;
    }
    else{
      this.dataService.confirmHeader = false;
    }
  }
}
