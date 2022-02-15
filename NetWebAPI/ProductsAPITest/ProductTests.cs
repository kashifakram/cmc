using System.Linq;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using Microsoft.Extensions.Logging;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NetWebAPI;
using NetWebAPI.Controllers;

namespace ProductsAPITest
{
    [TestClass]
    public class ProductTests
    {
        [TestMethod]
        public void TestMeConversionRate_Returned()
        {

        ILogger<CartItemsController> logger = new Logger<CartItemsController>(new LoggerFactory());

        var controller = new CartItemsController(logger);

            var response = controller.Get();

            Assert.IsTrue(response != null);
        }
    }
}