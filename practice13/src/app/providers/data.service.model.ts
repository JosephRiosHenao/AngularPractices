export interface Data {
  form: Form;
}

export interface Form {
  metadata: Metadata;
  before:   Before;
  during:   After;
  after:    After;
  info: Info;
}

export interface After {
  form: { [key: string]: number };
  confirm: boolean;
}

export interface Before {
  contacts: Contact[];
  form:     { [key: string]: number };
  confirm: boolean;
}

export interface Contact {
  name: string;
  tel:  string;
}

export interface Metadata {
  enterprise:  string;
  city:        string;
  process:     string;
  dateInit:    Date;
  nameProject: string;
  namePerson:  string;
  timeInit:    Date;
  timeFinish:  Date;
  confirm: boolean;
}

export interface Info {
  observation:string;
  confirm: boolean;
}