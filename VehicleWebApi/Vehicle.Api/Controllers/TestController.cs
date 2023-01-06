using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Security.Claims;
using Vehicle.Api.DbContext;
using Vehicle.Api.Helper;
using Vehicle.Api.Models;

namespace Vehicle.Api.Controllers
{
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]/[action]")]
    public class TestController : ControllerBase
    {
        public TestController(IConfiguration config)
        {
            _config = config;
        }
        private readonly IConfiguration _config;
        [HttpGet]
        public IActionResult Index()
        {
            bool isDbConnected = TestGetway.IsDbConnected();
            string conStatus = isDbConnected ? "<span style='color:#090'>Connected</span>" : "<span style='color:#f00'>Disconnected</span>";
            return new ContentResult
            {
                Content = $"<html><body style='color:#050; text-align:center; margin-top:100px; font-family:Monospace,Lucida Console'><h1>Api Runing Successfully! <br/><h2>Database {conStatus}</h2></h1></body></html>",
                ContentType = "text/html"
            };
        }
        
        [HttpPost]
        public IActionResult GetToken([FromBody]TestModel model)
        {
            Claim[] claims =
            {
                new Claim("UserId", model.ID.ToString()),
                new Claim("UserName", model.Name)
            };
            Token token = new Token(_config, claims);
            var tokenStr = token.GetToken();
            return Ok(new {model.Name, token = tokenStr });
        }
    }
}