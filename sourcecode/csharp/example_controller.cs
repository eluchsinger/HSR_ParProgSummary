[Route("accounts")]
[Authorize]
public class AccountController {
    AccountService accSvc;
    public AccountController(AccountService accountService)
    { this.accSvc = accountService; }

    [HttpGet("{accountNr}")]
    public AccountViewModel Get(string accNr)
    {
        return new AccountViewModel(accSvc.GetAccount(accNr));
    }

    [HttpGet("transactions")]
    public TransactionSearchResult GetTransactions(
        [FromQuery]TransactionSearchQuery query)
    {
        return accSvc.GetTransactions(
            User.FindFirst(SecurityClaims.AccountIdClaim).Value,
             query);
    }
}