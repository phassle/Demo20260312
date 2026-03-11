namespace CompanyX.Integrations.YouTrack;

/// <summary>
/// Client for YouTrack issue tracker API.
/// Used by the refine-story subagent to read/write issues.
///
/// In production this connects to YouTrack REST API.
/// For the demo workshop this returns mock data.
/// </summary>
public class YouTrackClient
{
    private readonly string _baseUrl;
    private readonly string _token;

    public YouTrackClient(string baseUrl, string token)
    {
        _baseUrl = baseUrl;
        _token = token;
    }

    public async Task<YouTrackIssue> GetIssueAsync(string issueId)
    {
        // Demo: return mock issue
        return await Task.FromResult(new YouTrackIssue
        {
            Id = issueId,
            Summary = "Customer export CSV endpoint",
            Description = "Admin users should be able to export customers as CSV. " +
                          "Only admins. Max 10,000 rows.",
            State = "Open",
            Assignee = "developer@trapets.se",
            Reporter = "po@trapets.se",
            Created = DateTime.UtcNow.AddDays(-3),
        });
    }

    public async Task UpdateIssueDescriptionAsync(string issueId, string appendMarkdown)
    {
        // Demo: would POST to YouTrack REST API
        Console.WriteLine($"[YouTrack] Appending BDD scenarios to {issueId}");
        await Task.CompletedTask;
    }
}

public class YouTrackIssue
{
    public string Id { get; set; } = string.Empty;
    public string Summary { get; set; } = string.Empty;
    public string Description { get; set; } = string.Empty;
    public string State { get; set; } = string.Empty;
    public string Assignee { get; set; } = string.Empty;
    public string Reporter { get; set; } = string.Empty;
    public DateTime Created { get; set; }
}
