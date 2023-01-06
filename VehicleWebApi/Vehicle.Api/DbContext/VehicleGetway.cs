using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Vehicle.Api.Models;

namespace Vehicle.Api.DbContext
{
    public class VehicleGetway
    {
        public bool SaveVehicle(VehicleRegistationModel vehicle)
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                object param=new {
                    vehicle.ID,
                    vehicle.VehicleName,
                    vehicle.RegistrationNo,
                    vehicle.CompanyName,
                    vehicle.Model,
                    vehicle.Colour,
                    vehicle.IgnitionKeyNumber
                };
                int rowEfect = con.Execute("sp_SaveVehicle", param: param, commandType: CommandType.StoredProcedure);
                return rowEfect > 0;
            }

        }
        public List<VehicleRegistationModel> GetVehicle()
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                
                List<VehicleRegistationModel> vehicleList = con.Query<VehicleRegistationModel>("Select * From VehicleRegistation").ToList();
                return vehicleList;
            }

        }
        public List<DevicesModel> GetDevice()
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {

                List<DevicesModel> deviceList = con.Query<DevicesModel>("Select * From DeviceInfo").ToList();
                return deviceList;
            }

        }
        public bool SaveVehicleLocation(JsonToViewModel location)
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                object param = new
                {
                    VehicleID=location.VehicleID==null?1: location.VehicleID,
                    location.Latitude,
                    location.Longitude,
                    location.Location,
                    DeviceID= location.DeviceID==null?1: location.DeviceID,
                    location.Spreed
                };
                int rowEfect = con.Execute("sp_SaveVehicleLocation", param: param, commandType: CommandType.StoredProcedure);
                return rowEfect > 0;
            }

        }
        public List<VehicleLocationViewModel> GetVehicleLocationList()
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {

                List<VehicleLocationViewModel> locationList = con.Query<VehicleLocationViewModel>("sp_GetLocationList",commandType:CommandType.StoredProcedure).ToList();
                return locationList;
            }

        }
    }
}
