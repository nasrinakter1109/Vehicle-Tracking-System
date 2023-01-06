using System;
using System.Security.Claims;
using Api;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json.Linq;
using Vehicle.Api.DbContext.Security;
using Vehicle.Api.ViewModels.Security;

namespace Vehicle.Api.Controllers.Security
{
    //[Authorize()]
    [ApiVersion("1")]
    [Route("api/[controller]/[action]")]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly UserGetway _UserDb;
        public UserController(IConfiguration config)
        {
            _config = config;
            _UserDb = new UserGetway();
        }
       
        [HttpGet]
        public IActionResult Login()
        {
            var reqParam = HttpContext.Request.Query;
            string loginId = reqParam["loginId"];
            string loginPassword = reqParam["loginPassword"];
            if (string.IsNullOrEmpty(loginId) || string.IsNullOrEmpty(loginPassword))
                return BadRequest();

            UserViewModel user = _UserDb.Login(loginId, loginPassword);
            if (user == null)
            {
                return BadRequest();
            }
            user.AssignedPages = _UserDb.GetAssignedPagesByUser(user.ID);
            IdentityOptions _options = new IdentityOptions();
            var key = _config["Jwt:Key"];
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            int.TryParse(_config["Jwt:Expires"], out int days);
            var expires = DateTime.Now.AddDays(days);
            Claim[] claims = {
                new Claim("UserId", user.ID.ToString()),
                new Claim("LoginId", user.LoginID),
                new Claim("UserTypeId", user.UserTypeID.ToString()),
                new Claim(_options.ClaimsIdentity.RoleClaimType, user.UserTypeName.Replace(" ",""))
            };
            var token = new Token(key, issuer, audience, expires, claims);
            var tokenString = token.BuildToken();
            return Ok(new { token = tokenString, user });
        }
        [HttpGet]
        public IActionResult Logout()
        {
            string loginId = HttpContext.Request.Query["loginId"];
            _UserDb.Logout(loginId);
            return Ok();
        }
        [HttpPost]
        public IActionResult ChangePassword([FromBody]JObject paramObj)
        {

            try
            {
                string loginId = paramObj["loginId"].ToString();
                string oldPassword = paramObj["oldPassword"].ToString();
                string newPassword = paramObj["newPassword"].ToString();
                bool isSuccess;
                isSuccess = _UserDb.ChangePassword(loginId, oldPassword, newPassword);
                if (isSuccess)
                {
                    return Ok(new { status = true, message = "Password Changed Successfully!" });
                }
                else
                {
                    return Ok(new { status = false, message = "Failed to change Password" });
                }



            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}