using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class Order : BaseEntity
    {

        public string Address { get; set; } = null!;

        public string City { get; set; } = null!;

        public string Country { get; set; } = null!;

        public string PhoneNumber { get; set; } = null!;

        public string ReceiverName { get; set; } = null!;


        public bool Delivered { get; set; }

        [ForeignKey("ApplicationUser")]
        public int ApplicationUserId { get; set; }
        public ApplicationUser User { get; set; } = null!;


        public List<OrderItem> OrderItems { get; set; } = null!;




    }
}
