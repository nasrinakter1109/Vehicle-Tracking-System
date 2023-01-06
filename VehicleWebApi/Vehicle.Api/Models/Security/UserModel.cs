using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vehicle.Api.Models.Security
{
    public class UserModel
    {
        public int  ID { get; set; }
        public string UserName { get; set; }
        public string LoginID { get; set; }
        public string LoginPassword { get; set; }
        public int UserTypeID { get; set; }
        public string CreatedDate { get; set; }
        public string IsChangePassword { get; set; }
        public string IsActive { get; set; }
    }
}
