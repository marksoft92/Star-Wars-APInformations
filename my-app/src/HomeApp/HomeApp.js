
import React from 'react';
import { pageContents, listData } from '../data/dataStore.js';
import Header from '../Header/Header';
import List from '../List/List.js';

class HomeApp extends React.Component {
    render() {
        return (

            <section>
                <Header />
                <div>
                    <h1>{pageContents.title}</h1>
                    <h2>{pageContents.subtitle}</h2>
                    <List {...listData} />
                </div>
            </section>
        )
    }
}

export default HomeApp;