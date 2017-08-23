// Registriert neue Middleware
app.Use(async (context, next) => {
    System.Diagnostics.Debug
    	.WriteLine("Handling request");
    await next.Invoke();
    System.Diagnostics.Debug
    	.WriteLine("Finished handling request");
});

// Erzeugt Verzweigung fuer den angegebenen Anfragepfad.
app.Map("/logging", builder => {
    builder.Run(async (context) => {
        await context.Response.WriteAsync("Hello World");
    })
});

// Terminiert den Request, keine 
// weitere Middlewares werden aufgerufen.
app.Run(async (context) => {
    await context.Response.WriteAsync("Hello World");
});