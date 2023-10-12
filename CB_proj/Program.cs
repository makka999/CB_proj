using CB_proj.Models;
using DevOne.Security.Cryptography.BCrypt;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

using (var db = new CB_projContext())
{

    //var accountInitial = new List<Account>
    //{
    //new Account{UserName="Admin"},
    //new Account{UserName="User"}
    //};
    //accountInitial.ForEach(s => db.Accounts.Add(s));
    //db.SaveChanges();
    
    //string SaltAdmin = BCryptHelper.GenerateSalt();
    //string SaltUser = BCryptHelper.GenerateSalt();
    
    //var passwordInitial = new List<Password>
    //{
    //new Password{AccountId=1,Salt = SaltAdmin,PasswordHas = BCryptHelper.HashPassword("admin",SaltAdmin),DataCreate = DateTime.Now },
    //new Password{AccountId=2,Salt = SaltUser,PasswordHas = BCryptHelper.HashPassword("user",SaltUser),DataCreate = DateTime.Now }
    //};
    //passwordInitial.ForEach(s => db.Passwords.Add(s));
    //db.SaveChanges();

}

app.Run();





