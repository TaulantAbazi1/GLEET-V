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
    public class MakinaController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public MakinaController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet] //Metoda GET - I liston te gjitha atributet te tabeles
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Makinat";
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
        public JsonResult Post(Makinat ma)
        {
            string query = @"INSERT INTO Makinat Values ('" + ma.Brandi + @"', '" + ma.Modeli + @"', '" + ma.Ngjyra + @"', '" + ma.Karburanti + @"', 
                                                       '" + ma.Viti + @"', '" + ma.Klasa + @"')";


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
            return new JsonResult("Makina u shtua me sukses!");
        }

        [HttpPut] //Metoda PUT - e perditeson ndonje table row
        public JsonResult Put(Makinat ma)
        {
            string query = @"Update Makinat set Brandi ='" + ma.Brandi + @"', Modeli ='" + ma.Modeli + @"', Ngjyra ='" + ma.Ngjyra + @"', 
                                              Karburanti ='" + ma.Karburanti + @"', Viti ='" + ma.Viti + @"', Klasa ='" + ma.Klasa + @"'
                                                                        WHERE Makina_ID = " + ma.Makina_ID + @"";

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
            return new JsonResult("Makina eshte perditesuar me sukses!");
        }
        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"DELETE FROM Makinat where Makina_ID =" + id + @"";

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
            return new JsonResult("Eshte fshire me sukses!");
        }
    }

}
