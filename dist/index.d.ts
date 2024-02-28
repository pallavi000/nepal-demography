import { TDistrictName, TPalika, TProvinceName } from "./@types/index.js";
export declare class NepalDemography {
    private demography;
    getProvinces(): TProvinceName[];
    getDistricts(): TDistrictName[];
    getPalikaByDistrict(districtName: TDistrictName): TPalika;
    getMahanagarPalikaByDistrict(districtName: TDistrictName): string[] | never[];
    getUpaMahanagarPalikaByDistrict(districtName: TDistrictName): string[] | never[];
    getNagarPalikaByDistrict(districtName: TDistrictName): string[] | never[];
    getGaunPalikaByDistrict(districtName: TDistrictName): string[] | never[];
}
