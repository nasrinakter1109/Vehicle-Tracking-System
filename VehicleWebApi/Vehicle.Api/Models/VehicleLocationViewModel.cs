using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Vehicle.Api.Models
{
    public class VehicleLocationViewModel:JsonToViewModel
    {
        public string VehicleName { get; set; }
        public string DeviceName { get; set; }

    }
}
