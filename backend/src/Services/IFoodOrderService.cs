using CompanyX.Demo.Models;

namespace CompanyX.Demo.Services;

public interface IFoodOrderService
{
    Task<IEnumerable<FoodOrder>> GetAllAsync();
    Task<FoodOrder?> GetByIdAsync(int id);
}
