using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using API.Data.Enums;
using Microsoft.AspNetCore.Identity;

namespace API.Data.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; } = null!;

        public string LastName { get; set; } = null!;

        public ApplicationUserRole Role { get; set; } = ApplicationUserRole.Customer;
    }
}