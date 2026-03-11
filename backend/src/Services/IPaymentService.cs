using CompanyX.Demo.Models;

namespace CompanyX.Demo.Services;

public interface IPaymentService
{
    Task<IEnumerable<Payment>> GetAllAsync();
    Task<Payment?> GetByIdAsync(int id);
}
