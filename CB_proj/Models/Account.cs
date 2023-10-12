using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using Microsoft.Extensions.Hosting;

namespace CB_proj.Models
{
    public class Account
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int AccountID { get; set; }
        [Required]
        public string UserName { get; set; }
        [EmailAddress]
        public string Email { get; set; }
        //[DefaultValue("false")]
        //public bool AdminRight { get; set; }

        //Blokada konta
        [DefaultValue("false")]
        public bool AccountBlock { get; set; }
        //wymagania dla urzytkownia co do hasła
        //Minimalna długość całego hasała
        [DefaultValue(8)]
        public int PasswordLength { get; set; }
        //Wymaganie Cyfr oraz znaki specjalne
        [DefaultValue("false")]
        public bool WymagaCyfryZnak { get; set; }
        //Wymaganie małych i duzych liter
        [DefaultValue("false")]
        public bool WymagaMaleDuze { get; set; }
        //Ważność hasła dla użytkownika
        [DefaultValue(30)]
        public int DataDeadline { get; set; }
        //Hasło do resetu
        [DefaultValue("false")]
        public bool PasswordWymagaResetu { get; set; }


        public virtual List<Password> Passwords { get; set; }


    }
}
