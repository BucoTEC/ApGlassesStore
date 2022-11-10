using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class CartItem : BaseEntity
    {

        public int Quantity { get; set; }

        public int ProductId { get; set; }

        public Product? Product { get; set; }

        public int UserId { get; set; }

        public ApplicationUser ApplicationUser { get; set; } = null!;

    }
}
