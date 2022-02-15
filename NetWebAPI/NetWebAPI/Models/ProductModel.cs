namespace NetWebAPI.Models
{
    public class ProductModel
    {
        public int ProductId { get; set; }

        public string ProductCurrency { get; set; } = "AUD";

        public string ProductName { get; set; } = "Sample Product";

        public string? ProductDescription { get; set; }

        public double ProductPrice { get; set; }
    }
}