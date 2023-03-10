namespace Model
{
    public class Routes
    {
        public Guid? RouteId { get; set; }
        public string? StartLocation { get; set; }
        public string? EndLocation { get; set; }

        public int Distance { get; set; }

        public int Duration { get; set; }

    }
}
