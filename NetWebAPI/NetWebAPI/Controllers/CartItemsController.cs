using Microsoft.AspNetCore.Mvc;
using NetWebAPI.Models;

namespace NetWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartItemsController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<CartItemsController> _logger;

        public CartItemsController(ILogger<CartItemsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<CartItemsModel> Get()
        {
            return Enumerable.Range(1, 10).Select(index => new CartItemsModel
            {
                ProductName = DateTime.Now.AddDays(index),
                ProductPrice = Random.Shared.Next(-20, 55),
                ProductSummary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }
    }
}