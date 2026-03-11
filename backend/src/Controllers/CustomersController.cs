using Microsoft.AspNetCore.Mvc;
using CompanyX.Demo.Services;

namespace CompanyX.Demo.Controllers;

/// <summary>
/// Existing customer endpoints.
/// The workshop task (YT-1234) is to ADD a CSV export endpoint here.
/// </summary>
[ApiController]
[Route("api/v2/[controller]")]
public class CustomersController : ControllerBase
{
    private readonly ICustomerService _customerService;

    public CustomersController(ICustomerService customerService)
    {
        _customerService = customerService;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        var customers = await _customerService.GetAllAsync();
        return Ok(customers);
    }

    [HttpGet("{id:int}")]
    public async Task<IActionResult> GetById(int id)
    {
        var customer = await _customerService.GetByIdAsync(id);
        if (customer is null)
            return NotFound();
        return Ok(customer);
    }

    // TODO: YT-1234 — Add CSV export endpoint
    // See specs/YT-1234-customer-export.md for BDD scenarios
}
