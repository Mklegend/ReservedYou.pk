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
    public class BusServiceManager : IBusServiceManager
    {
        private readonly DatabaseContext _databaseContext;
        public BusServiceManager(DatabaseContext databaseContext) {
            _databaseContext= databaseContext;
        }

        public BusService GetBusService(Guid id) {
            return _databaseContext.BusService.Find(id);
        }

        public List<BusService> GetBusServices() { 
            return _databaseContext.BusService.ToList();
        }

        public bool UpdateBusService(BusService busService) {
            bool IsBusServiceExist = _databaseContext.BusService.Any(u => u.BusServiceId == busService.BusServiceId);

            if (IsBusServiceExist == false)
            {
                _databaseContext.BusService.Add(busService);
            }
            else
            {
                _databaseContext.BusService.Update(busService);
            }

            int result = _databaseContext.SaveChanges();

            if (result == 0) return false;

            return true;
        }

        public bool DeleteBusService(Guid id)
        {
            bool IsBusServiceExist = _databaseContext.BusService.Any(u => u.BusServiceId == id);
            if (IsBusServiceExist)
            {
                _databaseContext.BusService.Remove(new BusService { BusServiceId = id });
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
