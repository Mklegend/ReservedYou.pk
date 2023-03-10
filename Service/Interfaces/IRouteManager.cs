using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IRoutesManager
    {
        public Routes GetRoute(Guid id);
        public List<Routes> GetAllRoutes();

        public bool UpdateRoute(Routes route);

        public bool DeleteRoute(Guid id);
    }
}
