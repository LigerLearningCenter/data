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
<<<<<<< HEAD
randomEvents[0].eudcation.RED01= new Events("Local goverment supports primary schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED02= new Events("Goverment supports primary schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED03= new Events("International grant for primary schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED04= new Events("Primary schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED05= new Events("Primary school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED06= new Events("Primary schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED07= new Events("Local goverment supports middle schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED08= new Events("Goverment supports middle schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED09= new Events("International grant for middle schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED10= new Events("Middle schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED11= new Events("Middle school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED12= new Events("Middle schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED13= new Events("Local goverment supports secondary schools " [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED14= new Events("Goverment supports secondary schools " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED15= new Events("International grant for secondary schools " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED16= new Events("Secondary schools overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED17= new Events("Secondary school teachers on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED18= new Events("Secondary schools understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED19= new Events("Local goverment supports vocational schools " [0.02, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED20= new Events("Goverment supports vocational schools " [0.04, 0, 0, 0, 0.04, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED21= new Events("International grant for vocational schools " [0.06, 0, 0, 0, 0.06, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED22= new Events("Vocational schools overcrowded " [-0.02, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].eudcation.RED23= new Events("Vocational school teachers on strike " [-0.04, 0, 0, 0, -0.04, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED24= new Events("Vocational schools understaffed " [-0.06, 0, 0, 0, -0.06, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED25= new Events("Goverment supports universities " [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED26= new Events("International grant for universities " [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].eudcation.RED27= new Events("Univerities overcrowded " [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED28= new Events("Universities staff on strike " [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED29= new Events("Universities understaffed " [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].eudcation.RED30= new Events("Business supports technical education " [0.06, 0.04, 0, 0.06, 0.06, 0, 0], [1, 0, 0, 1, 1, 0, 0]);
=======
//education sector
randomEvents[0].education.RED01 = new Events("Local goverment supports primary schools", [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED02 = new Events("Goverment supports primary schools", [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED03 = new Events("International grant for primary schools", [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED04 = new Events("Primary schools overcrowded", [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED05 = new Events("Primary school teachers on strike", [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED06 = new Events("Primary schools understaffed", [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED07 = new Events("Local goverment supports middle schools", [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED08 = new Events("Goverment supports middle schools", [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED09 = new Events("International grant for middle schools", [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED10 = new Events("Middle schools overcrowded", [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED11 = new Events("Middle school teachers on strike", [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED12 = new Events("Middle schools understaffed", [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED13 = new Events("Local goverment supports secondary schools", [0, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED14 = new Events("Goverment supports secondary schools", [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED15 = new Events("International grant for secondary schools", [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED16 = new Events("Secondary schools overcrowded", [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED17 = new Events("Secondary school teachers on strike", [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED18 = new Events("Secondary schools understaffed", [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED19 = new Events("Local goverment supports vocational schools", [0.02, 0, 0, 0, 0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED20 = new Events("Goverment supports vocational schools", [0.04, 0, 0, 0, 0.04, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED21 = new Events("International grant for vocational schools", [0.06, 0, 0, 0, 0.06, 0, 0], [1, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED22 = new Events("Vocational schools overcrowded", [-0.02, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, 0, 0, 0]);
randomEvents[0].education.RED23 = new Events("Vocational school teachers on strike", [-0.04, 0, 0, 0, -0.04, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED24 = new Events("Vocational schools understaffed", [-0.06, 0, 0, 0, -0.06, 0, 0], [-1, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED25 = new Events("Goverment supports universities", [0, 0, 0, 0, 0.04, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED26 = new Events("International grant for universities", [0, 0, 0, 0, 0.06, 0, 0], [0, 0, 0, 0, 1, 0, 0]);
randomEvents[0].education.RED27 = new Events("Univerities overcrowded", [0, 0, 0, 0, -0.02, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED28 = new Events("Universities staff on strike", [0, 0, 0, 0, -0.04, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED29 = new Events("Universities understaffed", [0, 0, 0, 0, -0.06, 0, 0], [0, 0, 0, 0, -1, 0, 0]);
randomEvents[0].education.RED30 = new Events("Business supports technical education", [0.06, 0.04, 0, 0.06, 0.06, 0, 0], [1, 0, 0, 1, 1, 0, 0]);
>>>>>>> 4f7dd6cb044fa899e9e5bc3de899037d767b8ea2
