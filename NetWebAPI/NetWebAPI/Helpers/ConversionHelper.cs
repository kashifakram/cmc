using NetWebAPI.Models;

namespace NetWebAPI.Helpers
{
    public static class ConversionHelper
    {
        public static double GetConversionRate(CurrencyEnum to)
        {
            return to switch
            {
                CurrencyEnum.USD => Convert.ToDouble(0.8),
                CurrencyEnum.GBP => Convert.ToDouble(0.5),
                _ => 1.0
            };
        }
    }
}
