export type CategoryType = "stories" | "careers" | "brands";

export interface CategoryLabelProps {
  category: CategoryType;
}

const categoryColors: Record<CategoryType, { label: string; classes: string }> =
  {
    stories: {
      label: "PMV Stories",
      classes: "bg-red-100 text-red-800",
    },
    careers: {
      label: "Careers",
      classes: "bg-green-100 text-green-800",
    },
    brands: {
      label: "Our brands",
      classes: "bg-blue-50 text-blue-600",
    },
  };

// The CategoryLabel component
export const CategoryLabel = ({ category }: CategoryLabelProps) => {
  const { classes, label } = categoryColors[category];

  return (
    <span
      className={`inline-block px-2 py-1 text-xs font-semibold uppercase rounded ${classes}`}
    >
      {label}
    </span>
  );
};
