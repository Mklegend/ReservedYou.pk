using Microsoft.EntityFrameworkCore;
using Model;

namespace Repository
{
    public class DatabaseContext : DbContext
    {

        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Adding Primary Keys on Tables
            modelBuilder.Entity<Admin>(a =>
            {
                a.HasKey(a => a.AdminId);
            });
            modelBuilder.Entity<Booking>(
                b =>
                {
                    b.HasKey(b => b.BookingId);
                }
            );
            modelBuilder.Entity<Bus>(b =>
            {
                b.HasKey(b => new { b.RegistrationNumber, b.BusServiceId });
            });
            modelBuilder.Entity<BusService>(b =>
            {
                b.HasKey(b => b.BusServiceId);
            });
            modelBuilder.Entity<Payment>(p =>
            {
                p.HasKey(p => p.PaymentId);
            });

            modelBuilder.Entity<Routes>(r =>
            {
                r.HasKey(r => r.RouteId);
            });

            modelBuilder.Entity<Schedule>(s =>
            {
                s.HasKey(s => s.ScheduleId);
            });

            modelBuilder.Entity<Seat>(s =>
            {
                s.HasKey(s => new { s.BusId, s.SeatNo });
            });

            modelBuilder.Entity<User>(u =>
            {
                u.HasKey(u => u.UserId);
            });
        }
        public DbSet<Admin>? Admin { get; set; }
        public DbSet<Booking>? Booking { get; set; }

        public DbSet<Bus>? Bus { get; set; }

        public DbSet<BusService>? BusService { get; set; }

        public DbSet<Payment>? Payment { get; set; }

        public DbSet<Routes>? Route { get; set; }

        public DbSet<Schedule>? Schedule { get; set; }

        public DbSet<Seat>? Seat { get; set; }

        public DbSet<User>? User { get; set; }

    }
}
