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
    public class ToSController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ToSController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]  //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT * FROM ToS";
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
        public JsonResult Put(ToS tos)
        {
            string query = @"Update ToS set PershkrimiToS ='" + tos.PershkrimiToS + @"'
                                              WHERE ToS_ID = " + tos.ToS_ID + @"";



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
            return new JsonResult("Terms of Services u perditesuan me sukses!");
        }
    }
}
