using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Vehicle.Api.Helper
{
    public class Token
    {
        private readonly IConfiguration _config;
        private readonly Claim[] _claims;
        public Token(IConfiguration config,Claim[] claims)
        {
            _config = config;
            _claims = claims;
        }

        public string GetToken()
        {
            string issuer = _config["Jwt:Issuer"];
            string audience = _config["Jwt:Audience"];
            int.TryParse(_config["Jwt:Expires"], out int expiresDays);
            var expires = DateTime.Now.AddHours(expiresDays);
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(issuer: issuer, audience: audience, signingCredentials: credentials, expires:expires, claims: _claims);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    }
}
