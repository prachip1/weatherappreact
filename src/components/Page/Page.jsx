import React, { Fragment } from 'react';
import Header from '../Header';
import Form from '../Form';
import Error from '../Error';
import Loader from '../Loader';
import Forecast from '../Forecast';



import useForecast from '../../hooks/useForecast';

import styles from './Page.module.css';


const Page = () => {
    const { isError, isLoading, forecast, submitRequest} = useForecast();

    const onSubmit = value => {
        // call in here
         submitRequest(value);
    };
    
    return (
        
        
      
       <Fragment>
          <Header />
          {!forecast && (

          <div className={`${styles.box} position-relative`}>
              {/*Form goes here*/}
              {!isLoading && <Form submitSearch={onSubmit} />}
              {/*Error message goes here*/}
             {isError && <Error message ={ isError } />}
              {/*Loader goes here*/}
             {isLoading && <Loader />}
        </div>
        )}
             {/*Weather forecast goes here*/}
             {forecast && <Forecast forecast={forecast} />} 
             
        </Fragment>
      
       
    );
};

export default Page;