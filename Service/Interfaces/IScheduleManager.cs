using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IScheduleManager
    {
        public Schedule GetSchedule(Guid id);
        public List<Schedule> GetSchedules();
        public bool UpdateSchedule(Schedule schedule);
        public bool DeleteSchedule(Guid id);
    }
}
