var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "print");

app.Run();
