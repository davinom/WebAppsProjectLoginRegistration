using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MattDavinoProject.Models;
using Microsoft.EntityFrameworkCore;

namespace MattDavinoProject.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        { }

        public DbSet<User> Users { get; set; }

        public DbSet<Photo> Photos { get; set; }
    }
}
