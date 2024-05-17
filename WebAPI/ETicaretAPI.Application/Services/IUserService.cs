using ETicaretAPI.Domain.Entities.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Services
{
    public interface IUserService
    {
        Task UpdateRefreshToken(string refreshToken,AppUser user,DateTime accessTokenDate,int refreshTokenLifeTime);
    }
}
