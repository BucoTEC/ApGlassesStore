using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class Product : BaseEntity
    {
        public int Id { get; set; }

        public string Name { get; set; } = null!;

        public string Description { get; set; } = null!;

        public string Image { get; set; } = String.Empty;

        public decimal Price { get; set; }

        public int AvailbleAmount { get; set; }


    }
}
