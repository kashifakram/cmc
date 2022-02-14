using System.Diagnostics;
using Microsoft.AspNetCore.Mvc.Formatters;

namespace NetWebAPI.Models
{
    public class CurencyModel
    {
        public CurrencyEnum Currency { get; set; }
        public CurrencyEnum ConvertTo { get; set; }

    }

    public enum CurrencyEnum
    {
        AUD,
        USD,
        GBP
    }
}
