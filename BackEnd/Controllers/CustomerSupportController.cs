
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
    public class CustomerSupportController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public CustomerSupportController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT * FROM CustomerSupport";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("GLEET_VAppCon");
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
        public JsonResult Post(CustomerSupport cs)
        {
            string query = @"INSERT INTO CustomerSupport Values ('" + cs.Emri + @"', '" + cs.Mbiemri + @"', '" + cs.Nr_Tel + @"')";


            string sqlDataSource = _configuration.GetConnectionString("GLEET_VAppCon");
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
            return new JsonResult("Kerkesa juaj u krijua!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from CustomerSupport 
                    where CustomerSupport_ID = " + id + @"";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("GLEET_VAppCon");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult("Kerkesa eshte fshire me sukses!");

        }
    }
}