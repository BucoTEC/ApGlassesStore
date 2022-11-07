using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class Cart : BaseEntity
    {
        public int Id { get; set; }

        public int OwnerId { get; set; }

        public ApplicationUser User { get; set; } = null!;


    }
}