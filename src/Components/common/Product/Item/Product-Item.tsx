import { cn } from '@bem-react/classname';
import * as React from 'react';

import './Product-Item.css';

const cnProduct = cn('Product');

export interface IProductItemProps {
  className?: string;
  description?: string;
  company?: string;
  taste?: string;
  promo?: string;
  serving?: string;
  info?: string;
  status?: string;
}

export const ProductItem: React.SFC<IProductItemProps> = ({description, company, taste, promo, serving, info, status}) => (
  <div className={cnProduct('Item', {"status": status})}>
    <div className={cnProduct('Card')}>
      <div className={cnProduct('Description')}>{description}</div>
      <div className={cnProduct('Company')}>{company}</div>
      <div className={cnProduct('Taste')}>{taste}</div>
      <div className={cnProduct('Promo')}>{promo}</div>
      <img className={cnProduct('Image')} src="./img/cat.png" alt="Funbox cat"/>
      <div className={cnProduct('Serving')}>
        <div className={cnProduct('Weight')}>{serving}</div>
        <div className={cnProduct('Units')}>кг</div>
      </div>

    </div>
    <div className={cnProduct('Info')}>{info}</div>
  </div>
);
