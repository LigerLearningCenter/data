function Events(industry, agriculture, consumerServices, infrastructure, education, tourism, ecology, description) {
    this.industry = industry;
    this.agriculture = agriculture;
    this.consumerServices = consumerServices;
    this.infrastructure = infrastructure;
    this.education = education;
    this.tourism = tourism;
    this.ecology = ecology;
    this.discription = description;
}
var randomEvents = [{industry:{},agriculture:{},consumerServices:{},infrastructure:{},education:{},tourism:{},ecology:{}}];

randomEvents[0].industry.RI01 = new Events(0.02, -0.02, 0.02, 0, 0, 0, 0, "More jobs in clothing industry");
randomEvents[0].industry.RI02 = new Events(-0.02, -0, 0, 0, 0, 0, 0, "Layoffs in clothing industry");
randomEvents[0].industry.RI03 = new Events(0.06, 0, 0, 0, 0, 0, 0, "Export of clothes increases");
