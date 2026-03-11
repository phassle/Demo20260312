using CompanyX.Demo.Models;

namespace CompanyX.Demo.Services;

public interface IMenuItemService
{
    Task<IEnumerable<MenuItem>> GetAllAsync();
    Task<MenuItem?> GetByIdAsync(int id);
}
