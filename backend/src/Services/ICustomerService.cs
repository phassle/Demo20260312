using CompanyX.Demo.Models;

namespace CompanyX.Demo.Services;

public interface ICustomerService
{
    Task<IEnumerable<Customer>> GetAllAsync();
    Task<Customer?> GetByIdAsync(int id);
    Task<int> GetCountAsync();
}
