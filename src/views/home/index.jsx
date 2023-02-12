import { ArrowRightOutlined } from '@ant-design/icons';
import { MessageDisplay } from '@/components/common';
import { ProductShowcaseGrid } from '@/components/product';
import { FEATURED_PRODUCTS, SHOP } from '@/constants/routes';
import {
  useDocumentTitle, useFeaturedProducts, useScrollTop
} from '@/hooks';

import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  useDocumentTitle('ENVIE');
  useScrollTop();

  const {
    featuredProducts,
    fetchFeaturedProducts,
    isLoading: isLoadingFeatured,
    error: errorFeatured
  } = useFeaturedProducts(99);
  
  return (
    <main className="content">
      <div className="home">
        <div className="banner">
          <div className="banner-desc">
            <h1 style={{fontSize: '45px'}} className="text-thin">
              <strong>Miglioriamo</strong>
              &nbsp;insieme il nostro&nbsp;
              <strong>territorio</strong>
            </h1>
            <p>
            Ogni piccola decisione porta a un miglioramento collettivo, miglioriamo il
            nostro ambiente supportando i negozi più sostenibili
            </p>
            <br />
            <Link to={'https://google.com'} className="button">
              Scopri di più &nbsp;
              <ArrowRightOutlined />
            </Link>
          </div>
          {/* <div className="banner-img"><img src={bannerImg} alt="" /></div> */}
        </div>
        <div className="display">
          <div className="display-header">
            <h1>Bar negozi</h1>
            <Link to={FEATURED_PRODUCTS}>Vedi tutti</Link>
          </div>
          {(errorFeatured && !isLoadingFeatured) ? (
            <MessageDisplay
              message={errorFeatured}
              action={fetchFeaturedProducts}
              buttonLabel="Try Again"
            />
          ) : (
            <ProductShowcaseGrid
              products={featuredProducts}
              skeletonCount={99}
            />
          )}
        </div>
        
      </div>
    </main>
  );
};

export default Home;
