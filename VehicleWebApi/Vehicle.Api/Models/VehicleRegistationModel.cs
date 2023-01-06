using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vehicle.Api.Models
{
    public class VehicleRegistationModel
    {
        public int ID { get; set; }
        public string VehicleName { get; set; }
        public string RegistrationNo { get; set; }
        public string CompanyName { get; set; }
        public string Model { get; set; }
        public string Colour { get; set; }
        public string IgnitionKeyNumber  {get;set;}
    }
}
