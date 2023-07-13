import React from 'react';
import './MenuPromo.css';
import {
  CreditCard,
  MapPin,
  BadgePercent,
  Package,
  ArrowLeftRight,
} from 'lucide-react';

const MenuPromo = () => {
  return (
    <div className="menuPromoMainDiv">
      <div className="iconsMenuPromo">
        <CreditCard size={45} style={{ marginLeft: '108px' }} />
        <p>
          PAGUE EM ATÉ 10x <br /> SEM JUROS
        </p>
      </div>
      <div className="iconsMenuPromo">
        <MapPin size={45} />
        <p>
          RETIRE GRÁTIS <br /> EM NOSSAS LOJAS
        </p>
      </div>
      <div className="iconsMenuPromo">
        <BadgePercent size={45} />
        <p>
          GANHE 20% DE <br /> DESCONTO*
        </p>
      </div>
      <div className="iconsMenuPromo">
        <Package size={45} />
        <p>
          FRETE GRÁTIS PARA <br /> REGIÕES SUL E SUDESTE*
        </p>
      </div>
      <div className="iconsMenuPromo">
        <ArrowLeftRight size={45} />
        <p style={{ marginRight: '108px' }}>PRIMEIRA TROCA GRÁTIS</p>
      </div>
    </div>
  );
};

export default MenuPromo;
