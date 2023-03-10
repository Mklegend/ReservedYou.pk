using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IBusServiceManager
    {
        public BusService GetBusService(Guid id);
        public List<BusService> GetBusServices();
        public bool UpdateBusService(BusService busService);
        public bool DeleteBusService(Guid id);
    }
}
