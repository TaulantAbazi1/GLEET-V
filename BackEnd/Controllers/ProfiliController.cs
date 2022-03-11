
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;
using GLEET_V.Models;

namespace GLEET_V.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProfiliController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ProfiliController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]  //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT Users.ID, Users.Emri, Users.Mbiemri, Users.Passwordi, Users.Foto, Users.Pershkrimi FROM Users";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Gleet_VAppCon");
            SqlDataReader sqlDataReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCom = new SqlCommand(query, myCon))
                {
                    sqlDataReader = sqlCom.ExecuteReader();
                    table.Load(sqlDataReader);
                    sqlDataReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }


        [HttpPut]  //Metoda PUT - e perditeson ndonje table row
        public JsonResult Put(Users us)
        {
            string query = @"Update Users set Emri ='" + us.Emri + @"', Mbiemri ='" + us.Mbiemri + @"',
                                              Passwordi ='" + us.Passwordi + @"', 
                                              Foto ='" + us.Foto + @"', Pershkrimi ='" + us.Pershkrimi + @"'
                                              WHERE ID = " + us.ID + @"";



            string sqlDataSource = _configuration.GetConnectionString("Gleet_VAppCon");
            SqlDataReader sqlDataReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand sqlCom = new SqlCommand(query, myCon))
                {
                    sqlDataReader = sqlCom.ExecuteReader();

                    sqlDataReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Profili eshte perditesuar me sukses!");
        }
    }
}
