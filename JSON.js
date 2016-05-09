function Events(description, industry, agriculture, consumerServices, infrastructure, education, tourism, ecology) {
    this.description = description;
    this.industry = industry;
    this.agr = agriculture;
    this.con = consumerServices;
    this.inf = infrastructure;
    this.edu = education;
    this.tou = tourism;
    this.eco = ecology;
}
var randomEvents = [{
    description: {},
    ind: {},
    agr: {},
    con: {},
    inf: {},
    edu: {},
    tou: {},
    eco: {}
}];
//industry sector
randomEvents[0].ind.RI01 = new Events("More jobs in clothing industry", 0.02, -0.02, 0.02, 0, 0, 0, 0);
randomEvents[0].ind.RI02 = new Events("Layoffs in clothing industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI03 = new Events("Export of clothes increases", 0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI04 = new Events("Export of clothes decreases", -0.06, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI05 = new Events("International investment in clothing industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].ind.RI06 = new Events("More jobs in timber production industry", 0.02, 0, 0.02, 0, 0.02, 0, 0);
randomEvents[0].ind.RI07 = new Events("Layoffs in timber production industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI08 = new Events("Export of timber increases", 0.06, 0, 0, 0.02, 0, 0, 0);
randomEvents[0].ind.RI09 = new Events("Export of timber decreases", -0.06, 0, 0, -0.02, 0, 0, 0);
randomEvents[0].ind.RI010 = new Events("International investment in timber industry", 0.06, 0, 0.02, 0, 0, 0, 0);
randomEvents[0].ind.RI011 = new Events("More jobs in residential construction industry", 0.02, -0.02, 0.02, 0, 0.02, 0, 0);
randomEvents[0].ind.RI012 = new Events("Layoffs in residential construction industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI013 = new Events("Increased demand for residential housing", 0.06, 0, 0, 0.04, 0, 0, 0);
randomEvents[0].ind.RI014 = new Events("Decreased demand for residential housing", -0.06, 0, 0, -0.04, 0, 0, 0);
randomEvents[0].ind.RI015 = new Events("International investment in construction industry", 0.06, 0, 0.02, 0.02, 0, 0, 0);
randomEvents[0].ind.RI016 = new Events("More jobs in mining industry", 0.02, -0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].ind.RI017 = new Events("Layoffs in mining industry", -0.02, 0, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI018 = new Events("Demand for mineral resources rises", 0.06, 0, 0, 0.06, 0, 0, 0);
randomEvents[0].ind.RI019 = new Events("Demand for mineral resources falls", -0.06, 0, 0, -0.06, 0, 0, 0);
randomEvents[0].ind.RI020 = new Events("International investment in mineral resources industry", 0.06, 0, 0.02, 0.04, 0, 0, 0);
randomEvents[0].ind.RI021 = new Events("New offshore oil fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].ind.RI022 = new Events("New natural gas offshore fields discovered", 0.04, 0, 0, 0, 0, 0, -0.04);
randomEvents[0].ind.RI023 = new Events("New oil fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0, 06);
randomEvents[0].ind.RI024 = new Events("New natural gas fields become operational", 0.06, 0, 0, 0.04, 0, -0.02, -0.06);
randomEvents[0].ind.RI025 = new Events("More jobs in agro industry", 0.02, 0.02, 0.02, 0, 0.04, 0, 0);
randomEvents[0].ind.RI026 = new Events("Layoffs in agro industry", -0.02, -0.02, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI027 = new Events("International investment in agro industry", 0.06, 0.06, 0.02, 0, 0, 0, 0);
randomEvents[0].ind.RI028 = new Events("Export of agro industry products increases", -0.06, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI029 = new Events("Export of agro industry products decreases", 0.06, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].ind.RI030 = new Events("New health and safety at work regulations", -0.06, -0.02, 0, 0, 0.02, 0, 0);

//aagriculture sector
randomEvents[0].agr.RI01 = new Events("Quality award for Cambodian rice", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI02 = new Events("Increase in rice export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agr.RI03 = new Events("Decrease in rice export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agr.RI04 = new Events("International investment in Cambodian rice fields", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI05 = new Events("Price of rice rises", 0, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI06 = new Events("Price of rice falls", 0, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI07 = new Events("Quality award for Cambodian rubber", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI08 = new Events("Increase in rubber export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agr.RI09 = new Events("Decrease in rubber export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agr.RI010 = new Events("International investment in Cambodian rubber", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI011 = new Events("Price of rubber rises", -0.02, 0.04, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI012 = new Events("Price of rubber falls", 0.02, -0.04, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI013 = new Events("Quality award for Cambodian cassava", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI014 = new Events("Increase in cassava export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agr.RI015 = new Events("Decrease in cassava export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agr.RI016 = new Events("International investment in Cambodian cassava", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI017 = new Events("Price of cassava rises", 0, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI018 = new Events("Price of cassava falls", 0, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI019 = new Events("Quality award for Cambodian pepper", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI020 = new Events("Increase in pepper export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agr.RI021 = new Events("Decrease in pepper export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agr.RI022 = new Events("Quality award for Cambodian palm sugar", 0, 0.02, 0, 0, 0, 0, 0);
randomEvents[0].agr.RI023 = new Events("Increase in palm sugar export", 0, 0.04, 0, 0.02, 0, 0, 0);
randomEvents[0].agr.RI024 = new Events("Decrease in palm sugar export", 0, -0.04, 0, -0.02, 0, 0, 0);
randomEvents[0].agr.RI025 = new Events("Price of palm sugar rises", -0.02, 0.04, -0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI026 = new Events("Price of palm sugar falls", 0.02, -0.04, 0.02, 0, 0, 0, 0);
randomEvents[0].agr.RI027 = new Events("Price of fish rise", 0, 0.06, -0.06, 0, 0, 0, 0);
randomEvents[0].agr.RI028 = new Events("Price of fish fall", 0, -0.06, 0.06, 0, 0, 0, 0);
randomEvents[0].agr.RI029 = new Events("Local goverment supports fisheries", 0, 0.04, 0, 0, 0, 0, 0.02);
randomEvents[0].agr.RI030 = new Events("Goverment supports fisheries", 0, 0.06, 0, 0, 0, 0, 0.04);
console.log(randomEvents[0]) //print out line 54
