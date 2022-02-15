using System.Net;
using Microsoft.AspNetCore.Mvc;
using NetWebAPI.Helpers;
using NetWebAPI.Models;

namespace NetWebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CurrencyController : ControllerBase
    {
        private readonly ILogger<CurrencyController> _logger;

        public CurrencyController(ILogger<CurrencyController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("conversion")]
        public ActionResult<double> Get(string currency)
        {
            var to = currency.Equals("usd") ? CurrencyEnum.USD : CurrencyEnum.GBP;
        
            return Ok(ConversionHelper.GetConversionRate(to));
        }

        [HttpGet]
        [Route("shipping")]
        public ActionResult<double> Get(double total) => Ok(ShippingCostHelper.GetShippingCost(total));
    }
}