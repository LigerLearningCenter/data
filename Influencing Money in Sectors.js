function Events(description, industry, agriculture, consumerServices, infrastructure, education, tourism, ecology) {
    this.description = description;
    this.industry = industry;
    this.agriculture = agriculture;
    this.consumerServices = consumerServices;
    this.infrastructure = infrastructure;
    this.education = education;
    this.tourism = tourism;
    this.ecology = ecology;
}
var randomEvents = [{
    description: {},
    industry: {},
    agriculture: {},
    consumerServices: {},
    infrastructure: {},
    education: {},
    tourism: {},
    ecology: {}
}];
//industry sector
randomEvents[0].industry.RI01 = new Events("More jobs in clothing industry", 0.02, -0.02, 0.02, 0, 0, 0, 0);
randomEvents[0].industry.RI02 = new Events("Layoffs in clothing industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI03 = new Events("Export of clothes increases", 0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI04 = new Events("Export of clothes decreases", -0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI05 = new Events("International investment in clothing industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].industry.RI06 = new Events("More jobs in timber production industry", 0.02, 0, 0.02, 0, 0.02, 0, 0);
randomEvents[0].industry.RI07 = new Events("Layoffs in timber production industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI08 = new Events("Export of timber increases", 0.06, 0, 0, 0.02, 0, 0, 0);
randomEvents[0].industry.RI09 = new Events("Export of timber decreases", -0.06, 0, 0, -0.02, 0, 0, 0);
randomEvents[0].industry.RI010 = new Events("International investment in timber industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].industry.RI011 = new Events("More jobs in residential construction industry", 0.02, -0.02, 0.02, 0, 0.02, 0, 0);
randomEvents[0].industry.RI012 = new Events("Layoffs in residential construction industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI013 = new Events("Increased demand for residential housing", 0.06, 0, 0, 0.04, 0, 0, 0);
randomEvents[0].industry.RI014 = new Events("Decreased demand for residential housing", -0.06, 0, 0, -0.04, 0, 0, 0);
randomEvents[0].industry.RI015 = new Events("International investment in construction industry", 0.06, 0, 0.02, 0.02, 0, 0, 0);
randomEvents[0].industry.RI016 = new Events("More jobs in mining industry", 0.02, -0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].industry.RI017 = new Events("Layoffs in mining industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI018 = new Events("Demand for mineral resources rases", 0.06, 0, 0, 0.06, 0, 0, 0);
randomEvents[0].industry.RI019 = new Events("Demand for mineral resources falls", -0.06, 0, 0, -0.06, 0, 0, 0);
randomEvents[0].industry.RI020 = new Events("International investment in mineral resources industry", 0.06, 0, 0.02, 0.04, 0, 0, 0);
randomEvents[0].industry.RI021 = new Events("New offshore oil fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].industry.RI022 = new Events("New natural gas offshore fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].industry.RI023 = new Events("New oil fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0, 06);
randomEvents[0].industry.RI024 = new Events("New natural gas fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0.06);
randomEvents[0].industry.RI025 = new Events("More jobs in agro industry", 0.02, 0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].industry.RI026 = new Events("Layoffs in agro industry", -0.02, -0.02, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI027 = new Events("International investment in agro industry", 0.06, 0.06, 0.02, 0, 0, 0, 0);
randomEvents[0].industry.RI028 = new Events("Export of agro industry products increases", -0.06, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI029 = new Events("Export of agro industry products decreases", 0.06, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].industry.RI030 = new Events("New health and safety at work regulations", -0.06, -0.02, 0, 0, 0.02, 0, 0);
console.log(randomEvents[0]);//print out JSON format

//agriculture sector
randomEvents[0].agriculture.RA01 = new Events("Quality award for Cambodian race", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA02 = new Events("Increase in race export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agriculture.RA03 = new Events("Decrease in race export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agriculture.RA04 = new Events("International investment in Cambodian race fields", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA05 = new Events("Price of race rases", 0, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA06 = new Events("Price of race falls", 0, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA07 = new Events("Quality award for Cambodian rubber", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA08 = new Events("Increase in rubber export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agriculture.RA09 = new Events("Decrease in rubber export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agriculture.RA10 = new Events("International investment in Cambodian rubber", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA11 = new Events("Prace of rubber rases", -0.02, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA12 = new Events("Prace of rubber falls", 0.02, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA13 = new Events("Quality award for Cambodian cassava", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA14 = new Events("Increase in cassava export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agriculture.RA15 = new Events("Decrease in cassava export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agriculture.RA16 = new Events("International investment in Cambodian cassava", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA17 = new Events("Prace of cassava rases", 0, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA18 = new Events("Prace of cassava falls", 0, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA19 = new Events("Quality award for Cambodian pepper", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA20 = new Events("Increase in pepper export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agriculture.RA21 = new Events("Decrease in pepper export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agriculture.RA22 = new Events("Quality award for Cambodian palm sugar", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agriculture.RA23 = new Events("Increase in palm sugar export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agriculture.RA24 = new Events("Decrease in palm sugar export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agriculture.RA25 = new Events("Prace of palm sugar rases", -0.02, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA26 = new Events("Prace of palm sugar falls", 0.02, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agriculture.RA27 = new Events("Prace of fish rase", 0, 0.06, -0.06, 0, 0, 0, 0);
randomEvents[0].agriculture.RA28 = new Events("Prace of fish fall", 0, -0.06, 0.06, 0, 0, 0, 0);
randomEvents[0].agriculture.RA29 = new Events("Local goverment supports fisheraes", 0, 0.04, 0, 0, 0, 0, 0.02);
randomEvents[0].agriculture.RA30 = new Events("Goverment supports fisheraes", 0, 0.06, 0, 0, 0, 0, 0.04);
console.log(randomEvents[0]) //print out the JSON format

//consumerServices sector
randomEvents[0].consumerServices.RCS01 = new Events("More jobs in clothing industry", 0.02, -0.02, 0.02, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS02 = new Events("Layoffs in clothing industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS03 = new Events("Export of clothes increases", 0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS04 = new Events("Export of clothes decreases", -0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS05 = new Events("International investment in clothing industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS06 = new Events("More jobs in timber production industry", 0.02, 0, 0.02, 0, 0.02, 0, 0);
randomEvents[0].consumerServices.RCS07 = new Events("Layoffs in timber production industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS08 = new Events("Export of timber increases", 0.06, 0, 0, 0.02, 0, 0, 0);
randomEvents[0].consumerServices.RCS09 = new Events("Export of timber decreases", -0.06, 0, 0, -0.02, 0, 0, 0);
randomEvents[0].consumerServices.RCS10 = new Events("International investment in timber industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS11 = new Events("More jobs in residential construction industry", 0.02, -0.02, 0.02, 0, 0.02, 0, 0);
randomEvents[0].consumerServices.RCS12 = new Events("Layoffs in residential construction industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS13 = new Events("Increased demand for residential housing", 0.06, 0, 0, 0.04, 0, 0, 0);
randomEvents[0].consumerServices.RCS14 = new Events("Decreased demand for residential housing", -0.06, 0, 0, -0.04, 0, 0, 0);
randomEvents[0].consumerServices.RCS15 = new Events("International investment in construction industry", 0.06, 0, 0.02, 0.02, 0, 0, 0);
randomEvents[0].consumerServices.RCS16 = new Events("More jobs in mining industry", 0.02, -0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].consumerServices.RCS17 = new Events("Layoffs in mining industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS18 = new Events("Demand for mineral resources rises", 0.06, 0, 0, 0.06, 0, 0, 0);
randomEvents[0].consumerServices.RCS19 = new Events("Demand for mineral resources falls", -0.06, 0, 0, -0.06, 0, 0, 0);
randomEvents[0].consumerServices.RCS20 = new Events("International investment in mineral resources industry", 0.06, 0, 0.02, 0.04, 0, 0, 0);
randomEvents[0].consumerServices.RCS21 = new Events("New offshore oil fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].consumerServices.RCS22 = new Events("New natural gas offshore fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].consumerServices.RCS23 = new Events("New oil fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0.06);
randomEvents[0].consumerServices.RCS24 = new Events("New natural gas fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0.06);
randomEvents[0].consumerServices.RCS25 = new Events("More jobs in agro industry", 0.02, 0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].consumerServices.RCS26 = new Events("Layoffs in agro industry", -0.02, -0.02, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS27 = new Events("International investment in agro industry", 0.06, 0.06, 0.02, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS28 = new Events("Export of agro industry products increases", -0.06, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS29 = new Events("Export of agro industry products decreases", 0.06, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].consumerServices.RCS30 = new Events("New health and safety at work regulations", -0.06, -0.02, 0, 0, 0.02, 0, 0);
console.log(randomEvents[0]);//print out the JSON format
