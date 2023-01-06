using System;
using Microsoft.AspNetCore.Mvc;
using Vehicle.Api.DbContext;
using Vehicle.Api.Models;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace Vehicle.Api.Controllers
{
   
    [ApiVersion("1")]
    [Route("api/[controller]/[action]")]
    public class VehicleController : ControllerBase
    {
        private readonly VehicleGetway _vehicleGetway;
        public VehicleController()
        {
            _vehicleGetway = new VehicleGetway();
        }
        [HttpPost]
        public IActionResult SaveVehicle([FromBody]VehicleRegistationModel vehicle)
        {
            try
            {
                bool isSuccess = _vehicleGetway.SaveVehicle(vehicle);
                if (isSuccess)
                {
                    return Ok(new { Status = true, Massage = "Vehicle Registration Successfull!" });
                }
                else
                {
                    return Ok(new { Status = false, Massage = "Vehicle Registration Faild!" });
                }
            }catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet]
        public IActionResult GetVehicle()
        {
            try
            {
                var vehicle = _vehicleGetway.GetVehicle();
                if (vehicle.Count>0)
                {
                    return Ok(new { Status = true, Result =vehicle});
                }
                else
                {
                    return Ok(new { Status = false, Result = vehicle });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet]
        public IActionResult GetDevice()
        {
            try
            {
                var device = _vehicleGetway.GetDevice();
                if (device.Count > 0)
                {
                    return Ok(new { Status = true, Result = device });
                }
                else
                {
                    return Ok(new { Status = false, Result = device });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        [HttpGet]
        public async Task<IActionResult> GetGeoLocation()
        {
            try
            {
                JsonToViewModel model = new JsonToViewModel();
                GeoHelper geoHelper = new GeoHelper();
                var json = await geoHelper.GetGeoInfo();
                model = JsonConvert.DeserializeObject<JsonToViewModel>(json);
                //If I Get GeoLocation By IP Address or Json Data From URL Link Then I Can Save Vehicle Location This way
                _vehicleGetway.SaveVehicleLocation(model);
               return Ok(new { Status = true, Result = model });               
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }          
            
        }

        [HttpGet]
        public IActionResult GetVehicleLocation()
        {
            try
            {
                
                var location = _vehicleGetway.GetVehicleLocationList();
                if (location.Count > 0) { 
                return Ok(new { Status = true, Result = location });
                }
                else
                {
                    return Ok(new { Status = false, Result = location, Message="Data Not Found" });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

        }

        //If I Get GeoLocation From Google Map From Angular  Then I Can Save Vehicle Location This way
        [HttpPost]
        public IActionResult SaveVehicleLocation([FromBody]JsonToViewModel location)
        {
            try
            {
                bool isSuccess = _vehicleGetway.SaveVehicleLocation(location);
                if (isSuccess)
                {
                    return Ok(new { Status = true, Massage = "Vehicle Registration Successfull!" });
                }
                else
                {
                    return Ok(new { Status = false, Massage = "Vehicle Registration Faild!" });
                }
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}