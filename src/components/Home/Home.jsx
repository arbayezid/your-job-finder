import React from 'react';
import Banner from '../Header/Banner';
import Jobcategory from '../JobCategory/Jobcategory';
import FeatureList from '../FeatureList/FeatureList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Jobcategory></Jobcategory>
            <FeatureList></FeatureList>
        </div>
    );
};

export default Home;