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
    public class ScheduleManager : IScheduleManager
    {
        private readonly DatabaseContext _databaseContext;
        public ScheduleManager(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public List<Schedule> GetSchedules(Guid id)
        {
            return _databaseContext.Schedule.Where(u => u.BusServiceId == id).ToList();
        }

        public bool UpdateSchedule(Schedule schedule)
        {
            bool IsScheduleExist = _databaseContext.Schedule.Any(u => u.ScheduleId == schedule.ScheduleId);

            if (IsScheduleExist == false)
            {
                _databaseContext.Schedule.Add(schedule);
            }
            else
            {
                _databaseContext.Schedule.Update(schedule);
            }

            int result = _databaseContext.SaveChanges();

            if (result == 0) return false;

            return true;
        }

        public bool DeleteSchedule(Guid id)
        {
            bool IsScheduleExist = _databaseContext.Schedule.Any(u => u.ScheduleId == id);
            if (IsScheduleExist)
            {
                _databaseContext.Schedule.Remove(new Schedule { ScheduleId = id });
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
