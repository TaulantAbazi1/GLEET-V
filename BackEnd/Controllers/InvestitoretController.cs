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
    public class InvestitoretController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public InvestitoretController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Investitoret";
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
        [HttpPost]
        public JsonResult Post(Investitoret inv)
        {
            string query = @"INSERT INTO Investitoret Values ('" + inv.Emri + @"', '" + inv.Mbiemri + @"', '" + inv.Pershkrimi + @"', '" + inv.Foto + @"', '" + inv.Kontakti + @"')";


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
            return new JsonResult("Investitori u shtua me sukses!");
        }
        [HttpPut]
        public JsonResult Put(Investitoret inv)
        {
            string query = @"Update Investitoret set Emri ='" + inv.Emri + @"', Mbiemri ='" + inv.Mbiemri + @"', Pershkrimi ='" + inv.Pershkrimi + @"', Foto ='" + inv.Foto + @"', Kontakti ='" + inv.Kontakti + @"'
                                          
                                                                        WHERE Investitoret_ID = " + inv.Investitoret_ID + @"";



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
            return new JsonResult("Investitori eshte perditesuar me sukses!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Investitoret 
                    where Investitoret_ID = " + id + @"
                ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("Gleet_VAppCon");
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
            return new JsonResult("Investitori eshte fshire me sukses");

        }
    }
}
