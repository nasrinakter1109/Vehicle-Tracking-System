using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vehicle.Api.Models.Security;

namespace Vehicle.Api.ViewModels.Security
{
    public class UserViewModel : UserModel
    {
        public string UserTypeName { get; set; }
        public List<object> AssignedPages { get; set; }
    }
}
