public class HomeController {
    [Required]
    [StringLength(100, MinimumLength=10)]
    public string Name {get;set;}

    [HttpPost]
    public ActionResult Create(Order order) {
        // Store in DB
    }

    [HttpGet]
    public ActionResult Create() {
        return View();
    }

    [HttpPost]
    public ActionResult About();
}