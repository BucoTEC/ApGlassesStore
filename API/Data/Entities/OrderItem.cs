using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class OrderItem : BaseEntity
    {
        public int Id { get; set; }

        public int ProductId { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }

        public string Name { get; set; } = null!;

        public string Description { get; set; } = null!;

        public int MyProperty { get; set; }

        public Order Order { get; set; } = null!;

        public int Quantity { get; set; }
    }
}
