function Events(description, money, mood) {
    this.description = description;
    this.money = {
    industry : money[0],
    agriculture: money[1],
    consumerServices: money[2],
    infrastructure : money[3],
    education : money[4],
    tourism : money[5],
    ecology : money[6]
    }
    this.mood = {
    industry : mood[0],
    agriculture: mood[1],
    consumerServices: mood[2],
    infrastructure : mood[3],
    education : mood[4],
    tourism : mood[5],
    ecology : mood[6]
    }

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
randomEvents[0].consumerServices.RCS01 = new Events("Electricity prices rise", [-0.06, -0.02, -0.04, -0.02, -0.02, 0, 0], [-1, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS02 = new Events("Electricity prices fall", [0.06, 0.02, 0.04, 0.02, 0.02, 0, 0], [1, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS03 = new Events("Gas prices rise", [-0.06, -0.02, -0.04, -0.06, 0, -0.02, 0.04], [-1, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS04 = new Events("Gas prices fall", [0.06, 0.02, 0.04, 0.06, 0, 0.02, -0.04], [1, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS05 = new Events("Prices of telecommunication services rise", [-0.02, 0, -0.04, 0, -0.02, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS06 = new Events("Prices of telecommunication services fall", [0.02, 0, 0.04, 0, 0.02, 0, 0], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS07 = new Events("Food and drinks prices rise", [0.02, 0.04, -0.06, 0, 0, -0.02, 0], [0, 1, -1, 0, 0, 0, 0]),
randomEvents[0].consumerServices.RCS08 = new Events("Food and drinks prices fall", [-0.02, -0.04, 0.06, 0, 0, 0.02, 0], [0, -1, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS09 = new Events("Prices of medication and medical services rise", [0, 0, -0.04, 0, 0, -0.02, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS10 = new Events("Prices of medication and medical services fall", [0, 0, 0.04, 0, 0, 0.02, 0], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS11 = new Events("Prices of clothes and shoes rise", [0.04, 0, -0.04, 0, 0, 0, 0], [1, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS12 = new Events("Prices of clothes and shoes fall", [-0.04, 0, 0.04, 0, 0, 0, 0], [-1, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS13 = new Events("Consumer electronics prices rise", [0, 0, -0.04, 0, -0.02, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS14 = new Events("Consumer electronics prices fall", [0, 0, 0.04, 0, 0.02, 0, 0], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS15 = new Events("Furniture prices rise", [0.02, 0, -0.02, 0, 0, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS16 = new Events("Furniture prices fall", [-0.02, 0, 0.02, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS17 = new Events("Prices of cosmetics and beauty services rise", [0, 0, -0.04, 0, 0, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS18 = new Events("Prices of cosmetics and beauty services fall", [0, 0, 0.04, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS19 = new Events("Prices of motorbikes and cars rise", [0, 0, -0.06, 0, 0, 0, 0.02], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS20 = new Events("Prices of motorbikes and cars fall", [0, 0, 0.06, 0, 0, 0, -0.02], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS21 = new Events("Entertainment prices rise", [0, 0, -0.04, 0, 0, -0.06, 0], [0, 0, -1, 0, 0, -1, 0])
randomEvents[0].consumerServices.RCS22 = new Events("Entertainment prices fall", [0, 0, 0.04, 0, 0, 0.06, 0], [0, 0, 1, 0, 0, 1, 0])
randomEvents[0].consumerServices.RCS23 = new Events("Housing prices rise", [-0.02, 0, -0.04, -0.02, 0, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS24 = new Events("Housing prices fall", [0.02, 0, 0.04, 0.02, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS25 = new Events("Transportation prices rise", [0, 0, -0.02, 0, 0, -0.02, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS26 = new Events("Transportation prices fall", [0, 0, 0.02, 0, 0, 0.02, 0], [0, 0, 0, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS27 = new Events("Unemployment rate rises", [0, 0, -0.06, 0, 0, 0, 0], [0, 0, -1, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS28 = new Events("Unemployment rate falls", [0, 0, 0.06, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0])
randomEvents[0].consumerServices.RCS29 = new Events("Average salary increases", [0, 0, 0.06, 0, 0.04, 0, 0], [0, 0, 1, 0, 1, 0, 0])
randomEvents[0].consumerServices.RCS30 = new Events("Average salary decreases", [0, 0, -0.06, 0, -0.04, 0, 0], [0, 0, -1, 0, 0, 0, 0])
