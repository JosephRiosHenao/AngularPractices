export interface Template {
  form: Form;
}

export interface Form {
  metadata: Metadata;
}

export interface Metadata {
  info:        Info;
  infoVehicle: InfoVehicle;
  activities:  Activities;
}

export interface Activities {
  month:  string;
  week1:  Week;
  week2:  Week;
  week3:  Week;
  week4:  Week;
  footer: Footer;
}

export interface Footer {
  inspector:    string;
  supervisor:   string;
  observations: Observation[];
}

export interface Observation {
  date:        string;
  observation: string;
}

export interface Week {
  "1":          number;
  "2":          number;
  "3":          number;
  "4":          number;
  "5":          number;
  "6":          number;
  "7":          number;
  "8":          number;
  "9":          number;
  "10":         number;
  "11":         number;
  "12":         number;
  "13":         number;
  "14":         number;
  "15":         number;
  "16":         number;
  "17":         number;
  "18":         number;
  "19":         number;
  "20":         number;
  "21":         number;
  "22":         number;
  observations: string;
}

export interface Info {
  city:                string;
  campus:              string;
  driverName:          string;
  identification:      string;
  position:            string;
  timeInPosition:      string;
  immediateSupervisor: string;
}

export interface InfoVehicle {
  brand:            string;
  model:            string;
  propertyCard:     string;
  licensePlate:     string;
  cylinderCapacity: string;
  yearSOAT:         string;
  yearRTMG:         string;
  ownerName:        string;
}
