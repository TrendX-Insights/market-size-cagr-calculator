/**
 * Open-Source Market Size & CAGR Calculator Engine
 * Core formulas for CAGR, TAM/SAM/SOM breakdown, and Year-over-Year projections.
 * 
 * Maintained by TrendX Insights (https://trendxinsights.com)
 * Web App: https://trendxinsights.com/market-size-cagr-calculator/
 */

class MarketCalculator {
  /**
   * Calculate Compound Annual Growth Rate (CAGR)
   * Formula: ((End Value / Start Value) ^ (1 / Years)) - 1
   */
  static calculateCAGR(startValue, endValue, years) {
    if (startValue <= 0 || endValue <= 0 || years <= 0) {
      throw new Error("Values and years must be positive non-zero numbers.");
    }
    return Math.pow(endValue / startValue, 1 / years) - 1;
  }

  /**
   * Project future market size based on starting value and CAGR
   * Formula: Start Value * ((1 + CAGR) ^ Years)
   */
  static projectMarketSize(startValue, cagr, years) {
    return startValue * Math.pow(1 + cagr, years);
  }

  /**
   * Generate year-by-year trajectory table
   */
  static generateYearlyForecast(startYear, endYear, startValue, endValue) {
    const years = endYear - startYear;
    const cagr = this.calculateCAGR(startValue, endValue, years);
    const forecast = [];

    for (let i = 0; i <= years; i++) {
      const year = startYear + i;
      const value = startValue * Math.pow(1 + cagr, i);
      forecast.push({
        year: year,
        value: Number(value.toFixed(2)),
        cagr: Number((cagr * 100).toFixed(2))
      });
    }

    return forecast;
  }

  /**
   * Top-down TAM / SAM / SOM calculation
   */
  static calculateTAMSAMSOM(totalAddressableMarket, samPercentage, somPercentage) {
    const sam = totalAddressableMarket * (samPercentage / 100);
    const som = sam * (somPercentage / 100);
    return {
      tam: totalAddressableMarket,
      sam: Number(sam.toFixed(2)),
      som: Number(som.toFixed(2))
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MarketCalculator;
}
