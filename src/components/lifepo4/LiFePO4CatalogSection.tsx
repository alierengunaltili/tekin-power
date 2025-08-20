'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';

type Category = {
  id: string;
  title: string;
  subItems?: string[];
};

const CATEGORIES: Category[] = [
  { id: '12v-ec', title: '12.8V - Ekranlı', subItems: ['100AH', '300AH', '400AH', '600AH'] },
  { id: '25v-ec', title: '25.6V - Ekranlı', subItems: ['100AH', '200AH', '300AH'] },
  { id: '36v-ec', title: '36V - Ekranlı' },
  { id: '51v-ec', title: '51.2V - Ekranlı', subItems: ['100AH', '200AH'] },
  { id: 'prismatic', title: 'Prizmatik Hücreler', subItems: ['3.2V 150AH', '3.2V 230AH', '3.2V 280AH', '3.2V 102AH', '3.2V 314AH'] },
  { id: 'li-types', title: 'Lityum Akü Çeşitleri', subItems: ['25.6V 100AH', '25.6V 200AH'] },
  { id: 'unisun-d', title: 'Unisun Energy 51.2V 100 Ah LiFePO₄ Dijital Ekranlı' },
  { id: 'unisun', title: 'Unisun Energy 51.2V 100 Ah LiFePO₄ Lityum Akü' }
];

type Product = { id: string; title: string; image: string };

const buildProducts = (category: Category): Product[] => {
  // Placeholder görsel: public/lifepo4/2920369.jpg (gerekirse /akuplaceholder.jpg ile değiştirilebilir)
  const placeholder = '/akuplaceholder.jpg';
  if (!category.subItems || category.subItems.length === 0) {
    return [{ id: `${category.id}-single`, title: category.title, image: placeholder }];
  }
  // For categories with sub items, use sub item text as product title
  return category.subItems.map((s) => ({ id: `${category.id}-${s}`, title: s, image: placeholder }));
};

const CategoryTabs = ({ activeId, onChange }: { activeId: string; onChange: (id: string) => void }) => {
  return (
    <div className="relative">
      <div className="flex gap-3 overflow-x-auto no-scrollbar py-2">
        {CATEGORIES.map((cat) => {
          const active = cat.id === activeId;
          return (
            <button
              key={cat.id}
              onClick={() => onChange(cat.id)}
              className={
                `whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all ` +
                (active
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-transparent shadow'
                  : 'bg-white/5 text-white/80 border-white/20 hover:bg-white/10')
              }
            >
              {cat.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-900/20">
      <div className="relative aspect-[4/3] w-full">
        <Image src={product.image} alt={product.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4">
          <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <button className="pointer-events-auto rounded-xl bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/25">
              Teknik Özellikler
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-white/90">{product.title}</h4>
      </div>
    </div>
  );
};

const LiFePO4CatalogSection = () => {
  const [activeId, setActiveId] = useState<string>(CATEGORIES[0].id);

  const activeCategory = useMemo(() => CATEGORIES.find((c) => c.id === activeId)!, [activeId]);
  const products = useMemo(() => buildProducts(activeCategory), [activeCategory]);

  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        

        <CategoryTabs activeId={activeId} onChange={setActiveId} />

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiFePO4CatalogSection;


