public class Test {
    [Required]
    [StringLength(100, MinimumLength=10)]
    public string Name {get;set;}

    [HttpPost]
    public ActionResult About();
}