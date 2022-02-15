var builder = WebApplication.CreateBuilder(args);

const string allowSpecificOrigins = "localhost";

builder.Services.AddCors(o => o.AddPolicy(name: allowSpecificOrigins, builder =>
{
    builder.WithOrigins("http://localhost:3000/");
}));

builder.Services.AddControllers();

var app = builder.Build();

app.UseCors(x => x
    .AllowAnyMethod()
    .AllowAnyHeader()
    .SetIsOriginAllowed(origin => true) 
    .AllowCredentials()); 

app.UseAuthorization();

app.MapControllers();

app.Run();
