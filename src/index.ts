import {
  TDistrictName,
  TPalika,
  TProvince,
  TProvinceName,
} from "./@types/index.js";
import * as nepalData from "./data/data.json";

export class NepalDemography {
  private demography: TProvince = nepalData as TProvince;

  getProvinces(): TProvinceName[] {
    return Object.keys(this.demography) as TProvinceName[];
  }

  getDistricts(): TDistrictName[] {
    const provinces = this.getProvinces();
    let districts: TDistrictName[] = [];
    provinces.forEach((province) => {
      districts.push(
        ...(Object.keys(this.demography?.[province]) as TDistrictName[])
      );
    });
    return districts;
  }

  getPalikaByDistrict(districtName: TDistrictName): TPalika {
    let palika;
    const provinces = this.getProvinces();
    for (const province of provinces) {
      palika = this.demography?.[province]?.[districtName];
      if (palika) {
        break;
      }
    }
    return palika as TPalika;
  }

  getMahanagarPalikaByDistrict(districtName: TDistrictName) {
    const palika = this.getPalikaByDistrict(districtName);
    return palika["Ma.Na.Pa."];
  }

  getUpaMahanagarPalikaByDistrict(districtName: TDistrictName) {
    const palika = this.getPalikaByDistrict(districtName);
    return palika["Upa.Ma."];
  }

  getNagarPalikaByDistrict(districtName: TDistrictName) {
    const palika = this.getPalikaByDistrict(districtName);
    return palika["Na.Pa."];
  }

  getGaunPalikaByDistrict(districtName: TDistrictName) {
    const palika = this.getPalikaByDistrict(districtName);
    return palika["Ga.Pa."];
  }
}
