export interface Data {
  form: Form;
}

export interface Form {
  metadata: Metadata;
  before:   Before;
  during:   After;
  after:    After;
}

export interface After {
  form: { [key: string]: number };
}

export interface Before {
  contacts: Contact[];
  form:     { [key: string]: number };
}

export interface Contact {
  name: string;
  tel:  string;
}

export interface Metadata {
  enterprise:  string;
  city:        string;
  process:     string;
  dateInit:    string;
  nameProject: string;
  timeInit:    string;
  timeFinish:  string;
}
