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
  link?: string;
  status?: string;
}

export interface IProductItemState {
  selected?: boolean;
}

export class ProductItem extends React.Component <IProductItemProps, IProductItemState> {
  constructor(props: IProductItemProps) {
    super(props);

    this.selectItem = this.selectItem.bind(this);

    this.state = {
      selected: false
    };
  }

  selectItem(e: React.MouseEvent) {
    this.setState({
      selected: !this.state.selected
    });
  }

  render() {
    const productInfo = !this.state.selected ?
      <>
        Чего сидишь? Порадуй котэ
        <a className={cnProduct('Link')} href={this.props.link} onClick={this.selectItem}>купи</a>
      </> :
      this.props.info;

    return (
      <div className={cnProduct('Item', {"status": this.props.status, "selected": this.state.selected})}>
        <div className={cnProduct('Card')} onClick={this.selectItem}>
          <div className={cnProduct('Description')}>
            <div className={cnProduct('DescriptionText')}>{this.props.description}</div>
            <div className={cnProduct('Hint')}>Котэ не одобряет?</div>
          </div>
          <div className={cnProduct('Company')}>{this.props.company}</div>
          <div className={cnProduct('Taste')}>{this.props.taste}</div>
          <div className={cnProduct('Promo')}>{this.props.promo}</div>
          <img className={cnProduct('Image')} src="./img/cat.png" alt="Funbox cat"/>
          <div className={cnProduct('Serving')}>
            <div className={cnProduct('Weight')}>{this.props.serving}</div>
            <div className={cnProduct('Units')}>кг</div>
          </div>
        </div>
        <div className={cnProduct('Info')}>{
          (!this.props.status) ?
            productInfo :
            `Печалька, ${this.props.taste} закончился.`
        }
        </div>
      </div>
    );
  }
};
