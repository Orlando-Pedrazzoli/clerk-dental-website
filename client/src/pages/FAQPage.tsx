import { useState } from 'react';
import { ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';
import { getFaqData } from '../data/faq-data';
import type { FAQCategory } from '../data/faq-data';

// ============================================
// FAQ Accordion Item Component
// ============================================
interface FAQAccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function FAQAccordionItem({ question, answer, isOpen, onClick }: FAQAccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 px-4 flex items-center justify-between text-left hover:bg-blue-50/50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-lg"
        aria-expanded={isOpen}
      >
        <span className="text-gray-800 font-medium pr-4 text-base md:text-lg">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="px-4 pb-5 text-gray-600 leading-relaxed text-sm md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

// ============================================
// FAQ Category Section Component
// ============================================
interface FAQCategorySectionProps {
  category: FAQCategory;
  openItems: Set<string>;
  toggleItem: (itemId: string) => void;
}

function FAQCategorySection({ category, openItems, toggleItem }: FAQCategorySectionProps) {
  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" role="img" aria-hidden="true">{category.icon}</span>
        <h2 className="text-xl md:text-2xl font-bold text-gray-800">
          {category.title}
        </h2>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {category.items.map((item, index) => {
          const itemId = `${category.id}-${index}`;
          return (
            <FAQAccordionItem
              key={itemId}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.has(itemId)}
              onClick={() => toggleItem(itemId)}
            />
          );
        })}
      </div>
    </div>
  );
}

// ============================================
// Category Navigation Component
// ============================================
interface CategoryNavProps {
  categories: FAQCategory[];
  activeCategory: string | null;
  onCategoryClick: (categoryId: string) => void;
}

function CategoryNav({ categories, activeCategory, onCategoryClick }: CategoryNavProps) {
  return (
    <nav className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0">
      <div className="flex gap-2 min-w-max md:flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
              activeCategory === category.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
            }`}
          >
            <span className="mr-1.5">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>
    </nav>
  );
}

// ============================================
// Schema.org FAQ Structured Data
// ============================================
function generateFAQSchema(categories: FAQCategory[]) {
  const allQuestions = categories.flatMap((category) =>
    category.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    }))
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions,
  };
}

// ============================================
// Main FAQ Page Component
// ============================================
export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const { language, t } = useLanguage();

  const faqData = getFaqData(language);

  const toggleItem = (itemId: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const faqSchema = generateFAQSchema(faqData);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{t('faq.pageTitle')}</title>
        <meta 
          name="description" 
          content={t('faq.pageDescription')} 
        />
        <meta 
          name="keywords" 
          content="perguntas frequentes dentista, FAQ dentário, implantes dentários, ortodontia, branqueamento dentário, próteses dentárias, Lisboa" 
        />
        <link rel="canonical" href="https://www.centrodentariocolombo.com/faq" />
        
        {/* Open Graph */}
        <meta property="og:title" content={t('faq.pageTitle')} />
        <meta property="og:description" content={t('faq.pageDescription')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.centrodentariocolombo.com/faq" />
        
        {/* Schema.org FAQ Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
  {/* Wrapper com fundo azul e padding-top */}
  <div className="bg-gradient-to-r from-blue-600 to-blue-700 pt-20">
    {/* Hero Section */}
    <section className="text-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          {t('faq.heroTitle')}
        </h1>
        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
          {t('faq.heroDesc')}
        </p>
      </div>
    </section>
  </div>

        {/* Main Content */}
        <section className="max-w-4xl mx-auto px-4 py-12">
          {/* Category Navigation */}
          <CategoryNav 
            categories={faqData} 
            activeCategory={activeCategory}
            onCategoryClick={scrollToCategory}
          />

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqData.map((category) => (
              <div key={category.id} id={category.id}>
                <FAQCategorySection
                  category={category}
                  openItems={openItems}
                  toggleItem={toggleItem}
                />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              {t('faq.ctaTitle')}
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              {t('faq.ctaDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+351217711010"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {t('faq.ctaCall')}
              </a>
              <a
                href="https://wa.me/351217711010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}