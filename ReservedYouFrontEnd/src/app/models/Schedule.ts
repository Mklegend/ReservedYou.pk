export class Schedule {
    ScheduleId:string;
    BusServiceId:string;
    RouteId:string;
    RegistrationNumber:string;
    ScheduleDate:Date;
    DepartureTime:string;
    ArrivalTime:string;
    BusFare:number;
    Approved:boolean;

    constructor(sId:string,bsId:string,rId:string,rNum:string,sDate:Date,dTime:string,aTime:string,bFare:number,apr:boolean){
        this.ScheduleId = sId;
        this.BusServiceId = bsId;
        this.RouteId = rId;
        this.RegistrationNumber = rNum;
        this.ScheduleDate = new Date(sDate);
        this.DepartureTime = dTime;
        this.ArrivalTime = aTime;
        this.BusFare = bFare;
        this.Approved = apr;
    }
    
}