using ETicaretAPI.Application.Exceptions;
using ETicaretAPI.Application.Services;
using ETicaretAPI.Application.Token;
using ETicaretAPI.Domain.Entities.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Features.Commands.User.RefreshTokenLogin
{
    public class RefreshTokenLoginCommandHandler : IRequestHandler<RefreshTokenLoginCommandRequest, RefreshTokenLoginCommandResponse>
    {
        readonly UserManager<AppUser> _userManager;
        readonly ITokenHandler _tokenHandler;
        readonly IUserService _userService;

        public RefreshTokenLoginCommandHandler(UserManager<AppUser> userManager, ITokenHandler tokenHandler, IUserService userService)
        {
            _userManager = userManager;
            _tokenHandler = tokenHandler;
            _userService = userService;
        }

        public async Task<RefreshTokenLoginCommandResponse> Handle(RefreshTokenLoginCommandRequest request, CancellationToken cancellationToken)
        {
            AppUser user = await _userManager.Users.FirstOrDefaultAsync(u => u.RefreshToken==request.RefreshToken);

            if (user != null && user?.RefreshTokenEndDate > DateTime.UtcNow)
            {
                DTOs.Token token = _tokenHandler.CreateAccessToken(10,user);
                await _userService.UpdateRefreshToken(token.RefreshToken, user, token.ExpirationDate, 10);
                return new()
                {
                    token = token,
                };

            }
            else
                throw new UserNotFoundException();


        }
    }
}
