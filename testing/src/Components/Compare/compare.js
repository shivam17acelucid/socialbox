import React from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import CompareInfluencers from './CompareInfluencers/compareinfluencers';
import CompareLists from './CompareList/comparelists';
import './compare.scss';


function Compare() {
    return (
        <div className='compare_container'>
            <Navbar />
            <div className='compare_subcontainer'>
                <div className='Tabs'>
                    <Tabs
                        defaultTab="Tab1"
                        onChange={(tabId) => { console.log(tabId) }}
                    >
                        <TabList className='tablist'>
                            <Tab tabFor="Tab1">Compare Influencers</Tab>
                            <Tab tabFor="Tab2">Compare Lists</Tab>
                        </TabList>
                        <TabPanel tabId="Tab1">
                            <CompareInfluencers />
                        </TabPanel>
                        <TabPanel tabId="Tab2">
                            <CompareLists />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Compare;