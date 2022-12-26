import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Navbar from '../../Common/Sidebar/sidebar';
import Topbar from '../../Common/TopBar/index';
import './calculateinf.scss';
import { Input } from 'reactstrap';
import bdayIcon from '../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../Assets/Images/categoryIcon.png';
import locationIcon from '../../Assets/Images/locationIcon.png';
import Slider from '@mui/material/Slider';
import Select from 'react-select';

const options = [
    { value: 'Nano(1K-10K Followers)', label: 'Nano(1K-10K Followers)' },
    { value: 'Micro(10K-50K Followers)', label: 'Micro(10K-50K Followers)' },
    { value: 'Mid-Tier(50K-100K Followers)', label: 'Mid-Tier(50K-100K Followers)' },
    { value: 'Macro(100K-1M Followers)', label: 'Macro(100K-1M Followers)' },
    { value: 'Mega(1M + Followers)', label: 'Mega(1M + Followers)' },
];
const options1 = [
    { value: 'Nano(1K-10K Followers)', label: 'Nano(1K-10K Followers)' },
    { value: 'Micro(10K-50K Followers)', label: 'Micro(10K-50K Followers)' },
    { value: 'Mid-Tier(50K-100K Followers)', label: 'Mid-Tier(50K-100K Followers)' },
    { value: 'Macro(100K-1M Followers)', label: 'Macro(100K-1M Followers)' },
    { value: 'Mega(1M + Followers)', label: 'Mega(1M + Followers)' },
];

