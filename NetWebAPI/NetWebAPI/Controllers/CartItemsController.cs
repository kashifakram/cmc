using System.Net;
using Microsoft.AspNetCore.Mvc;
using NetWebAPI.Models;

namespace NetWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartItemsController : ControllerBase
    {
        private static readonly string[] ProductDescriptions = new[]
        {
            "Product 0 Summary", "Product 1 Summary", "Product 2 Summary", "Product 3 Summary", "Product 4 Summary", "Product 5 Summary", "Product 6 Summary", "Product 7 Summary", "Product 8 Summary", "Product 9 Summary", "Product 10 Summary", "Product 10 Summary"
        };

        private static readonly string[] ProductNames = new[]
        {
            "Product0", "Product1", "Product2", "Product3", "Product4", "Product5", "Product6", "Product7", "Product8", "Product9", "Product10", "Product10"
        };

        private readonly ILogger<CartItemsController> _logger;

        public CartItemsController(ILogger<CartItemsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductModel>> Get()
        {
            var result = Enumerable.Range(1, 10).Select(index => new ProductModel
            {
                ProductName = ProductNames[index],
                ProductPrice = Random.Shared.Next(10, 75),
                ProductDescription = ProductDescriptions[index],
                ProductCurrency = "AUD",
                ProductId = index
            })
            .ToArray();

            return Ok(result);
        }

        [HttpPost("{products}")]
        [Route("checkout")]
        public HttpResponseMessage Post(List<ProductModel> products) => new()
        {
            Content = new StringContent("success"),
            ReasonPhrase = "checked out successfully",
            StatusCode = (HttpStatusCode.Created),
        };
        
    }
}