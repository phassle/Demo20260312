using CompanyX.Demo.Models;
using CompanyX.Demo.Services;
using Xunit;

namespace CompanyX.Demo.Tests;

public class CustomerServiceTests
{
    [Fact]
    public async Task GetAllAsync_ReturnsNonDeletedCustomers()
    {
        var sut = new CustomerService();
        var customers = await sut.GetAllAsync();
        Assert.NotEmpty(customers);
        Assert.All(customers, c => Assert.False(c.IsDeleted));
    }

    [Fact]
    public async Task GetByIdAsync_ExistingId_ReturnsCustomer()
    {
        var sut = new CustomerService();
        var customer = await sut.GetByIdAsync(1);
        Assert.NotNull(customer);
        Assert.Equal(1, customer.Id);
    }

    [Fact]
    public async Task GetByIdAsync_NonExistingId_ReturnsNull()
    {
        var sut = new CustomerService();
        var customer = await sut.GetByIdAsync(9999);
        Assert.Null(customer);
    }

    [Fact]
    public async Task GetByIdAsync_DeletedCustomer_ReturnsNull()
    {
        var sut = new CustomerService();

        // Arrange: Get a customer and soft-delete it
        var customers = await sut.GetAllAsync();
        var testCustomer = customers.First();
        var testId = testCustomer.Id;
        testCustomer.IsDeleted = true;

        // Act: try to retrieve the deleted customer
        var customer = await sut.GetByIdAsync(testId);

        // Assert: should return null (404) for consistency with GetAllAsync
        Assert.Null(customer);

        // Cleanup: restore state for other tests
        testCustomer.IsDeleted = false;
    }

    [Fact]
    public async Task GetCountAsync_Returns50()
    {
        var sut = new CustomerService();
        var count = await sut.GetCountAsync();
        Assert.Equal(50, count);
    }

    // TODO: YT-1234 — Add tests for CSV export
    // See specs/YT-1234-customer-export.md for BDD scenarios:
    //   - Admin exports → 200 + CSV
    //   - Non-admin → 403
    //   - > 10,000 rows → truncated
    //   - Empty DB → header only
}
