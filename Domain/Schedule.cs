namespace Model
{
    public class Schedule
    {
        public Guid? ScheduleId { get; set; }
        public Guid? BusServiceId { get; set; }
        public Guid? RouteId { get; set; }

        // Change this to required primary key 
        public string? RegistrationNumber { get; set; }

        public DateTime ScheduleDate { get; set; }  

        public DateTime DepartureTime { get; set; }
        public DateTime ArrivalTime { get; set; }

        public int BusFare { get; set; }

        // Only Admin can Update this field
        public bool? Approved { get; set; }
        public List<Booking>? Bookings { get; set; }
        public BusService? BusService { get; set; }

        public Routes? Route { get; set; }

        public Bus? Bus { get; set; }


    }
}