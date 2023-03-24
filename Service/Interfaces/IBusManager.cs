using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IBusManager
    {
        public bool AddBus(Bus bus);
        public List<Bus> GetBuses(Guid id);
        public bool DeleteBus(string registrationNumber);
    }
}
