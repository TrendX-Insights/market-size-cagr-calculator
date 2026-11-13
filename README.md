# Open-Source Market Size & CAGR Calculator 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

A lightweight, production-ready JavaScript calculation engine for commercial market research, financial modeling, and investment due diligence. Designed for analysts, product teams, and founders forecasting market potential.

---

##  Live Web App Demo
This calculation library directly powers the interactive free tool:  
 **[TrendX Insights Market Size & CAGR Calculator](https://trendxinsights.com/market-size-cagr-calculator/)**

---

##  Key Features

* **Compound Annual Growth Rate (CAGR):** Multi-year growth calculation with variable intervals.
* **Trajectory Projections:** Generate complete year-by-year baseline, bull, and bear forecasts.
* **TAM / SAM / SOM Sizing:** Top-down market breakdown framework (Total Addressable Market, Serviceable Addressable Market, Serviceable Obtainable Market).
* **Multi-Currency & Large Unit Parser:** Formats millions ($M), billions ($B), and trillions ($T) seamlessly.

---

##  Quickstart & Code Example

```javascript
const MarketCalculator = require('./calculator.js');

// 1. Calculate Compound Annual Growth Rate (CAGR)
// From $45.8 Billion (2024) to $128.4 Billion (2032) across 8 years
const cagr = MarketCalculator.calculateCAGR(45.8, 128.4, 8);
console.log(`CAGR: ${(cagr * 100).toFixed(2)}%`); // 13.75%

// 2. Generate Full Multi-Year Projection Trajectory
const trajectory = MarketCalculator.generateYearlyForecast(2024, 2032, 45.8, 128.4);
console.table(trajectory);

// 3. Top-down TAM / SAM / SOM Breakdown
const sizing = MarketCalculator.calculateTAMSAMSOM(50000000000, 30, 8);
console.log(sizing);
// { tam: $50B, sam: $15B, som: $1.2B }
```

---

##  Mathematical Formulas

### 1. Compound Annual Growth Rate (CAGR)
$$\text{CAGR} = \left( \frac{\text{Value}_{\text{End}}}{\text{Value}_{\text{Start}}} \right)^{\frac{1}{n}} - 1$$

### 2. Market Size Trajectory
$$\text{Market Size}_{t} = \text{Base Value} \times (1 + \text{CAGR})^{t}$$

---

##  Real-World Industry Benchmarks & Reports

For benchmark market sizing data, actual growth rates, and competitive market shares calculated with this methodology, explore our syndicated research reports:

* **[Global AI Chip Market Size, Share & Forecast](https://trendxinsights.com/syndicated-market-research-reports/ai-chip-market/)**
* **[Edge AI Chip Market Outlook & Architecture Analysis](https://trendxinsights.com/syndicated-market-research-reports/edge-ai-chip-market/)**
* **[Disaster Recovery as a Service (DRaaS) Market Landscape](https://trendxinsights.com/syndicated-market-research-reports/disaster-recovery-as-a-service-market/)**
* **[Cloud Security & Infrastructure Market Report](https://trendxinsights.com/syndicated-market-research-reports/cloud-security-market/)**

---

##  License
This project is open-source under the [MIT License](LICENSE).  
Maintained by the research and engineering team at [TrendX Insights](https://trendxinsights.com).
