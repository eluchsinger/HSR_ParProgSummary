public class Startup {
    // This method gets called by the runtime.
    // Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services) {
        services.AddTransient<IUserService, UserService>();
        //services.AddTransient<IUserService, FakeUserService>();
    }

    // This method gets called by teh runtime.
    // Use this method to configure the HTTP Request pipeline
    public Configure(IApplicationBuilder app,
        IHostingEnvironment env,
        ILoggerFactory loggerFactory) {
            app.UseMiddleware<UserMiddleware>();
    }
}