using ETicaretAPI.Domain.Entities.Identity;
using MediatR;
using Microsoft.AspNetCore.Identity;

namespace ETicaretAPI.Application.Features.Commands.User.CreateUser
{
    public class CreateUserCommnandHandler : IRequestHandler<CreateUserCommandRequest, CreateUserCommandResponse>
    {
        readonly UserManager<AppUser> _userManager;

        public CreateUserCommnandHandler(UserManager<AppUser> userManager)
        {
            this._userManager = userManager;
        }

        public async Task<CreateUserCommandResponse> Handle(CreateUserCommandRequest request, CancellationToken cancellationToken)
        {

            IdentityResult result = await _userManager.CreateAsync(new()
            {
                Id = Guid.NewGuid().ToString(),
                Email = request.Email,
                UserName = request.Username,
                name = request.name,
                
            },request.Password);
            CreateUserCommandResponse response = new CreateUserCommandResponse() { Succeeded = result.Succeeded};

            if(result.Succeeded)
            {
                response.Message = "User has been Created";
            }else
            {
                foreach(var error in result.Errors)
                {
                    response.Message += $"{error.Code} - {error.Description}<br>";

                } 
            }
                return response;          
        }
    }
}
