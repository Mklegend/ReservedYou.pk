namespace Model
{
    public class Bus
    {
        public Guid? BusServiceId { get; set; }

        public string? RegistrationNumber { get; set; }

        public bool IsAvailable { get; set; }

        public List<Seat>? Seats { get; set; }

    }
}

