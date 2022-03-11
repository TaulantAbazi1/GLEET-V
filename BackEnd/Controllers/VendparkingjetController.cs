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
    public class VendparkingjetController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public VendparkingjetController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet]
        public JsonResult Get()
        {
            string query = @"SELECT * FROM Vendparkingjet";
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
        public JsonResult Post(Vendparkingjet vp)
        {
            string query = @"INSERT INTO Vendparkingjet Values ('" + vp.Adresa + @"', '" + vp.Rruga + @"', '" + vp.NumriMakinave + @"')";


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
            return new JsonResult("Vendparkimi u shtua me sukses!");
        }
        [HttpPut]
        public JsonResult Put(Vendparkingjet vp)
        {
            string query = @"Update Vendparkingjet set Adresa ='" + vp.Adresa + @"', Rruga ='" + vp.Rruga + @"', NumriMakinave ='" + vp.NumriMakinave + @"'
                                          
                                                                        WHERE Parkingjet_ID = " + vp.Parkingjet_ID + @"";



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
            return new JsonResult("Eshte perditesuar me sukses!");
        }

        [HttpDelete("{id}")]
        public JsonResult Delete(int id)
        {
            string query = @"
                    delete from Vendparkingjet 
                    where Parkingjet_ID = " + id + @"
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
            return new JsonResult("Vendparkingu eshte fshire me sukses");

        }
    }
}