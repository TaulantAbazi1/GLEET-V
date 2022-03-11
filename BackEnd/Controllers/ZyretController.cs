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
    public class ZyretController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ZyretController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Zyret";
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
        public JsonResult Post(Zyret zy)
        {
            string query = @"INSERT INTO Zyret Values ('" + zy.Lokacioni + @"', '" + zy.Foto + @"', '" + zy.Kontakti + @"')";


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
            return new JsonResult("Zyra u shtua me sukses!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM Zyret where Zyret_ID =" + id + @"";

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
            return new JsonResult("Zyra eshte fshire me sukses!");
        }
    }
}
