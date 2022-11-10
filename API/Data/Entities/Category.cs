using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data.Entities
{
    public class Category : BaseEntity
    {

        public string Title { get; set; } = null!;

        public string Description { get; set; } = null!;

        public int ParentId { get; set; }

    }
}
