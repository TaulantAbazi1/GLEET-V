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
    public class FuelUpController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public FuelUpController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT * FROM FuelUp";
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

        [HttpPost] //Metoda POST - Inserton ndonje table row te ri
        public JsonResult Post(FuelUp fu)
        {
            string query = @"INSERT INTO FuelUp Values ('" + fu.Perqindja + @"')";


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
            return new JsonResult("Karburanti u shtua me sukses!");
        }

        [HttpPut] //Metoda PUT - e perditeson ndonje table row
        public JsonResult Put(FuelUp fu)
        {
            string query = @"Update FuelUp set Perqindja ='" + fu.Perqindja + @"'
                                                                        WHERE Fuel_ID = " + fu.Fuel_ID + @"";

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
            return new JsonResult("Karburanti eshte perditesuar me sukses!");
        }
    }
}
