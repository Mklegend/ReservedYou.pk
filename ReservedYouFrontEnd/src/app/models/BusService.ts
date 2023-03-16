export class BusService {
  busServiceId: string;
  registrationNumber: string;
  name: string;
  address: string;
  email: string;
  phone: string;
  password: string;

  constructor(
    bsId: string,
    regNo: string,
    name: string,
    address: string,
    email: string,
    phone: string,
    password: string
  ) {
    this.busServiceId = bsId;
    this.registrationNumber = regNo;
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.password = password;
  }
}
