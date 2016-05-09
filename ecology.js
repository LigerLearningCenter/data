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
//ecology sector
randomEvents[0].ecology.RE01 = new Events("More jobs in clothing industry", 0.02, -0.02, 0.02, 0, 0, 0, 0);
randomEvents[0].ecology.RE02 = new Events("Layoffs in clothing industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE03 = new Events("Export of clothes increases", 0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE04 = new Events("Export of clothes decreases", -0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE05 = new Events("International investment in clothing industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].ecology.RE06 = new Events("More jobs in timber production industry", 0.02, 0, 0.02, 0, 0.02, 0, 0);
randomEvents[0].ecology.RE07 = new Events("Layoffs in timber production industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE08 = new Events("Export of timber increases", 0.06, 0, 0, 0.02, 0, 0, 0);
randomEvents[0].ecology.RE09 = new Events("Export of timber decreases", -0.06, 0, 0, -0.02, 0, 0, 0);
randomEvents[0].ecology.RE010 = new Events("International investment in timber industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].ecology.RE011 = new Events("More jobs in residential construction industry", 0.02, -0.02, 0.02, 0, 0.02, 0, 0);
randomEvents[0].ecology.RE012 = new Events("Layoffs in residential construction industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE013 = new Events("Increased demand for residential housing", 0.06, 0, 0, 0.04, 0, 0, 0);
randomEvents[0].ecology.RE014 = new Events("Decreased demand for residential housing", -0.06, 0, 0, -0.04, 0, 0, 0);
randomEvents[0].ecology.RE015 = new Events("International investment in construction industry", 0.06, 0, 0.02, 0.02, 0, 0, 0);
randomEvents[0].ecology.RE016 = new Events("More jobs in mining industry", 0.02, -0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].ecology.RE017 = new Events("Layoffs in mining industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE018 = new Events("Demand for mineral resources rises", 0.06, 0, 0, 0.06, 0, 0, 0);
randomEvents[0].ecology.RE019 = new Events("Demand for mineral resources falls", -0.06, 0, 0, -0.06, 0, 0, 0);
randomEvents[0].ecology.RE020 = new Events("International investment in mineral resources industry", 0.06, 0, 0.02, 0.04, 0, 0, 0);
randomEvents[0].ecology.RE021 = new Events("New offshore oil fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].ecology.RE022 = new Events("New natural gas offshore fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].ecology.RE023 = new Events("New oil fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0, 06);
randomEvents[0].ecology.RE024 = new Events("New natural gas fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0.06);
randomEvents[0].ecology.RE025 = new Events("More jobs in agro industry", 0.02, 0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].ecology.RE026 = new Events("Layoffs in agro industry", -0.02, -0.02, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE027 = new Events("International investment in agro industry", 0.06, 0.06, 0.02, 0, 0, 0, 0);
randomEvents[0].ecology.RE028 = new Events("Export of agro industry products increases", -0.06, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE029 = new Events("Export of agro industry products decreases", 0.06, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].ecology.RE030 = new Events("New health and safety at work regulations", -0.06, -0.02, 0, 0, 0.02, 0, 0);

console.log(randomEvents[0]);
