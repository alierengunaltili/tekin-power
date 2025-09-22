import React from 'react';
import Script from 'next/script';

interface JsonLdProps {
  type: 'Organization' | 'LocalBusiness' | 'Product' | 'BreadcrumbList' | 'FAQPage';
  data: Record<string, any>;
}

const JsonLdSchema: React.FC<JsonLdProps> = ({ type, data }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <Script
      id={`jsonld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLdSchema;
