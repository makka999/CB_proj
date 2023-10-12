using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Reflection.Metadata;
using System.ComponentModel;

namespace CB_proj.Models
{
    public class Password
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int PasswordID { get; set; }
        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime DataCreate { get; set; }
       
        public string Salt { get; set; }
        public string PasswordHas { get; set; }


        //[Required, ForeignKey("Account")]
        [Required]
        public int AccountId { get; set; }
        public virtual Account Account { get; set; }
    }
}
