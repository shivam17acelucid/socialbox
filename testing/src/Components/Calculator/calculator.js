import React from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import CalculateInfluencers from './CalculateInfluencers/calculateinf';
import './calculator.scss';


function Calculator() {
    return (
        <div className='calculate_container'>
            <Navbar />
            <div className='calculate_subcontainer'>
                <div className='Tabs'>
                    <Tabs
                        defaultTab="Tab1"
                        onChange={(tabId) => { console.log(tabId) }}
                    >
                        <TabList className='tablist'>
                            <Tab tabFor="Tab1">Calculate Influencers Costs</Tab>
                            <Tab tabFor="Tab2">Calculate Lists Costs</Tab>
                        </TabList>
                        <TabPanel tabId="Tab1">
                            <CalculateInfluencers />
                        </TabPanel>
                        <TabPanel tabId="Tab2">
                            {/* <CalculateLists /> */}
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
export default Calculator;