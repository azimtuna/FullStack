﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ETicaretAPI.Application.DTOs;
namespace ETicaretAPI.Application.Features.Commands.User.RefreshTokenLogin
{
    public class RefreshTokenLoginCommandResponse
    {
        public DTOs.Token token {  get; set; }
    }
}