function CalculateCost() {

    const [stepActive, setStepActive] = useState(false);
    const [step1, setStep1] = useState(true);
    const [step2, setStep2] = useState(false);
    const [step3, setStep3] = useState(false);
    const [step4, setStep4] = useState(false);

    const [nanoClicked, setNanoClicked] = useState(false);
    const [microClicked, setMicroClicked] = useState(false);
    const [midTierClicked, setMidTierClicked] = useState(false);
    const [macroClicked, setMacroClicked] = useState(false);
    const [megaClicked, setMegaClicked] = useState(false);
    const [nanoMaxClicked, setNanoMaxClicked] = useState(false);
    const [microMaxClicked, setMicroMaxClicked] = useState(false);
    const [midTierMaxClicked, setMidTierMaxClicked] = useState(false);
    const [macroMaxClicked, setMacroMaxClicked] = useState(false);
    const [megaMaxClicked, setMegaMaxClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [minRangeFollowers, setMinRangeFollowers] = useState(1000)
    const [maxRangeFollowers, setMaxRangeFollowers] = useState(10000)
    const [silderRolled, setSliderRolled] = useState(false);
    const [sliderRolled1, setSlider1Rolled] = useState(false);
    const [isfilterFollowerClicked, setIsFilterFollowerClicked] = useState(false);
    const [filterFollowersApplied, setFilterFollowersApplied] = useState(false);

    const scale = value => {
        const previousMarkIndex = Math.floor(value / 25);
        const previousMark = (megaMaxClicked ? megaRange : macroMaxClicked ? macroRange : midTierMaxClicked ? midTierRange : microMaxClicked ? microRange : nanoMaxClicked ? nanoRange : followersRange)[previousMarkIndex];
        const remainder = value % 25;
        if (remainder === 0) {
            return previousMark.scaledValue;
        }
        const nextMark = (megaMaxClicked ? megaRange : macroMaxClicked ? macroRange : midTierMaxClicked ? midTierRange : microMaxClicked ? microRange : nanoMaxClicked ? nanoRange : followersRange)[previousMarkIndex + 1];
        const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
        return remainder * increment + previousMark.scaledValue;
    };

    const scale1 = value => {
        const previousMarkIndex1 = Math.floor(value / 25);
        const previousMark1 = (megaClicked ? megaRange : macroClicked ? macroRange : midTierClicked ? midTierRange : microClicked ? microRange : nanoClicked ? nanoRange : followersRange)[previousMarkIndex1];
        const remainder = value % 25;
        if (remainder === 0) {
            return previousMark1.scaledValue;
        }
        const nextMark = (megaClicked ? megaRange : macroClicked ? macroRange : midTierClicked ? midTierRange : microClicked ? microRange : nanoClicked ? nanoRange : followersRange)[previousMarkIndex1 + 1];
        const increment = (nextMark.scaledValue - previousMark1.scaledValue) / 25;
        return remainder * increment + previousMark1.scaledValue;
    };

    const nanoRange = [
        {
            value: 0,
            scaledValue: 1000,
            label: "1k"
        },
        {
            value: 25,
            scaledValue: 2500,
            label: "2.5k"
        },
        {
            value: 50,
            scaledValue: 5000,
            label: "5k"
        },
        {
            value: 75,
            scaledValue: 7500,
            label: "7.5k"
        },
        {
            value: 100,
            scaledValue: 10000,
            label: "10k"
        }
    ];

    const midTierRange = [
        {
            value: 0,
            scaledValue: 50000,
            label: "50k"
        },
        {
            value: 25,
            scaledValue: 60000,
            label: "60k"
        },
        {
            value: 50,
            scaledValue: 75000,
            label: "75k"
        },
        {
            value: 75,
            scaledValue: 90000,
            label: "90k"
        },
        {
            value: 100,
            scaledValue: 100000,
            label: "100k"
        }
    ];

    const macroRange = [
        {
            value: 0,
            scaledValue: 100000,
            label: "100k"
        },
        {
            value: 25,
            scaledValue: 250000,
            label: "250k"
        },
        {
            value: 50,
            scaledValue: 500000,
            label: "500k"
        },
        {
            value: 75,
            scaledValue: 750000,
            label: "750k"
        },
        {
            value: 100,
            scaledValue: 1000000,
            label: "1M"
        }
    ];

    const megaRange = [
        {
            value: 0,
            scaledValue: 1000000,
            label: "1M+"
        },
        {
            value: 25,
            scaledValue: 2500000,
            label: "2.5M+"
        },
        {
            value: 50,
            scaledValue: 5000000,
            label: "5M+"
        },
        {
            value: 75,
            scaledValue: 7500000,
            label: "7.5M+"
        },
        {
            value: 100,
            scaledValue: 10000000,
            label: "10M+"
        }
    ]

    const microRange = [
        {
            value: 0,
            scaledValue: 10000,
            label: "10k"
        },
        {
            value: 25,
            scaledValue: 20000,
            label: "20k"
        },
        {
            value: 50,
            scaledValue: 30000,
            label: "30k"
        },
        {
            value: 75,
            scaledValue: 40000,
            label: "40k"
        },
        {
            value: 100,
            scaledValue: 50000,
            label: "50k"
        }
    ];

    const followersRange = [
        {
            value: 0,
            scaledValue: 1000,
            label: "1k"
        },
        {
            value: 25,
            scaledValue: 5000,
            label: "5k"
        },
        {
            value: 50,
            scaledValue: 10000,
            label: "10k"
        },
        {
            value: 75,
            scaledValue: 25000,
            label: "25k"
        },
        {
            value: 100,
            scaledValue: 50000,
            label: "50k"
        },
        {
            value: 125,
            scaledValue: 100000,
            label: "100k"
        },
        {
            value: 150,
            scaledValue: 250000,
            label: "250k"
        },
        {
            value: 175,
            scaledValue: 500000,
            label: "500k"
        },
        {
            value: 200,
            scaledValue: 1000000,
            label: "1M"
        }
    ];

    function numFormatter(num) {
        if (num > 999 && num < 1000000) {
            return (num / 1000).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
        } else if (num >= 1000000) {
            return (num / 1000000).toFixed(0) + "M"; // convert to M for number from > 1 million
        } else if (num < 900) {
            return num; // if value < 1000, nothing to do
        }
    }

    const filterByFollowersRange = () => {
        setIsFilterFollowerClicked(true);
        setFilterFollowersApplied(true)
    }

    const filterDataByFollowersRange = () => {
        setIsFilterFollowerClicked(false);
    }

    useEffect(() => {
        if (selectedOption !== null) {
            if (selectedOption.label.includes('Mega(1M + Followers)')) {
                setMegaClicked(true);
                setMicroClicked(false);
                setMidTierClicked(false);
                setMacroClicked(false);
                setNanoClicked(false);
            }
            else if (selectedOption.label.includes('Macro(100K-1M Followers)')) {
                setMacroClicked(true);
                setMicroClicked(false);
                setMidTierClicked(false);
                setMegaClicked(false);
                setNanoClicked(false);
            }
            else if (selectedOption.label.includes('Mid-Tier(50K-100K Followers)')) {
                setMidTierClicked(true)
                setMicroClicked(false);
                setMacroClicked(false);
                setMegaClicked(false);
                setNanoClicked(false);
            }
            else if (selectedOption.label.includes('Micro(10K-50K Followers)')) {
                setMicroClicked(true)
                setMidTierClicked(false);
                setMacroClicked(false);
                setMegaClicked(false);
                setNanoClicked(false);
            }
            else if (selectedOption.label.includes('Nano(1K-10K Followers)')) {
                setNanoClicked(true)
                setMidTierClicked(false);
                setMacroClicked(false);
                setMegaClicked(false);
                setMicroClicked(false);
            }
        }
        console.log(nanoClicked);
    }, [selectedOption])

    useEffect(() => {
        if (selectedOption1 !== null) {
            if (selectedOption1.label.includes('Mega(1M + Followers)')) {
                setMegaMaxClicked(true);
                setMicroMaxClicked(false);
                setMidTierMaxClicked(false);
                setMacroMaxClicked(false);
                setNanoMaxClicked(false);
            }
            else if (selectedOption1.label.includes('Macro(100K-1M Followers)')) {
                setMacroMaxClicked(true);
                setMicroMaxClicked(false);
                setMidTierMaxClicked(false);
                setMegaMaxClicked(false);
                setNanoMaxClicked(false);
            }
            else if (selectedOption1.label.includes('Mid-Tier(50K-100K Followers)')) {
                setMidTierMaxClicked(true)
                setMicroMaxClicked(false);
                setMacroMaxClicked(false);
                setMegaMaxClicked(false);
                setNanoMaxClicked(false);
            }
            else if (selectedOption1.label.includes('Micro(10K-50K Followers)')) {
                setMicroMaxClicked(true)
                setMidTierMaxClicked(false);
                setMacroMaxClicked(false);
                setMegaMaxClicked(false);
                setNanoMaxClicked(false);
            }
            else if (selectedOption1.label.includes('Nano(1K-10K Followers)')) {
                setNanoMaxClicked(true)
                setMidTierMaxClicked(false);
                setMacroMaxClicked(false);
                setMegaMaxClicked(false);
                setMicroMaxClicked(false);
            }
        }
    }, [selectedOption1])


    return (
        <div className='calculate_container'>
            <Navbar />
            <div className='middle_pane_calculate'>
                <Topbar />
                <div className='middle_pane_content'>
                    <div className='steps_pane'>
                        <div className='steps_pane_part'>
                            <div className='steps_pane_title'>Step 1</div>
                            <div className='followers_title'>
                                Followers
                            </div>
                            <div className='followers_count'>
                                Any
                            </div>
                            <div className='budget_influencers_title'>Budegt / Influencers</div>
                            <div className='budget_influencers_value'> -- </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 2</div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Reels</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Static posts</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Videos</div>
                                </div>
                            </div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Swipeup Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'> ---</div>
                                    <div className='deliverables_title'>Igtv</div>
                                </div>
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 3</div>
                            <div className='filter_pane'>
                                <img src={bdayIcon} /><div className='filter_value'> -- </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={categoryIcon} /><div className='filter_value'> -- </div>
                            </div>
                            <div className='filter_pane'>
                                <img src={locationIcon} /><div className='filter_value'> -- </div>
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive'>
                            <div className='steps_pane_title'>Step 4</div>
                            <div className='cost_title'>Estimated Cost</div>
                            <div className='cost_value'> ₹ --</div>
                        </div>
                    </div>
                    {
                        step1 === true ?
                            <>
                                <div className='content_pane'>
                                    <div className='steps_title'>Step 1</div>
                                    <div className='pane_title'>Influencer Stats</div>
                                    <div className='filter_content'>
                                        Adjust sliders for the followers count needed for
                                        your Influencer groups
                                    </div>
                                    <div>
                                        <section className="modal_section">
                                            <div className="modal_option">
                                                <div className="modal_title">Followers Count</div>
                                                <div className="label_slider">Minimum</div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    {
                                                        silderRolled === true ?
                                                            <div className="followers_count_1">{numFormatter(scale1(minRangeFollowers))}</div>
                                                            :
                                                            <div className="followers_count_1">{numFormatter(minRangeFollowers)}</div>
                                                    }
                                                    <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                                                        <Select
                                                            defaultValue={selectedOption}
                                                            onChange={setSelectedOption}
                                                            options={options}
                                                        />
                                                    </div>
                                                </div>
                                                <Slider
                                                    value={minRangeFollowers}
                                                    onChange={(e, data) => {
                                                        setMinRangeFollowers(data)
                                                        setSliderRolled(true);
                                                    }}
                                                    marks={megaClicked ? megaRange : macroClicked ? macroRange : midTierClicked ? midTierRange : microClicked ? microRange : nanoClicked ? nanoRange : followersRange}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    scale={scale1}
                                                    valueLabelFormat={numFormatter}
                                                />
                                                <div style={{ paddingTop: '18px' }}>
                                                    <div className="label_slider">Maximum</div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                        {
                                                            sliderRolled1 === true ?
                                                                <div className="followers_count">{numFormatter(scale(maxRangeFollowers))}</div>
                                                                :
                                                                <div className="followers_count">{numFormatter(maxRangeFollowers)}</div>
                                                        }
                                                        <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                                                            <Select
                                                                defaultValue={selectedOption1}
                                                                onChange={setSelectedOption1}
                                                                options={options1}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <Slider
                                                    value={maxRangeFollowers}
                                                    onChange={(e, data) => {
                                                        setMaxRangeFollowers(data)
                                                        setSlider1Rolled(true);
                                                    }}
                                                    marks={megaMaxClicked ? megaRange : macroMaxClicked ? macroRange : midTierMaxClicked ? midTierRange : microMaxClicked ? microRange : nanoMaxClicked ? nanoRange : followersRange}
                                                    min={0}
                                                    max={100}
                                                    step={1}
                                                    scale={scale}
                                                    valueLabelFormat={numFormatter}
                                                />
                                                <div style={{
                                                    display: 'flex', justifyContent: 'space-between'
                                                }}>
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                    <div className='content_bottom_pane'>
                                        <div className='select_title_field'>
                                            Select the budget or the number of influencers
                                            required for marketing
                                        </div>
                                        <div style={{ paddingTop: '12px' }}>
                                            <label>Budegt (INR)</label>
                                            <span style={{ marginLeft: '2.2rem' }}> ₹ <Input className='input_box' /></span>
                                        </div>
                                        <div style={{ paddingTop: '12px' }}>
                                            <label>No of influencers</label>
                                            <span><Input className='input_box' /></span>
                                        </div>
                                    </div>
                                    <div>
                                        <Button>Next</Button>
                                    </div>
                                </div>
                                <div className='right_pane'>
                                    <div className='image1'></div>
                                    <div className='image2' style={{ opacity: '0.2' }}>
                                    </div>
                                    <span className='indicator' style={{ marginLeft: '2.5rem' }}>Specific</span>
                                    <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span>
                                </div>
                            </>
                            :
                            null
                    }

                </div>
            </div>
        </div>
    )
}
export default CalculateCost;