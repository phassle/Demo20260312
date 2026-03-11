namespace CompanyX.Integrations.ComplianceEngine;

/// <summary>
/// !! STOP RULE: This integration is business-critical !!
/// Validates transactions against regulatory rules (AML, KYC, MiFID II).
///
/// NEVER modify without explicit approval from compliance team.
/// Changes here can cause regulatory violations and fines.
/// </summary>
public class ComplianceValidator
{
    public async Task<ValidationResult> ValidateTransactionAsync(Transaction transaction)
    {
        // Demo: basic validation stub
        var result = new ValidationResult { IsValid = true };

        if (transaction.Amount > 15_000)
        {
            result.Flags.Add("LARGE_TRANSACTION: Requires enhanced due diligence");
        }

        if (string.IsNullOrEmpty(transaction.CounterpartyId))
        {
            result.IsValid = false;
            result.Flags.Add("MISSING_COUNTERPARTY: KYC check required");
        }

        return await Task.FromResult(result);
    }
}

public class Transaction
{
    public string Id { get; set; } = string.Empty;
    public decimal Amount { get; set; }
    public string Currency { get; set; } = "SEK";
    public string CounterpartyId { get; set; } = string.Empty;
    public DateTime Timestamp { get; set; }
}

public class ValidationResult
{
    public bool IsValid { get; set; }
    public List<string> Flags { get; set; } = new();
}
