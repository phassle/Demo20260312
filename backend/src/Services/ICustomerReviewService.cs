using CompanyX.Demo.Models;

namespace CompanyX.Demo.Services;

public interface ICustomerReviewService
{
    Task<IEnumerable<CustomerReview>> GetAllAsync();
    Task<CustomerReview?> GetByIdAsync(int id);
}
