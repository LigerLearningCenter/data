
function Events(description,money,mood) {
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
//agriculture sector
randomEvents[0].agriculture.RA01 = new Events("Quality award for Cambodian race"[ 0, 0.02, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA02 = new Events("Increase in race export"[ 0, 0.04, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA03 = new Events("Decrease in race export"[ 0, -0.04, 0, -0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA04 = new Events("International investment in Cambodian race fields"[ 0, 0.02, 0, 0, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA05 = new Events("Price of race rases"[ 0, 0.04, -0.02, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA06 = new Events("Price of race falls"[ 0, -0.04, 0.02, 0, 0, 0, 0],[0,-1,0,0,0,0,0]);
randomEvents[0].agriculture.RA07 = new Events("Quality award for Cambodian rubber"[ 0, 0.02, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA08 = new Events("Increase in rubber export"[ 0, 0.04, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA09 = new Events("Decrease in rubber export"[ 0, -0.04, 0, -0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA10 = new Events("International investment in Cambodian rubber"[ 0, 0.02, 0, 0, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA11 = new Events("Prace of rubber rases"[ -0.02, 0.04, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA12 = new Events("Prace of rubber falls"[ 0.02, -0.04, 0, 0, 0, 0, 0],[0,-1,0,0,0,0,0]);
randomEvents[0].agriculture.RA13 = new Events("Quality award for Cambodian cassava"[ 0, 0.02, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA14 = new Events("Increase in cassava export"[ 0, 0.04, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA15 = new Events("Decrease in cassava export"[ 0, -0.04, 0, -0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA16 = new Events("International investment in Cambodian cassava"[ 0, 0.02, 0, 0, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA17 = new Events("Prace of cassava rases"[ 0, 0.04, -0.02, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA18 = new Events("Prace of cassava falls"[ 0, -0.04, 0.02, 0, 0, 0, 0],[0,-1,0,0,0,0,0]);
randomEvents[0].agriculture.RA19 = new Events("Quality award for Cambodian pepper"[ 0, 0.02, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA20 = new Events("Increase in pepper export"[ 0, 0.04, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA21 = new Events("Decrease in pepper export"[ 0, -0.04, 0, -0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA22 = new Events("Quality award for Cambodian palm sugar"[ 0, 0.02, 0, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA23 = new Events("Increase in palm sugar export"[ 0, 0.04, 0, 0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA24 = new Events("Decrease in palm sugar export"[ 0, -0.04, 0, -0.02, 0, 0, 0],[0,0,0,0,0,0,0]);
randomEvents[0].agriculture.RA25 = new Events("Prace of palm sugar rases"[ -0.02, 0.04, -0.02, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA26 = new Events("Prace of palm sugar falls"[ 0.02, -0.04, 0.02, 0, 0, 0, 0],[0,-1,0,0,0,0,0]);
randomEvents[0].agriculture.RA27 = new Events("Prace of fish rase"[ 0, 0.06, -0.06, 0, 0, 0, 0],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA28 = new Events("Prace of fish fall"[ 0, -0.06, 0.06, 0, 0, 0, 0],[0,-1,0,0,0,0,0]);
randomEvents[0].agriculture.RA29 = new Events("Local goverment supports fisheraes"[ 0, 0.04, 0, 0, 0, 0, 0.02],[0,1,0,0,0,0,0]);
randomEvents[0].agriculture.RA30 = new Events("Goverment supports fisheraes"[ 0, 0.06, 0, 0, 0, 0, 0.04],[0,1,0,0,0,0,0]);
console.log(randomEvents[0]) //print out the JSON format
