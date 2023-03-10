namespace Model
{
    public class BusService
    {
        public Guid? BusServiceId { get; set; }
        public string? RegistrationNumber { get; set; }
        public string? Name { get; set; }

        public string? Address { get; set; }

        public string? Phone { get; set; }

        public string? Email { get; set; }

        public string? Password { get; set; }

        public List<Schedule>? Schedules { get; set; }
        public List<Bus>? Buses { get; set; }

    }
}