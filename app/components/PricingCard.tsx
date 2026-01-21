import Icon from "./Icon";
import Link from "next/link";

interface PricingCardProps {
  tier: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaText: string;
  variant: "primary" | "outline";
  recommended?: boolean;
}

export default function PricingCard({
  tier,
  price,
  period = "",
  description,
  features,
  ctaText,
  variant,
  recommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`pricing-card bg-white p-10 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 relative ${
        variant === "primary"
          ? "border-2 border-primary"
          : "border border-slate-200"
      }`}
    >
      {recommended && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded">
          Recommended
        </div>
      )}

      <div className="mb-8">
        <h3
          className={`text-xs font-bold uppercase tracking-widest mb-3 ${
            variant === "primary" ? "text-primary" : "text-slate-500"
          }`}
        >
          {tier}
        </h3>
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-slate-900">$</span>
          <span className="text-5xl font-bold text-slate-900">{price}</span>
          {period && (
            <span className="text-slate-500 font-medium">{period}</span>
          )}
        </div>
        <p className="text-sm text-slate-600 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex-grow">
        <ul className="space-y-4 mb-10">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-sm text-slate-900"
            >
              <Icon
                name="check_circle"
                size={20}
                className="text-primary flex-shrink-0 mt-0.5"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/request-for-quotation"
        className={`button-text-standard w-full h-14 font-bold uppercase tracking-widest text-xs transition-all flex items-center justify-center ${
          variant === "primary"
            ? "bg-primary text-white hover:bg-primary-dark hover:shadow-xl"
            : "border-2 border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900"
        }`}
      >
        {ctaText}
      </Link>
    </div>
  );
}
