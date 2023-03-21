export class Route {
    routeId:string;
    startLocation:string;
    endLocation:string;
    distance:number;
    duration:number;
    constructor(rId:string,sL:string,eL:string,dst:number,dur:number){
        this.routeId = rId;
        this.startLocation = sL;
        this.endLocation = eL;
        this.distance = dst;
        this.duration = dur;
    }
}