import { categories } from "@/lib/mock-data";
import { CategoryCard } from "@/components/ui/CategoryCard";

export function CategoryGrid() {
  return (
    <section aria-label="Browse categories" className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </section>
  );
}
