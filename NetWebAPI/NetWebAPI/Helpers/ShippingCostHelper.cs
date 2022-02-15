namespace NetWebAPI.Helpers
{
    public static class ShippingCostHelper
    {
        public static int GetShippingCost(double cartAmount) => cartAmount <= 50 ? 10 : 20;
    }
}
