namespace Model
{
    public class User
    {
        public Guid? UserId { get; set; }
        public string? UserName { get; set; }
        public string? EmailName { get; set; }

        public string? Password { get; set; }

        // A User can have many Bookings
        public List<Booking>? Bookings { get; set; }

    }
}