using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Interfaces
{
    public interface IUserManager
    {
        public User GetUser(Guid id);
        public List<User> GetUsers();
        public bool UpdateUser(User user);
        public bool DeleteUser(Guid id);
        public bool Login(string email, string password);

    }
}
