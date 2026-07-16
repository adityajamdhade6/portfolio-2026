import React from "react";
import { FileText, Code, ExternalLink, BookOpen, BarChart3, Database, Award, Layers, TrendingUp, CheckCircle, HelpCircle } from "lucide-react";

interface CapstoneViewProps {
  pdfUrl?: string;
  pdfName?: string;
  colabUrl?: string;
}

// 1. FINANCIAL MARKET DYNAMICS
export const FinancialMarketView: React.FC<CapstoneViewProps> = ({ pdfUrl = "/assets/iit-financial-market.pdf", pdfName = "Financial_Market_Dynamics.pdf" }) => {
  return (
    <div className="space-y-12 text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
      {/* Download Action Banner */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-800 transition-all">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Full Research Report</h3>
            <p className="text-xs text-zinc-500 mt-0.5">PDF · Financial Market Dynamics (Stress Propagation)</p>
          </div>
        </div>
        <a
          href={pdfUrl}
          download={pdfName}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 hover:bg-blue-400 transition-colors w-full md:w-auto"
        >
          Download PDF Report
        </a>
      </div>

      {/* Intro */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Project Introduction</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          As a young data analyst at <strong className="text-zinc-200">FinScoop</strong>—a fictional Indian financial services company—I was tasked with understanding how market shocks can affect major financial institutions in India, such as <strong className="text-zinc-200">SBI, ICICI, HDFC, and Axis Bank</strong>.
        </p>
        <p className="text-zinc-400 text-sm md:text-base mt-4">
          My goal was to use Python & Linear Algebra to analyze how shocks in the market affect the stability of these financial institutions. Through this project, I gained practical skills in Python programming and understood how interconnected financial systems react to market shocks.
        </p>
      </div>

      {/* Model Inputs */}
      <div className="border border-zinc-900 bg-zinc-950/10 rounded-[20px] p-6 md:p-8">
        <h2 className="text-xl font-semibold text-white mb-4">Model Inputs & Parameters</h2>
        <p className="text-zinc-400 text-sm mb-6">
          For my analysis, I used a matrix <strong className="text-zinc-200">A</strong> representing the interconnectedness between four major financial institutions. Each entry reflects how much one institution is influenced by another.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <span className="text-2xl font-bold text-blue-400 font-mono">A</span>
            <h4 className="text-xs text-white uppercase tracking-wider mt-2 font-semibold">The System</h4>
            <p className="text-[11px] text-zinc-500 mt-1">Interconnected banking rules (who affects whom)</p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <span className="text-2xl font-bold text-blue-400 font-mono">b</span>
            <h4 className="text-xs text-white uppercase tracking-wider mt-2 font-semibold">The Shock</h4>
            <p className="text-[11px] text-zinc-500 mt-1">Pressure applied to market (inflation, regulation)</p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <span className="text-2xl font-bold text-blue-400 font-mono">x</span>
            <h4 className="text-xs text-white uppercase tracking-wider mt-2 font-semibold">The Unknown</h4>
            <p className="text-[11px] text-zinc-500 mt-1">How portfolios/banks must adjust to balance the shock</p>
          </div>
        </div>

        <h3 className="text-sm font-semibold text-white mb-3">Matrix Assumptions:</h3>
        <ul className="space-y-2 text-xs text-zinc-400 font-mono">
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500 mt-0.5">·</span>
            <span>Each institution is mainly influenced by itself (diagonal = 2)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500 mt-0.5">·</span>
            <span>Each institution is directly influenced by its neighbor (off-diagonal = -1)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500 mt-0.5">·</span>
            <span>No direct influence from institutions two steps away (zeroes elsewhere)</span>
          </li>
        </ul>
      </div>

      {/* Basics of Matrices */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Basics of Matrices in Financial Modelling</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h3 className="text-sm font-semibold text-white mb-2">Symmetry</h3>
            <p className="text-xs text-zinc-400">
              In the financial network, symmetry of matrices is crucial because it denotes reciprocal influence. If Bank A influences Bank B (represented by -1), does Bank B influence Bank A by the exact same amount? A matrix is symmetric only when the transpose of a matrix equals the matrix itself.
            </p>
          </div>
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h3 className="text-sm font-semibold text-white mb-2">Rank</h3>
            <p className="text-xs text-zinc-400 mb-2">
              The number of linearly independent rows in a matrix. If the rank is full (4 in this case), the banks act as distinct entities. If lower, some banks' behavior is entirely dependent on others (redundancy).
            </p>
            <p className="text-[11px] text-zinc-500 leading-relaxed font-mono p-2.5 bg-zinc-950/40 rounded border border-zinc-900">
              <strong>Example:</strong> Suppose Axis Bank always does exactly what SBI + ICICI does combined. Then the rank would be &lt; 4. If SBI drops 2% and ICICI drops 5%, Axis Bank must drop 7%. It's redundant.
            </p>
          </div>
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h3 className="text-sm font-semibold text-white mb-2">Determinant</h3>
            <p className="text-xs text-zinc-400">
              A scalar value derived from a matrix. If the determinant is non-zero, there is a specific predictable reaction to a shock. If it is zero, the system is singular/unstable.
            </p>
          </div>
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h3 className="text-sm font-semibold text-white mb-2">Trace</h3>
            <p className="text-xs text-zinc-400">
              The sum of values on the main diagonal. This represents the aggregate self-influence of the system—the total amount of internal stability present in the entire banking market. It measures how much each bank relies on its own internal capital, history, and policies.
            </p>
          </div>
        </div>
      </div>

      {/* Null Space */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 md:p-8 rounded-[20px]">
        <h3 className="text-sm font-semibold text-white mb-2">Null Space</h3>
        <p className="text-xs text-zinc-400 mb-6">
          The number of zero columns/rows of a matrix in Reduced Row Echelon Form. Represents hidden parameters.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl">
            <p className="font-semibold text-xs text-emerald-400 mb-1.5 font-mono">Empty Null Space (Best Case)</p>
            <p className="text-[11px] text-zinc-400">The system is transparent. If SBI or Axis Bank makes a move, the market will see it.</p>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 p-4 rounded-xl">
            <p className="font-semibold text-xs text-red-400 mb-1.5 font-mono">Non-Empty Null Space (Risky)</p>
            <p className="text-[11px] text-zinc-400">Enormous changes might be happening inside banks, but the dashboard shows calm. Risk is invisible.</p>
          </div>
        </div>
      </div>

      {/* Contagion */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Financial Network Contagion</h2>
        <p className="text-zinc-400 text-sm mb-6">
          Using Eigenvectors and Eigenvalues, we explore how market shocks propagate through the interconnected financial network.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h4 className="text-sm font-semibold text-white mb-2">Eigenvectors</h4>
            <p className="text-xs text-zinc-400">
              Represent fundamental market scenarios that the network naturally wants to move in (e.g. all banks drop together, or one rising while another drops).
            </p>
          </div>
          <div className="border border-zinc-900 p-6 rounded-[16px] bg-zinc-950/10">
            <h4 className="text-sm font-semibold text-white mb-2">Eigenvalues</h4>
            <p className="text-xs text-zinc-400">
              The scalar multiplier attached to that scenario—measures how intense a specific scenario becomes over time.
            </p>
            <ul className="text-[11px] font-mono text-zinc-500 space-y-1 mt-2.5">
              <li><span className="text-red-400">• &gt; 1 (Growth):</span> Problem grows into crisis</li>
              <li><span className="text-emerald-400">• &lt; 1 (Decay):</span> Shock fades away</li>
              <li><span className="text-zinc-400">• = 0:</span> Shock disappears instantly</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="bg-red-500/5 border border-red-500/10 p-5 rounded-xl">
            <h4 className="font-semibold text-xs text-red-400 mb-1.5 font-mono">Largest Eigenvalue: "Explosion Risk"</h4>
            <p className="text-[11px] text-zinc-400">Measures maximum amplification. High value = reactive and volatile banks. Low/Moderate = calm, absorbs shocks.</p>
          </div>
          <div className="bg-yellow-500/5 border border-yellow-500/10 p-5 rounded-xl">
            <h4 className="font-semibold text-xs text-yellow-400 mb-1.5 font-mono">Smallest Eigenvalue: "Sensitivity Risk"</h4>
            <p className="text-[11px] text-zinc-400">Measures minimum resistance. Tiny (near 0) = vulnerable. Larger value = robust system.</p>
          </div>
        </div>
      </div>

      {/* Stability Analysis */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Stability Analysis</h2>
        <p className="text-zinc-400 text-sm mb-6">
          To judge if the whole network is stable, analysts divide the largest by the smallest eigenvalue:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-[16px]">
            <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-mono">1-10</p>
            <p className="font-semibold text-xs text-emerald-400 font-mono uppercase mb-2">Stable</p>
            <p className="text-xs text-zinc-400">Gap between strongest and weakest response is small. Banks behave predictably.</p>
          </div>
          <div className="bg-red-500/5 border border-red-500/10 p-6 rounded-[16px]">
            <p className="text-3xl font-extrabold text-red-400 mb-1 font-mono">1000+</p>
            <p className="font-semibold text-xs text-red-400 font-mono uppercase mb-2">Unstable</p>
            <p className="text-xs text-zinc-400">System is unpredictable. Reacts wildly differently depending on shock angle.</p>
          </div>
        </div>
        <div className="border border-zinc-900 bg-zinc-950/10 p-5 rounded-xl text-xs">
          <h4 className="font-semibold text-white mb-1.5">Cayley-Hamilton Theorem Validation</h4>
          <p className="text-zinc-400">
            Every matrix has a unique characteristic equation. If the matrix itself is plugged into this equation, it results in a zero matrix. This validates the mathematical parameters of the interbank exposures vector model.
          </p>
        </div>
      </div>

      {/* Key Highlights */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Key Highlights</h2>
        <div className="grid grid-cols-1 gap-3.5">
          {[
            "The financial network satisfies reciprocal influence assumptions.",
            "Since the rank is full, all banks act as distinct entities—not dependent on each other.",
            "The determinant is non-zero: specific predictable reaction to shocks.",
            "The system is transparent (empty null space).",
            "The system is structurally unstable as the dominant eigenvalue > 1.",
            "Our portfolio is unique—cannot be explained just by the 2 biggest market forces.",
            "Dynamic simulation confirmed network instability."
          ].map((text, idx) => (
            <div key={idx} className="flex items-start gap-4 p-4 border border-zinc-900 rounded-[14px] bg-zinc-950/10">
              <span className="flex-shrink-0 grid h-7 w-7 place-items-center rounded-full bg-blue-500/10 text-blue-400 font-semibold text-xs font-mono">
                {idx + 1}
              </span>
              <p className="text-xs text-zinc-450 leading-relaxed mt-0.5">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Conclusion */}
      <div className="border-l-2 border-blue-500 bg-zinc-950/30 p-6 rounded-r-[16px]">
        <h3 className="text-sm font-semibold text-white mb-1 font-mono uppercase">Conclusion</h3>
        <p className="text-sm text-zinc-300">
          The simulation proves that the current financial network is fragile to withstand these specific market shocks without any external intervention.
        </p>
      </div>
    </div>
  );
};

// 2. SIMPLE THREADS BUSINESS & CAMPAIGN ANALYSIS
export const SimpleThreadsView: React.FC<CapstoneViewProps> = ({ pdfUrl = "/assets/iit-simple-threads.pdf", pdfName = "Simple_Threads_Business_Analysis.pdf" }) => {
  return (
    <div className="space-y-12 text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
      {/* Download Action Banner */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-800 transition-all">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
            <FileText size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Full Capstone Report</h3>
            <p className="text-xs text-zinc-500 mt-0.5">PDF · Business & Campaign Analysis</p>
          </div>
        </div>
        <a
          href={pdfUrl}
          download={pdfName}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 hover:bg-blue-400 transition-colors w-full md:w-auto"
        >
          Download PDF Report
        </a>
      </div>

      {/* Overview */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Company Overview</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          <strong className="text-zinc-200">Simple Threads</strong> is a boutique retail company specializing in selling curated clothing collections for both men and women. The company operates primarily through its online store and has built a growing customer base.
        </p>
      </div>

      {/* Data Sources */}
      <div className="border border-zinc-900 bg-zinc-950/10 rounded-[20px] p-6 md:p-8">
        <h3 className="text-base font-semibold text-white mb-6">Data Sources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "Customer_Information.csv", desc: "Demographic and basic customer information" },
            { name: "Product_Information.xlsx", desc: "Product details, categories, prices, attributes" },
            { name: "Discount_Information.xlsx", desc: "End-of-year promotional email campaign records" },
            { name: "Purchase_Information.xlsx", desc: "Q1 2025 purchases (January–March)" }
          ].map((source) => (
            <div key={source.name} className="border border-zinc-900 bg-zinc-950/30 p-4 rounded-xl">
              <p className="font-mono text-xs text-blue-400 mb-1">{source.name}</p>
              <p className="text-xs text-zinc-500">{source.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Analyst Objectives */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Analyst Objectives</h2>
        <p className="text-zinc-400 text-sm mb-6">
          I analyzed the database to help the management team gain actionable insights about:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BarChart3, label: "Business Performance" },
            { icon: UserCheck, label: "Customer Behavior" },
            { icon: TrendingUp, label: "Product Sales Trends" },
            { icon: Layers, label: "Campaign ROI" }
          ].map((item) => (
            <div key={item.label} className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center flex flex-col items-center">
              <item.icon className="text-blue-400 mb-2.5" size={24} />
              <p className="text-[11px] font-semibold text-white leading-tight">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Analysis */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Customer Analysis (Q1 2025)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-xl text-center">
            <span className="text-3xl font-bold text-blue-400 font-mono">22</span>
            <p className="text-xs text-white mt-1 font-semibold">Unique Customers</p>
            <p className="text-[10px] text-zinc-500">Active in Q1 2025</p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-xl text-center">
            <span className="text-3xl font-bold text-blue-400 font-mono">₹22,770</span>
            <p className="text-xs text-white mt-1 font-semibold">Total Revenue</p>
            <p className="text-[10px] text-zinc-500">Aggregate Gross</p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-6 rounded-xl text-center">
            <span className="text-3xl font-bold text-blue-400 font-mono">₹1,035</span>
            <p className="text-xs text-white mt-1 font-semibold">Average Spend</p>
            <p className="text-[10px] text-zinc-500">Per Customer Basket</p>
          </div>
        </div>

        <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
          <h3 className="text-sm font-semibold text-white mb-4">Behavioral Insights:</h3>
          <ul className="space-y-3 text-xs text-zinc-400">
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Customers are low-frequency but high-intent buyers—few customers, but meaningful spending.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Customer base is small and concentrated, indicating an early-stage or niche business.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Customers who received coupons showed higher average spending.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>Customers trust the brand enough to spend over ₹1,000 on average—healthy for a boutique retail business.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Sales Analysis */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Sales & Product Analysis</h2>
        <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm text-white">🏆 Popular Product: Green Skirt (Women)</p>
              <p className="text-xs text-zinc-500 mt-0.5">Most purchased item in Q1 2025</p>
            </div>
            <div className="sm:text-right">
              <p className="text-2xl font-bold text-blue-400 font-mono">5 Purchases</p>
              <p className="text-xs text-zinc-500">Retail price @ ₹900/-</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl">
            <h4 className="text-xs text-white uppercase tracking-wider font-semibold mb-2">👗 Women's Category Dominance</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Women's apparel dominates revenue, clearly outperforming men's products. Simple Threads is currently perceived as a stronger women's fashion brand.
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl">
            <h4 className="text-xs text-white uppercase tracking-wider font-semibold mb-2">🏷️ Pricing & Discount Sensitivity</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Regular customers are buying because they like the product and trust the brand, not because of aggressive discounting. Only 4 coupon codes were used out of 22 purchases (18.18% conversion rate).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. GOLD PRICE PREDICTION MODEL
export const GoldPredictionView: React.FC<CapstoneViewProps> = ({ colabUrl = "https://colab.research.google.com/drive/1B2eOqfkNBO9DGHflsSeinS6om39bOeib?usp=sharing" }) => {
  return (
    <div className="space-y-12 text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
      {/* Colab Notebook Action Banner */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-800 transition-all">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
            <Code size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Google Colab Notebook</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Machine Learning Model · Linear Regression</p>
          </div>
        </div>
        <a
          href={colabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 hover:bg-blue-400 transition-colors w-full md:w-auto"
        >
          View On Google Colab →
        </a>
      </div>

      {/* Project Overview */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          A machine learning model that predicts gold prices using Linear Regression, achieving <strong className="text-zinc-200">99.97% accuracy (R² Score)</strong> on historical trading data spanning 10 years (2013-2023).
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Accuracy", val: "99.97%" },
          { label: "Records", val: "2,583" },
          { label: "Years Data", val: "10" },
          { label: "Error Rate", val: "0.22%" }
        ].map((item) => (
          <div key={item.label} className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <p className="text-2xl font-bold text-blue-400 font-mono">{item.val}</p>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Python 3.12", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Google Colab"].map((tech) => (
            <span key={tech} className="border border-zinc-900 bg-zinc-950/30 px-3 py-1 rounded-[6px] text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Preprocessing */}
      <div className="border border-zinc-900 bg-zinc-950/10 rounded-[20px] p-6 md:p-8">
        <h3 className="text-base font-semibold text-white mb-4">Data Preprocessing</h3>
        <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Handled 5 missing values in Volume column using mean imputation</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Converted string-formatted numeric data (removed commas, K suffix)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Normalized percentage values to decimal representation</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Applied type conversion for all numeric columns</span>
          </li>
        </ul>
      </div>

      {/* Features Used */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Features Used</h2>
        <ul className="space-y-3 text-xs text-zinc-400">
          <li><strong className="text-zinc-200">Open Price:</strong> Opening price at session start</li>
          <li><strong className="text-zinc-200">High Price:</strong> Highest price during trading day</li>
          <li><strong className="text-zinc-200">Low Price:</strong> Lowest price during trading day</li>
          <li><strong className="text-zinc-200">Volume:</strong> Trading volume in thousands</li>
          <li><strong className="text-zinc-200">Change %:</strong> Daily percentage change</li>
        </ul>
      </div>

      {/* Performance */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">Model Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Training R² Score</p>
            <p className="text-2xl font-bold text-blue-400 font-mono mt-1">0.9997</p>
            <p className="text-[10px] text-zinc-500 mt-1">99.97% variance explained</p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl">
            <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Testing R² Score</p>
            <p className="text-2xl font-bold text-blue-400 font-mono mt-1">0.9997</p>
            <p className="text-[10px] text-zinc-500 mt-1">High generalization capacity</p>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-4">Key Achievements</h3>
        <ul className="space-y-2.5 text-xs text-zinc-400">
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>99.97% prediction accuracy (R² Score)</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>0.22% error on sample predictions</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Successfully processed 2,583 historical records</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Minimal overfitting (0.003% gap between train/test)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// 4. TITANIC SURVIVAL PREDICTION
export const TitanicPredictionView: React.FC<CapstoneViewProps> = ({ colabUrl = "https://colab.research.google.com/drive/1krehfJHOdwGobOE6s_f4HSBKeOA33agm?usp=sharing" }) => {
  return (
    <div className="space-y-12 text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
      {/* Colab Notebook Action Banner */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-800 transition-all">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
            <Code size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Google Colab Notebook</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Classification Model · Logistic Regression</p>
          </div>
        </div>
        <a
          href={colabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 hover:bg-blue-400 transition-colors w-full md:w-auto"
        >
          View On Google Colab →
        </a>
      </div>

      {/* Project Overview */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          A logistic regression classification model that predicts which Titanic passengers survived based on their characteristics, achieving <strong className="text-zinc-200">~80% accuracy</strong> on the test set.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Test Accuracy", val: "79.88%" },
          { label: "Records", val: "891" },
          { label: "Features", val: "8" },
          { label: "Train/Test Split", val: "80/20" }
        ].map((item) => (
          <div key={item.label} className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <p className="text-2xl font-bold text-blue-400 font-mono">{item.val}</p>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Scikit-learn", "Pandas", "NumPy", "Google Colab"].map((tech) => (
            <span key={tech} className="border border-zinc-900 bg-zinc-950/30 px-3 py-1 rounded-[6px] text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Characteristics */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Dataset Characteristics</h2>
        <ul className="space-y-2 text-xs text-zinc-400 font-mono">
          <li><strong>• Size:</strong> 891 rows × 11 original columns</li>
          <li><strong>• Target:</strong> Survived (1 = survived, 0 = not)</li>
          <li><strong>• Key Features:</strong> Pclass, Sex, Age, SibSp, Parch, Fare, Embarked</li>
        </ul>
      </div>

      {/* Preprocessing */}
      <div className="border border-zinc-900 bg-zinc-950/10 rounded-[20px] p-6 md:p-8">
        <h3 className="text-base font-semibold text-white mb-4">Data Preprocessing</h3>
        <ul className="space-y-2.5 text-xs text-zinc-400 font-mono">
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Filled 171 missing Age values with mean age</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Filled missing Embarked values with mode (Southampton)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Encoded categorical variables: Sex (male→0, female→1), Embarked (S→0, C→1, Q→2)</span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-blue-500">•</span>
            <span>Dropped non-essential columns: Name, Ticket</span>
          </li>
        </ul>
      </div>

      {/* Features Used */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Features Used</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
          {["PassengerId", "Pclass", "Sex", "Age", "SibSp", "Parch", "Fare", "Embarked"].map((feat) => (
            <div key={feat} className="border border-zinc-900 bg-zinc-950/20 py-2.5 rounded-lg text-xs text-white">
              {feat}
            </div>
          ))}
        </div>
      </div>

      {/* Performance */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-2">Model Performance</h3>
        <p className="text-3xl font-extrabold text-blue-400 font-mono">79.88%</p>
        <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-semibold">Test Set Accuracy</p>
        <p className="text-xs text-zinc-450 mt-2">Approximately 8 out of 10 test passengers correctly classified.</p>
      </div>

      {/* Sample Prediction */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-3">Sample Prediction</h3>
        <div className="space-y-3 font-mono text-xs">
          <div>
            <p className="text-zinc-500">// Test Input:</p>
            <p className="text-zinc-300 mt-0.5">(PassengerId=1, Pclass=3, Sex=0, Age=22, SibSp=1, Parch=0, Fare=7.25, Embarked=0)</p>
          </div>
          <div>
            <p className="text-zinc-500">// Prediction:</p>
            <p className="text-sm font-bold text-red-400 mt-0.5">Did Not Survive (0)</p>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-4">Key Achievements</h3>
        <ul className="space-y-2.5 text-xs text-zinc-400">
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>79.88% prediction accuracy</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Handled missing values (177 age, 2 embarked)</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Processed 891 total passenger records</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Gender (female) and Ticket Class (1st Class) showed the highest correlation with survival</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// 5. STREAMVERSE ETL PIPELINE
export const StreamverseEtlView: React.FC<CapstoneViewProps> = ({ colabUrl = "https://colab.research.google.com/drive/1pL5K7sTBh4DDFfcOyOQqpJGAMY9qx33p?usp=sharing" }) => {
  return (
    <div className="space-y-12 text-zinc-300 font-light leading-relaxed max-w-4xl mx-auto">
      {/* Colab Notebook Action Banner */}
      <div className="border border-zinc-900 bg-zinc-950/20 rounded-[20px] p-6 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-zinc-800 transition-all">
        <div className="flex items-center gap-4">
          <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
            <Code size={22} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Google Colab Notebook</h3>
            <p className="text-xs text-zinc-500 mt-0.5">Data Engineering · ETL Pipeline</p>
          </div>
        </div>
        <a
          href={colabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 hover:bg-blue-400 transition-colors w-full md:w-auto"
        >
          View On Google Colab →
        </a>
      </div>

      {/* Project Overview */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Project Overview</h2>
        <p className="text-zinc-400 text-sm md:text-base">
          A complete ETL (Extract, Transform, Load) pipeline for analyzing user streaming activity data on the StreamVerse platform. Processes 100 records of user watch history, handles data quality issues, and creates targeted data marts for high-value users.
        </p>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Records", val: "100+" },
          { label: "Countries", val: "4" },
          { label: "Genres", val: "4" },
          { label: "Mean Rating", val: "3.04" }
        ].map((item) => (
          <div key={item.label} className="border border-zinc-900 bg-zinc-950/20 p-5 rounded-xl text-center">
            <p className="text-2xl font-bold text-blue-400 font-mono">{item.val}</p>
            <p className="text-[10px] text-zinc-500 mt-1 uppercase tracking-wider font-semibold">{item.label}</p>
          </div>
        ))}
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Technical Stack</h2>
        <div className="flex flex-wrap gap-2">
          {["Python", "Pandas", "Google Colab", "CSV Processing"].map((tech) => (
            <span key={tech} className="border border-zinc-900 bg-zinc-950/30 px-3 py-1 rounded-[6px] text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pipeline Stages */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-6">ETL Pipeline Stages</h2>
        <div className="space-y-4">
          <div className="border border-zinc-900 bg-zinc-950/10 p-5 rounded-xl">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider font-mono mb-2">1. EXTRACT</h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Loaded "streamverse_activity.csv" into a pandas DataFrame for initial exploration. Dataset includes user_id, watch_date, video_id, watch_time_minutes, country, video_genre, and user_rating.
            </p>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/10 p-5 rounded-xl">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider font-mono mb-2">2. TRANSFORM</h4>
            <ul className="space-y-1 text-xs text-zinc-400 leading-relaxed">
              <li>• Filled NaN ratings with mean values (≈3.04)</li>
              <li>• Converted dates via pd.to_datetime(format="%d-%m-%Y")</li>
              <li>• Added watch_time_hours (watch_time_minutes / 60)</li>
            </ul>
          </div>
          <div className="border border-zinc-900 bg-zinc-950/10 p-5 rounded-xl">
            <h4 className="font-semibold text-xs text-white uppercase tracking-wider font-mono mb-2">3. LOAD</h4>
            <ul className="space-y-1 text-xs text-zinc-400 leading-relaxed">
              <li>• Exported clean data warehouse CSV</li>
              <li>• Created a separate data mart filter for USA users with ratings &gt; 4.5</li>
              <li>• Yielded 3 high-engagement records for targeted campaigns</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Dataset Columns</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-center">
          {["user_id", "watch_date", "video_id", "watch_time_minutes", "country", "video_genre", "user_rating", "watch_time_hours"].map((col) => (
            <div key={col} className="border border-zinc-900 bg-zinc-950/20 py-2.5 rounded-lg text-xs text-white">
              {col}
            </div>
          ))}
        </div>
      </div>

      {/* Coverage */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Coverage Dimensions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-zinc-900 p-5 rounded-xl bg-zinc-950/10">
            <p className="font-semibold text-xs text-white uppercase tracking-wider mb-2 font-mono">Countries Included</p>
            <p className="text-xs text-zinc-450 leading-relaxed">USA, Germany, India, UK</p>
          </div>
          <div className="border border-zinc-900 p-5 rounded-xl bg-zinc-950/10">
            <p className="font-semibold text-xs text-white uppercase tracking-wider mb-2 font-mono">Genres Represented</p>
            <p className="text-xs text-zinc-450 leading-relaxed">Action, Documentary, Horror, Comedy</p>
          </div>
        </div>
      </div>

      {/* Key Achievements */}
      <div className="border border-zinc-900 bg-zinc-950/10 p-6 rounded-xl">
        <h3 className="text-sm font-semibold text-white mb-4">Key Achievements</h3>
        <ul className="space-y-2.5 text-xs text-zinc-400">
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Handled real-world data issues: missing values, inconsistent date formats</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Identified top USA content consumers for targeted marketing campaigns</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Full pipeline automation from raw CSV to segmented data mart</span>
          </li>
          <li className="flex items-center gap-2.5">
            <span className="text-emerald-400">✅</span>
            <span>Created actionable insights for personalized content recommendations</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
