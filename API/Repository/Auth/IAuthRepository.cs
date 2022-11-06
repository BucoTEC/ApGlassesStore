using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Models.Auth;
using Microsoft.AspNetCore.Identity;

namespace API.Repository.Auth
{
    public interface IAuthRepository
    {
        Task<IdentityResult> Signup(SignupModel data);

        Task<string> LoginAsync(SignInModel signInModel);
    }
}
