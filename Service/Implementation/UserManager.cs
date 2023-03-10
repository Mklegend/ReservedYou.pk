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
    public class UserManager : IUserManager
    {
        private readonly DatabaseContext _databaseContext;
        public UserManager(DatabaseContext databaseContext) {
            _databaseContext = databaseContext;
        }

        public User GetUser(Guid id) {
            return _databaseContext.User.Find(id);
        }

        public List<User> GetUsers()
        {
            return _databaseContext.User.ToList();
        }

        public bool UpdateUser(User user) {

            bool IsUserExist = _databaseContext.User.Any(u => u.UserId == user.UserId);

            if (IsUserExist == false)
            {
                _databaseContext.User.Add(user);
            }
            else {
                _databaseContext.User.Update(user);
            }

            int result = _databaseContext.SaveChanges();

            if (result == 0) return false;
            
            return true;
        }

        public bool DeleteUser(Guid id)
        {
            bool IsUserExist = _databaseContext.User.Any(u=>u.UserId==id);
            if (IsUserExist)
            {
                _databaseContext.User.Remove(new User { UserId = id });
                _databaseContext.SaveChanges();
                return true;
            }
            else {
                return false;
            }

        }

        public bool Login(string email, string password) {
           bool IsUserValid = _databaseContext.User.Any(u=>u.EmailName == email && u.Password == password);
            if (IsUserValid) return true;
            else return false;
        }

    }
}
