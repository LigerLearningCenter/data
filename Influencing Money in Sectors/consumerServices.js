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