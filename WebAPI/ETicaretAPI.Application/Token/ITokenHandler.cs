using ETicaretAPI.Application.DTOs;
using ETicaretAPI.Domain.Entities.Identity;

namespace ETicaretAPI.Application.Token
{
    public interface ITokenHandler
    {
        DTOs.Token CreateAccessToken(int min,AppUser user);
        string CreateRefreshToken();
    }
}
