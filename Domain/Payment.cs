namespace Model
{
    public class Payment
    {
        public Guid? PaymentId { get; set; }
        public Guid? BookingId { get; set; }
        public DateTime PaymentDate { get; set; }
        public int Amount { get; set; }
        public Booking? Booking { get; set; }

    }
}
