using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MattDavinoProject.DTOs
{
    
        public class PhotosDTO
        {
            public int ID { get; set; }
            public string Url { get; set; }
            public string Description { get; set; }
            public DateTime DateAdded { get; set; }
            public bool IsProfilePic { get; set; }
        }
    }

