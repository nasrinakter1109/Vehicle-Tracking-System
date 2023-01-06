using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Vehicle.Api.ViewModels.Security;

namespace Vehicle.Api.DbContext.Security
{
    public class UserGetway
    {
        public UserViewModel Login(string loginId, string loginPassword)
        {
            object paramObj = new
            {
                LoginID = loginId,
                LoginPassword = loginPassword
            };
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                try
                {
                    UserViewModel user = con.QuerySingle<UserViewModel>("sp_UserLogin", param: paramObj, commandType: CommandType.StoredProcedure);
                    string sql = $"INSERT INTO UserLogInfo (UserID, LoginTime, LogoutTime) VALUES('{loginId}', FORMAT(GETDATE(), 'dd/MM/yyy hh:mm:ss ttt'),NULL)";
                    con.Execute(sql);
                    return user;
                }
                catch (Exception e)
                {
                    return BadRequest(e.Message);
                }
            }
        }

        private  UserViewModel BadRequest(string message)
        {
            throw new NotImplementedException();
        }

        public  void Logout(string loginId)
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                string sql = $"UPDATE UserLogInfo SET LogoutTime = FORMAT(GETDATE(), 'dd/MM/yyyy hh:mm:ss ttt') WHERE ID = (SELECT TOP 1 ID FROM UserLogInfo WHERE UserID = '{loginId}' ORDER BY ID DESC)";
                con.Execute(sql);
            }
        }
        public  List<object> GetAssignedPagesByUser(int userId)
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                string sql = $@"SELECT   am.ID ModuleID,am.ModuleRoutePath,am.Name ModuleName,  apr.PageID,ap.PageRoutePath,ap.Name PageName,  apr.UserID FROM  ApplicationUserAssignedPages apr  JOIN ApplicationPages ap ON ap.ID = apr.PageID   JOIN ApplicationModules am ON am.ID = ap.ModuleID WHERE UserID={userId}";
                var assignedPage = con.Query<object>(sql).ToList();
                return assignedPage;
            }
        }
        public  bool ChangePassword(string loginId, string oldPassword, string newPassword)
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))
            {
                string checkExistUser = $" IF EXISTS (SELECT TOP 1 ID FROM Users WHERE LoginID = '{loginId}' AND LoginPassword = '{oldPassword}') SELECT TOP 1 ID FROM Users WHERE LoginID = '{loginId}' AND LoginPassword = '{oldPassword}' ELSE SELECT 0";
                int userId = con.ExecuteScalar<int>(checkExistUser);
                if (userId == 0) { throw new Exception("Incorrect User Name or Password"); }
                string sql = $"UPDATE Users SET LoginPassword='{newPassword}', IsChangedPassword='Yes' WHERE ID={userId}";
                int rowAffect = con.Execute(sql);
                return rowAffect > 0;
            }
        }
    }
}
