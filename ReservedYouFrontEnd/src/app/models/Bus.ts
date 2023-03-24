export class Bus {
    registrationNumber:string;
    busServiceId:string;
    isAvailable:string;

    constructor(rNo:string,bId:string,isAvail:string) {
        this.registrationNumber = rNo;
        this.busServiceId = bId;
        this.isAvailable = isAvail;
    }
}