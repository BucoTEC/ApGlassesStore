using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
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

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public int AvailbleAmount { get; set; }


        public int CategoryId { get; set; }

        public Category Category { get; set; } = null!;


    }
}

