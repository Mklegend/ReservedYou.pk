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
    public class RoutesManager : IRoutesManager
    {
        private readonly DatabaseContext _databaseContext;
        public RoutesManager(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public Routes GetRoute(Guid id)
        {
            return _databaseContext.Route.Find(id);
        }

        public List<Routes> GetAllRoutes()
        {
            return _databaseContext.Route.ToList();
        }

        public bool UpdateRoute(Routes Routes)
        {

            bool IsRoutesExist = _databaseContext.Route.Any(u => u.RouteId == Routes.RouteId);

            if (IsRoutesExist == false)
            {
                _databaseContext.Route.Add(Routes);
            }
            else
            {
                _databaseContext.Route.Update(Routes);
            }

            int result = _databaseContext.SaveChanges();

            if (result == 0) return false;

            return true;
        }

        public bool DeleteRoute(Guid id)
        {
            bool IsRoutesExist = _databaseContext.Route.Any(u => u.RouteId == id);
            if (IsRoutesExist)
            {
                _databaseContext.Route.Remove(new Routes { RouteId = id });
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
