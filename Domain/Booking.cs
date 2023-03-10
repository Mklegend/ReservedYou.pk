namespace Model
{
    public class Booking
    {
        public Guid? BookingId { get; set; }

        public Guid? UserId { get; set; }

        public Guid? ScheduleId { get; set; }

        public DateTime Date { get; set; }

        public string? Status { get; set; }

        public User? User { get; set; }

        public Schedule? Schedule { get; set; }


    }
}