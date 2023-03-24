using Business.Interfaces;
using Model;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Implementation
{
    public class BusManager : IBusManager
    {
        private readonly DatabaseContext _databaseContext;
        public BusManager(DatabaseContext databaseContext) {
            _databaseContext = databaseContext;
        }

        public List<Bus> GetBuses(Guid id) { 
            // Get all the buses belonging to the BusService with ID = id
            return _databaseContext.Bus.Where(u=> u.BusServiceId == id).ToList();
        }

        public bool AddBus(Bus bus) {

            bool IsBusExist = _databaseContext.Bus.Any(u => u.RegistrationNumber  == bus.RegistrationNumber);

            if (IsBusExist == false)
            {
                _databaseContext.Bus.Add(bus);
            }
            else
            {
                _databaseContext.Bus.Update(bus);
            }

            int result = _databaseContext.SaveChanges();

            if (result == 0) return false;

            return true;
        }

        public bool DeleteBus(string registrationNumber) {
            bool IsBusExist = _databaseContext.Bus.Any(u => u.RegistrationNumber == registrationNumber);
            if (IsBusExist)
            {
                _databaseContext.Bus.Remove(new Bus { RegistrationNumber = registrationNumber });
                _databaseContext.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
