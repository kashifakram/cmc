using NetWebAPI.Models;

namespace NetWebAPI.Helpers
{
    public static class ConversionHelper
    {
        public static double GetConversionRate(double amount, CurrencyEnum to)
        {
            return to switch
            {
                CurrencyEnum.USD => Convert.ToDouble(amount * 0.8),
                CurrencyEnum.GBP => Convert.ToDouble(amount * 0.5),
                _ => amount
            };
        }
    }
}
