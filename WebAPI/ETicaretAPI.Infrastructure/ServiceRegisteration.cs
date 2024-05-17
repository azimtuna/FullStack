using ETicaretAPI.Application.Token;
using ETicaretAPI.Infrastructure.Services.Token;
using Microsoft.Extensions.DependencyInjection;

namespace ETicaretAPI.Infrastructure
{
    public static class ServiceRegisteration
    {
           public static void InfrastructureServiceRegisteration(this IServiceCollection services)
        {
            services.AddScoped<ITokenHandler,TokenHandler>();
        }
    }
}
