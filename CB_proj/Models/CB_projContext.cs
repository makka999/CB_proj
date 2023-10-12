using System.Data.Entity;
using System.Reflection.Metadata;

namespace CB_proj.Models
{
    public class CB_projContext : DbContext
    {
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Password> Passwords { get; set; }
    }
}
