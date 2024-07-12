export interface EPI {
  activity: string;
  epi: string;
  caNumber: string;
}

export interface MedicalCertificate {
  name: string;
  file: string;
}

export interface Employee {
  id: number;
  isActive: boolean;
  fullName: string;
  gender: string;
  cpf: string;
  rg: string;
  birthdate: string;
  position: string;
  hasEPI: boolean;
  epis: {
    list: EPI[];
  };
  medicalCertificates: MedicalCertificate[];
}
