using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ETicaretAPI.Application.Features.Commands.User.LoginUser
{
    public class LoginUserCommandResponse
    {
    }
    public class LoginUserSuccessCommandResponse: LoginUserCommandResponse
    {
        public DTOs.Token Token { get; set; }

    }

    public class LoginUserErrorCommandResponse: LoginUserCommandResponse
    {
        public string message { get; set; }
    }
}
