
# Nepal Geography

A package to get Geo-Location of Nepal.


## Installation

```bash
npm i nepal-demography
```
## Usage/Examples

```javascript
const { NepalDemography } = require("nepal-demography");

const nepal = new NepalDemography();

console.log(nepal.getProvinces());
console.log(nepal.getDistricts());
console.log(nepal.getPalikaByDistrict("Nawalpur"));
```

