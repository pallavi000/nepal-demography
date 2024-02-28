"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NepalDemography = void 0;
const data_json_1 = __importDefault(require("./data/data.json"));
class NepalDemography {
    constructor() {
        this.demography = data_json_1.default;
    }
    getProvinces() {
        return Object.keys(this.demography);
    }
    getDistricts() {
        const provinces = this.getProvinces();
        let districts = [];
        provinces.forEach((province) => {
            var _a;
            districts.push(...Object.keys((_a = this.demography) === null || _a === void 0 ? void 0 : _a[province]));
        });
        return districts;
    }
    getPalikaByDistrict(districtName) {
        var _a, _b;
        let palika;
        const provinces = this.getProvinces();
        for (const province of provinces) {
            palika = (_b = (_a = this.demography) === null || _a === void 0 ? void 0 : _a[province]) === null || _b === void 0 ? void 0 : _b[districtName];
            if (palika) {
                break;
            }
        }
        return palika;
    }
    getMahanagarPalikaByDistrict(districtName) {
        const palika = this.getPalikaByDistrict(districtName);
        return palika["Ma.Na.Pa."];
    }
    getUpaMahanagarPalikaByDistrict(districtName) {
        const palika = this.getPalikaByDistrict(districtName);
        return palika["Upa.Ma."];
    }
    getNagarPalikaByDistrict(districtName) {
        const palika = this.getPalikaByDistrict(districtName);
        return palika["Na.Pa."];
    }
    getGaunPalikaByDistrict(districtName) {
        const palika = this.getPalikaByDistrict(districtName);
        return palika["Ga.Pa."];
    }
}
exports.NepalDemography = NepalDemography;
const nepal = new NepalDemography();
console.log(nepal.getPalikaByDistrict("Achham"));
