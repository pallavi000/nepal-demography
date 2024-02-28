export type TPalika = {
  "Ma.Na.Pa.": string[] | never[];
  "Upa.Ma.": string[] | never[];
  "Na.Pa.": string[] | never[];
  "Ga.Pa.": string[] | never[];
};

export type TDistrictName =
  | "Taplejung"
  | "Panchthar"
  | "Ilam"
  | "Jhapa"
  | "Morang"
  | "Sunsari"
  | "Dhankuta"
  | "Terhathum"
  | "Sankhuwasabha"
  | "Bhojpur"
  | "Solukhumbu"
  | "Okhaldhunga"
  | "Khotang"
  | "Udayapur"
  | "Saptari"
  | "Siraha"
  | "Dhanusa"
  | "Mahottari"
  | "Sarlahi"
  | "Bara"
  | "Parsa"
  | "Rautahat"
  | "Sindhuli"
  | "Ramechhap"
  | "Dolakha"
  | "Sindhupalchok"
  | "Kavrepalanchok"
  | "Lalitpur"
  | "Bhaktapur"
  | "Kathmandu"
  | "Nuwakot"
  | "Rasuwa"
  | "Dhading"
  | "Makwanpur"
  | "Chitwan"
  | "Gorkha"
  | "Lamjung"
  | "Tanahun"
  | "Syangja"
  | "Kaski"
  | "Manang"
  | "Mustang"
  | "Myagdi"
  | "Nawalpur"
  | "Parbat"
  | "Baglung"
  | "Gulmi"
  | "Palpa"
  | "Parasi"
  | "Rupandehi"
  | "Kapilvastu"
  | "Arghakhanchi"
  | "Pyuthan"
  | "Rolpa"
  | "Eastern Rukum"
  | "Banke"
  | "Bardiya"
  | "Dang"
  | "Western Rukum"
  | "Salyan"
  | "Surkhet"
  | "Dailekh"
  | "Jajarkot"
  | "Dolpa"
  | "Jumla"
  | "Kalikot"
  | "Mugu"
  | "Humla"
  | "Bajura"
  | "Bajhang"
  | "Achham"
  | "Doti"
  | "Kailali"
  | "Kanchanpur"
  | "Dadeldhura"
  | "Baitadi"
  | "Darchula";

export type TDistrict = {
  [Key in TDistrictName]: TPalika;
};

type TProvinceName =
  | "Koshi"
  | "Madhesh"
  | "Bagmati"
  | "Gandaki"
  | "Lumbini"
  | "Karnali"
  | "Sudurpashchim";

export type TProvince = {
  [Key in TProvinceName]: TDistrict;
};
