namespace Model
{
    public class Seat
    {
        public Guid? BusId { get; set; }
        public int SeatNo { get; set; }

        public string? Status { get; set; }

        public Bus? Bus { get; set; }
    }
}