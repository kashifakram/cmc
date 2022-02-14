namespace NetWebAPI.Models
{
    public class CartItemsModel
    {
        public int ProductId { get; set; }

        public string ProductCurrency { get; set; }

        public string ProductName { get; set; }

        public string? ProductSummary { get; set; }

        public double ProductPrice { get; set; }
    }
}