import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Product.css';
import data from './ProductData.json';
import { ProductItem } from './Item/Product-Item';

const cnProduct = cn('Product');

export interface IProductProps {
  className?: string;
}

export const Product: React.SFC<IProductProps> = ({className}) => {
  const productItems = data.map((el) => (
    <ProductItem
      key={el.id}
      description={el.description}
      company={el.company}
      taste={el.taste}
      promo={el.promo}
      serving={el.serving}
      info={el.info}
      link={el.link}
      status={el.status}
    />
  ));

  return (
    <div className={`${cnProduct()} ${className}`}>
      {productItems}
    </div>
  );
}
