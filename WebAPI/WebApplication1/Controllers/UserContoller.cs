using ETicaretAPI.Application.Features.Commands.User.CreateUser;
using ETicaretAPI.Application.Features.Commands.User.LoginUser;
using ETicaretAPI.Application.Features.Commands.User.RefreshTokenLogin;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserContoller : ControllerBase
    {

        readonly IMediator _mediator;

        public UserContoller(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpPost("[action]")]
       public async Task<IActionResult> Register([FromBody]CreateUserCommandRequest createUserCommandRequest)
        {
            CreateUserCommandResponse createUserCommandResponse =await _mediator.Send(createUserCommandRequest);
            return Ok(createUserCommandResponse);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login(LoginUserCommandRequest loginUserCommandRequest)
        {
            LoginUserCommandResponse loginUserCommandResponse = await _mediator.Send(loginUserCommandRequest);
            return Ok(loginUserCommandResponse);
        }

        [HttpGet]
        public DateTime getTime()
        {
            return DateTime.UtcNow;
        }

        [HttpGet("[action]")]
        public async Task<IActionResult> RefreshTokenLogin([FromQuery]RefreshTokenLoginCommandRequest refreshTokenLoginCommandRequest)
        {
            RefreshTokenLoginCommandResponse response = await _mediator.Send(refreshTokenLoginCommandRequest);

            return Ok(response);

        }

    }
}
