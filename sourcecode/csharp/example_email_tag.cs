public class EmailTagHelper:TagHelper {
    public string MailFor {get;set;}
    public override void Process(TagHelperContext context,
        TagHelperOutput output) {
        output.TagName = "a"; // Replaces <email> with <a> tag
        output.Attributes.SetAttribute("href", "mailto:" 
            + MailFor);
        output.Content.SetContent(MailFor);
    }
}