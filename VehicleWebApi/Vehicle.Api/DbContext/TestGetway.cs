using System.Data.SqlClient;

namespace Vehicle.Api.DbContext
{
    public class TestGetway
    {
       public static bool IsDbConnected()
        {
            using (var con = new SqlConnection(Connection.ConnectionString()))

                try
                {
                    con.Open();
                    return true;
                }
                catch
                {
                    return false;
                }
            }
        }
}
