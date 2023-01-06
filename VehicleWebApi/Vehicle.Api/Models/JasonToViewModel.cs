using Newtonsoft.Json;
using System;

namespace Vehicle.Api.Models
{
    public class JsonToViewModel
    {
        [JsonProperty("latitude")]
        public decimal Latitude { get; set; }
        [JsonProperty("longitude")]
        public decimal Longitude { get; set; }
        public int ID  {get;set;}
        public int? VehicleID { get; set; }
        [JsonProperty("capital")]
        public string Location { get; set; }
        public decimal Spreed { get; set; }
        public int? DeviceID { get; set; }
        public DateTime EntryDate { get; set; }
        public TimeSpan EntryTime { get; set; }
    }
}
