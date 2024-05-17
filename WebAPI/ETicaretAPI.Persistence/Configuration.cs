using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Persistence
{
    static class Configuration
    {
        public static string ConnectionString
        {
            get{
                ConfigurationManager configurationManager = new();
                configurationManager.SetBasePath("D:\\FullWebApp\\WebAPI\\WebApplication1");
                configurationManager.AddJsonFile("appsettings.json");
                return configurationManager.GetConnectionString("PostgreSQL");
            }
        }
    }
}
