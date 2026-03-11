namespace CompanyX.Integrations.AzureDevOps;

/// <summary>
/// Client for Azure DevOps Git API.
/// Used by /commit-push-pr to create PRs programmatically.
///
/// In production this connects to Azure DevOps REST API.
/// For the demo workshop the agent uses git + az CLI directly.
/// </summary>
public class AzureDevOpsClient
{
    private readonly string _organization;
    private readonly string _project;
    private readonly string _pat;

    public AzureDevOpsClient(string organization, string project, string pat)
    {
        _organization = organization;
        _project = project;
        _pat = pat;
    }

    public async Task<PullRequest> CreatePullRequestAsync(
        string sourceBranch,
        string targetBranch,
        string title,
        string description)
    {
        // Demo: would POST to Azure DevOps REST API
        Console.WriteLine($"[AzDO] Creating PR: {sourceBranch} → {targetBranch}");
        return await Task.FromResult(new PullRequest
        {
            Id = 42,
            Url = $"https://dev.azure.com/{_organization}/{_project}/_git/trapets/pullrequest/42",
            Title = title,
            SourceBranch = sourceBranch,
            TargetBranch = targetBranch,
        });
    }
}

public class PullRequest
{
    public int Id { get; set; }
    public string Url { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string SourceBranch { get; set; } = string.Empty;
    public string TargetBranch { get; set; } = string.Empty;
}
