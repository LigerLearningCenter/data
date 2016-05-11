function Events(description, money, mood) {
    this.description = description;
    this.money = {
        industry: money[0],
        agriculture: money[1],
        consumerServices: money[2],
        infrastructure: money[3],
        education: money[4],
        tourism: money[5],
        ecology: money[6]
    }
    this.mood = {
        industry: mood[0],
        agriculture: mood[1],
        consumerServices: mood[2],
        infrastructure: mood[3],
        education: mood[4],
        tourism: mood[5],
        ecology: mood[6]
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


    //infrastructure sector
randomEvents[0].infrastructure.RIF01 = new Events("Local road completed", [0.02, 0.02, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].infrastructure.RIF02 = new Events("Local road completion delayed", [-0.02, -0.02, 0, -0.02, 0, 0, 0], [0,0,0,-1,0,0,0]);
randomEvents[0].infrastructure.RIF03 = new Events("Expressway completed", [0.04, 0.04, 0.02, 0.04, 0, 0.02, -0.02], [1,0,0,1,0,0,0]);
randomEvents[0].infrastructure.RIF04 = new Events("Expressway completion delayed", [-0.04, -0.04, -0.02, -0.04, 0, -0.02, 0],[-1,0,0,-1,0,0,0]);
randomEvents[0].infrastructure.RIF05 = new Events("Local railway construction completed", [0.04, 0.04, 0.02, 0.04, 0, 0.02, -0.02],[1,1,0,1,0,0,0]);
randomEvents[0].infrastructure.RIF06 = new Events("Local railway construction delayed", [-0.04, -0.04, -0.02, -0.04, 0, -0.02, 0],[-1,	-1,	0	,-1,	0,	0,	0,]);
randomEvents[0].infrastructure.RIF07 = new Events("Regional railway contruction completed", [0.06, 0.06, 0.06, 0.06, 0.02, 0.02, -0.02],[1,	1	,1,	1,	0,	0,	0]);
randomEvents[0].infrastructure.RIF08 = new Events("Regional railway construction delayed", [-0.06, -0.06, -0.06, -0.06, -0.02, -0.02, 0],[-1,	0,	0,	-1,	0,	0,	0]);
randomEvents[0].infrastructure.RIF09 = new Events("Regional airport completed", [0.04, 0 0.04, 0.06, 0, 0.04, -0.04],[1,	0,	1,	1,	0,	1,	0]);
randomEvents[0].infrastructure.RIF010 = new Events("Regional airport completion delayed", [-0.04, 0, -0.04, -0.06, 0, -0.04, 0],[-1,	0,	-1,	-1,	0,	-1,	0]);
randomEvents[0].infrastructure.RIF011 = new Events("National airport completed", [0.06, 0, 0.06, 0.06, 0.02, 0.06, -0.06),[1,	0,	1,	1,	0,	1,	-1]);
randomEvents[0].infrastructure.RIF012 = new Events("National airport completion delayed", [-0.06, 0, -0.06, -0.06, -0.02, -0.06, 0],[-1,	0,	-1,	-1,	0,	-1,	0]);
randomEvents[0].infrastructure.RIF013 = new Events("Local power plant commisioned", [0.04, 0.04, 0.02, 0.04, 0, 0.02, -0.04],[0,	0,	0,	0,	0,	0,	-1]);
randomEvents[0].infrastructure.RIF014 = new Events("Local power plant completion delayed", [-0.04, -0.04, -0.02, -0.04, 0, -0.02, 0],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF015 = new Events("Regional power plant commisioned", [0.06, 0.06, 0.04, 0.06, 0, 0.02, -0.06)],[1,	0,	0,	1,	0,	0,	-1];
randomEvents[0].infrastructure.RIF016 = new Events("Regional power plant completion delayed", [-0.06, -0.06, -0.04, -0.06, 0, -0.02, 0],[-1,	0,	0,	-1,	0,	0,	0]);
randomEvents[0].infrastructure.RIF017 = new Events("Local water purification plant commisioned", [0.04, 0.04, 0.02, 0.04, 0, 0.02, 0.02],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF018 = new Events("Local water purification plant delayed", [-0.04, -0.04, -0.02, -0.04, 0, -0.02, -0.02)],[0,	0,	0,	0,	0,	0,	0];
randomEvents[0].infrastructure.RIF019 = new Events("Regional water purification plant commisioned", [0.06, 0.04, 0.06, 0.06, 0, 0.04, 0.04],[0,	0,	0,	1,	0,	0,	1]);
randomEvents[0].infrastructure.RIF020 = new Events("Regional water purification plant delayed", [-0.06, -0.04, 0, -0.06, 0, -0.04, -0.04)],[0,	0,	0,	-1,	0,	0,	0];
randomEvents[0].infrastructure.RIF021 = new Events("Local sewage plant commisioned", [0, 0, 0, 0.04, 0, 0.02, 0.02],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF022 = new Events("Local sewage plant delayed", [0, 0, 0, -0.04, 0, -0.02, -0.02)],[0,	0,	0	,0,	0,	0,	0];
randomEvents[0].infrastructure.RIF023 = new Events("Regional sewage plant commisioned", [0, 0, 0, 0.06, 0, 0.06, 0.04)],[0,	0,	0,	0,	0,	0,	1];
randomEvents[0].infrastructure.RIF024 = new Events("Regional sewage plant delayed", [0, 0, 0, -0.06, 0, -0.06, -0.04)],[0,	0,	0,	0,	0,	0,	0];
randomEvents[0].infrastructure.RIF025 = new Events("Local hospital opens", [0, 0, 0.02, 0.04, 0.02, 0.04, 0],[0,	0,	0,	1,	0,	0,	0]);
randomEvents[0].infrastructure.RIF026 = new Events("Local hospital opening delayed", [0, 0, -0.02, -0.04, -0.02, -0.04, 0],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF027 = new Events("Local landmark completed", [0, 0, 0.02, 0.04, 0, 0.02, 0],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF028 = new Events("Local landmark delayed", [0, 0, -0.02, -0.04, 0, -0.02, 0],[0,	0,	0,	0,	0,	0,	0]);
randomEvents[0].infrastructure.RIF029 = new Events("Regional landmark completed", [0, 0, 0.04, 0.06, 0.04, 0.04, 0)],[0,	0,	0,	1,	0,	1,	0];
randomEvents[0].infrastructure.RIF030 = new Events("Regional landmark delayed", [0, 0, -0.04, -0.06, -0.04, -0.04, 0],[0,	0,	0,	-1,	0,	0,	0]);

console.log(randomEvents[0]);
