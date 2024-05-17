using ETicaretAPI.Application.Exceptions;
using ETicaretAPI.Application.Services;
using ETicaretAPI.Application.Token;
using ETicaretAPI.Domain.Entities.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace ETicaretAPI.Application.Features.Commands.User.LoginUser
{

    public class LoginUserCommandHandler : IRequestHandler<LoginUserCommandRequest, LoginUserCommandResponse>
    {
        readonly UserManager<AppUser> _userManager;
        readonly SignInManager<AppUser> _signInManager;
        readonly ITokenHandler _tokenHandler;
        public IUserService _userService;
        public LoginUserCommandHandler(UserManager<AppUser> userManager, SignInManager<AppUser> signInManager, ITokenHandler tokenHandler, IUserService userService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _tokenHandler = tokenHandler;
            _userService = userService;
        }

        public async Task<LoginUserCommandResponse> Handle(LoginUserCommandRequest request, CancellationToken cancellationToken)
        {
            AppUser appuser = await _userManager.FindByEmailAsync(request.Email);
            if(appuser == null)
            {
                throw new SignInException();
            }
            SignInResult signInResult = await _signInManager.CheckPasswordSignInAsync(appuser, request.Password, false);
            if (signInResult.Succeeded)
            {
               DTOs.Token token = _tokenHandler.CreateAccessToken(10,appuser);
               await _userService.UpdateRefreshToken(token.RefreshToken,appuser,token.ExpirationDate,10);
                return new LoginUserSuccessCommandResponse()
                {
                    Token = token,
                };
            }
            //return new LoginUserErrorCommandResponse()
            //{
            //    message = "Authentication failed."
            //};
            throw new AuthenticationFailedException();
        }
    }
}
