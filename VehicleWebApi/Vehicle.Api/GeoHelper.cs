using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace Vehicle.Api
{
    public class GeoHelper
    {
        private readonly HttpClient _httpClient;
        public GeoHelper()
        {
            _httpClient = new HttpClient()
            {
                Timeout = TimeSpan.FromSeconds(5)
            };

        }
        public async Task<string> GetIPAddress()
        {
            var ipAddress = await _httpClient.GetAsync($"http://ipinfo.io/ip");
            if (ipAddress.IsSuccessStatusCode)
            {
                var result = await ipAddress.Content.ReadAsStringAsync();
                return result.ToString();
            }
            return " ";
        }

        public async Task<string> GetGeoInfo()
        {
            var ipAddress = await GetIPAddress();
            var response = await _httpClient.GetAsync($"http://api.ipstack.com/" + ipAddress + "?access_key=9c6036410752fab0a1fea51126b41f57");
            if (response.IsSuccessStatusCode)
            {
                var result = await response.Content.ReadAsStringAsync();
                return result;
            }
            return " ";
        }
    }
}
