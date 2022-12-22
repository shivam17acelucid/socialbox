import React, { useEffect, useState } from 'react';
import Navbar from '../../Common/Sidebar/sidebar';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './listpage.scss';
import { Input, Label } from 'reactstrap';
import { MdOutlineAddBox } from "react-icons/md";
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { RiSubtractFill, RiAddFill } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { BsFilterLeft } from 'react-icons/bs';
import TopBar from '../../Common/TopBar';
import Sport from '../../Assets/Images/sport.jpg'
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


function Lists() {

    const [inputField, setInputField] = useState('');
    const [basketData, setBasketData] = useState([]);
    const [listInfluencersData, setListInfluencersData] = useState([]);
    const [listInfluencerDetails, setListInfluencerDetails] = useState([]);
    const [newPlanClicked, setNewPlanClicked] = useState(false);
    const [listName, setListName] = useState('');
    const [listData, setListData] = useState([]);
    const [reel, setReel] = useState(0);
    const [post, setPost] = useState(0);
    const [story, setStory] = useState(0);
    const [igtv, setIgtv] = useState(0);
    const [swipeUpStory, setswipeUpStory] = useState(0);
    const [video, setVideo] = useState(0);
    const [description, setDescription] = useState('');
    const [listDeleted, setListDeleted] = useState(false);


    const [autoSuggestedData, setAutoSuggestedData] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [suggestionIndex, setSuggestionIndex] = useState(0);
    const [suggestionsActive, setSuggestionsActive] = useState(false);
    const [value, setValue] = useState('');

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
    const [rangeEr, setRangeEr] = useState([0, 20]);
    const [silderRolled, setSliderRolled] = useState(false);
    const [silderErRolled, setSliderErRolled] = useState(false);
    const [sliderRolled1, setSlider1Rolled] = useState(false);
    const [isfilterFollowerClicked, setIsFilterFollowerClicked] = useState(false);
    const [isfilterErClicked, setIsFilterErClicked] = useState(false);
    const [filterErApplied, setFilterErApplied] = useState(false);
    const [filterFollowersApplied, setFilterFollowersApplied] = useState(false);

    let navigate = useNavigate();
    const userId = localStorage.getItem('id');
    const autoSuggestedArray = [];


    const searchInfluencers = () => {
        if (filterErApplied) {
            navigate(`/influencerslist/${value}/eRange=${rangeEr[0]}&${rangeEr[1]}`);
        }
        if (filterFollowersApplied) {
            navigate(`/influencerslist/${value}/followerRange=${scale1(minRangeFollowers)}&${scale(maxRangeFollowers)}`);
        }
        if (filterErApplied && filterFollowersApplied) {
            navigate(`/influencerslist/${value}/eRange=${rangeEr[0]}&${rangeEr[1]}/followerRange=${scale1(minRangeFollowers)}&${scale(maxRangeFollowers)}`);
        }
        if (!filterErApplied && !filterFollowersApplied) {
            navigate(`/influencerslist/${value}`);
        }
    }

    const fetchAllData = () => {
        const url = `http://localhost:4000/getrelatedinfluencers?inputField=`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((res) => {
                        res.map((item) => {
                            autoSuggestedArray.push(item.username)
                            setAutoSuggestedData(autoSuggestedArray)
                        })
                    })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchBasketsName = () => {
        const url = `http://localhost:4000/showCategorizedBasket`;
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                setBasketData(response)
            })
    }

    const handleRedirectToBasket = (item) => {
        navigate(`/basketInfluencers/${item.categoryName}`)
    }

    const handleCreateList = (listName, description, reel, post, story, igtv, swipeUpStory, video) => {
        const url = `http://localhost:4000/createList/${userId}`
        fetch((url), {
            method: 'POST',
            body: JSON.stringify({ listName, description, reel, post, story, igtv, swipeUpStory, video }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => { res.json() })
            .then((data) => {
                setListInfluencerDetails(data)
                setNewPlanClicked(false);
                localStorage.setItem('newList', listName);
            })
    }

    const handleAddPlan = () => {
        const data = newPlanClicked ? false : true;
        setNewPlanClicked(data);
    }

    const handleRedirectToList = (item) => {
        navigate(`/userLists/${item.listName}`)
    }

    const handleDeleteList = (item) => {
        const url = `http://localhost:4000/deleteList/${userId}?listName=${item.listName}`;
        fetch((url), {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then((res) => {
                setListDeleted(true);
            })
    }


    const getListData = () => {
        const url = `http://localhost:4000/getListData/${userId}`;
        fetch(url)
            .then((data) => {
                data.json()
                    .then((result) => {
                        setListData(result)
                    })
            })
    }

    useEffect(() => {
        fetchBasketsName();
        getListData();
        fetchAllData();
    }, []);

    useEffect(() => {
        getListData();
    }, [newPlanClicked]);

    useEffect(() => {
        getListData();
    }, [listDeleted]);

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setValue(query);
        if (query.length > 1) {
            const filterSuggestions = autoSuggestedData.filter(
                (suggestion) =>
                    suggestion.toLowerCase().indexOf(query) > -1
            );
            setSuggestions(filterSuggestions);
            setSuggestionsActive(true);
        } else {
            setSuggestionsActive(false);
        }
    };

    const handleClick = (e) => {
        navigate(`/profile/${e.target.innerText}`);
        setSuggestions([]);
        setValue('');
        setSuggestionsActive(false);
    };

    const Suggestions = () => {
        return (
            <>
                <div className="suggestions">
                    <div style={{
                        margin: '5px', padding: 0, fontFamily: 'Noto Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '18px',
                        lineHeight: '16px',
                        color: 'rgba(0, 0, 0, 0.7)'
                    }}>Influencers</div>
                    {suggestions.map((suggestion, index) => {
                        return (
                            <div
                                className={index === suggestionIndex ? "active" : ""}
                                key={index}
                                onClick={handleClick}
                            >
                                {suggestion}
                            </div>
                        );
                    })}
                </div>
            </>
        );
    };

    const handleFollowerFilterClicked = () => {
        setIsFilterFollowerClicked(value => !value)
    };

    const handleErFilterClicked = () => setIsFilterErClicked(value => !value);

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

    const ErRange = [
        {
            value: 0,
            scaledValue: 0,
            label: "0"
        },
        {
            value: 5,
            scaledValue: 5,
            label: "5"
        },
        {
            value: 10,
            scaledValue: 10,
            label: "10"
        },
        {
            value: 15,
            scaledValue: 15,
            label: "15"
        },
        {
            value: 20,
            scaledValue: 20,
            label: "20"
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

    const filterByErRange = () => {
        setIsFilterErClicked(true);
        setFilterErApplied(true)
    }

    const filterDataByFollowersRange = () => {
        setIsFilterFollowerClicked(false);
    }

    const filterDataByErRange = () => {
        setIsFilterErClicked(false);
    }

    const handleClearFilters = () => {
        setFilterErApplied(false);
        setFilterFollowersApplied(false);
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
        <>
            <div className='list_container'>
                <Navbar />
                <div className='lists_content'>
                    <TopBar />
                    <div style={{ display: 'flex' }}>
                        <div className='middle_pane_lists'>
                            <div className='list_headers'>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <input
                                        type="text"
                                        value={value}
                                        onChange={handleChange}
                                        placeholder='Search for influencers, categories...'
                                        className='input_search'
                                    />
                                    {suggestionsActive && <Suggestions />}
                                    {/* <input type='text' value={inputField} onChange={(e) => setInputField(e.target.value)} placeholder='Search for influencers, categoriest, topics...' className='input_search' /> */}
                                    <Button className='button_list' onClick={searchInfluencers}><AiOutlineSearch /></Button>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '7rem', paddingTop: '10px' }}>
                                    <Button style={{ marginRight: '12px', minWidth: '10rem', display: 'flex', justifyContent: 'space-around' }} onClick={filterByFollowersRange}>Followers count <BsFilterLeft /></Button>
                                    <Button style={{ minWidth: '10rem', display: 'flex', justifyContent: 'space-around' }} onClick={filterByErRange}>Engagement % <BsFilterLeft /></Button>
                                    {
                                        isfilterErClicked === true ?
                                            <section className="modal_section">
                                                <div className="modal_option">
                                                    <div>Engagement %</div>
                                                    <Slider
                                                        value={rangeEr}
                                                        onChange={(e, data) => {
                                                            setRangeEr(data)
                                                            setSliderErRolled(true);
                                                        }}
                                                        marks={ErRange}
                                                        min={0}
                                                        max={20}
                                                        step={1}
                                                    />
                                                    {
                                                        silderErRolled === true ?
                                                            <>
                                                                <div className="followers_count_1">Minimum ER: {rangeEr[0]}</div>
                                                                <div className="followers_count">Maximum ER: {rangeEr[1]}</div>
                                                            </>
                                                            :
                                                            <>
                                                                <div className="followers_count_1">Minimum ER: {rangeEr[0]}</div>
                                                                <div className="followers_count">Maximum ER: {rangeEr[1]}</div>
                                                            </>
                                                    }
                                                    <div style={{
                                                        display: 'flex', justifyContent: 'space-between'
                                                    }}>
                                                        <Button
                                                            color="primary"
                                                            onClick={filterDataByErRange}
                                                        >
                                                            Filter
                                                        </Button>
                                                        <Button
                                                            color="primary"
                                                            onClick={handleErFilterClicked}
                                                            style={{
                                                                background: '#D7D7D7', borderRadius: '3px', fontFamily: 'Noto Sans', fontStyle: 'normal',
                                                                fontWeight: 600,
                                                                fontSize: '12px',
                                                                lineHeight: '16px',
                                                                textAlign: 'center',
                                                                color: '#595959'
                                                            }}
                                                        >
                                                            Clear
                                                        </Button>
                                                    </div>
                                                </div>
                                            </section>
                                            :
                                            isfilterFollowerClicked === true ?
                                                <section className="modal_section">
                                                    <div className="modal_option">
                                                        <div className="modal_title">Followers Count</div>
                                                        <div>
                                                            <div className="label_slider">Minimum</div>
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
                                                        <div style={{ paddingTop: '36px' }}>
                                                            <div className="label_slider">Maximum</div>
                                                            <div style={{ display: 'flex', justifyContent: "flex-end" }}>
                                                                <Select
                                                                    defaultValue={selectedOption1}
                                                                    onChange={setSelectedOption1}
                                                                    options={options1}
                                                                />
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
                                                        {
                                                            silderRolled === true ?
                                                                <div className="followers_count_1">Minimum Followers Count: {scale1(minRangeFollowers)}</div>
                                                                :
                                                                <div className="followers_count_1">Minimum Followers Count: {minRangeFollowers}</div>
                                                        }
                                                        {
                                                            sliderRolled1 === true ?
                                                                <div className="followers_count">Maximum Followers Count: {scale(maxRangeFollowers)}</div>
                                                                :
                                                                <div className="followers_count">Maximum Followers Count: {maxRangeFollowers}</div>
                                                        }
                                                        <div style={{
                                                            display: 'flex', justifyContent: 'space-between'
                                                        }}>
                                                            <Button
                                                                color="primary"
                                                                onClick={filterDataByFollowersRange}
                                                            >
                                                                Filter
                                                            </Button>
                                                            <Button
                                                                color="primary"
                                                                onClick={handleFollowerFilterClicked}
                                                                style={{
                                                                    background: '#D7D7D7', borderRadius: '3px', fontFamily: 'Noto Sans', fontStyle: 'normal',
                                                                    fontWeight: 600,
                                                                    fontSize: '12px',
                                                                    lineHeight: '16px',
                                                                    textAlign: 'center',
                                                                    color: '#595959'
                                                                }}
                                                            >
                                                                Clear
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </section>
                                                : null
                                    }
                                    <Button style={{ marginLeft: '12px', minWidth: '10rem', display: 'flex', justifyContent: 'space-around' }} onClick={handleClearFilters}><AiOutlineClose /><span>Clear all filters</span></Button>
                                </div>
                            </div>
                            <div className='middle_pane_content'>
                                <div className='categorised_inf'>
                                    <div className='categorised_heading'>Top Trending Influencers Baskets</div>
                                    <div className='categorised_btn'>
                                        {basketData.map((item) =>
                                            <Button className='button_list'>{item.categoryName}</Button>
                                        )}
                                    </div>
                                </div>
                                <div className='influencers_basket'>
                                    {basketData.map((item) =>
                                        <div className='influencers_basket_box'>
                                            <div className='influencers_image'>
                                                <img src={`http://localhost:4000/uploads/${item.image}`} className="influencers_image" />
                                            </div>
                                            <div className='basket_right_pane'>
                                                <div className='influencers_category_header'>
                                                    Top {item.basketInfluencersCount} {item.categoryName} Influencers Bundle
                                                </div>
                                                <div className='basket_p'>
                                                    Boost your marketing campaigns with best travel influencers bundle covering top 20 influencers
                                                </div>
                                                <div className='influencers_footer_btn'>
                                                    <Button onClick={() => handleRedirectToBasket(item)}><span style={{ margin: 0 }}>View</span></Button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>

                        </div>
                        <div className="list_bar">
                            <>
                                <div className="headers_title">
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span className="headers">
                                            My Lists
                                        </span>
                                        <span className='add_list_btn' onClick={handleAddPlan}> + Add new</span>
                                    </div>
                                    {
                                        newPlanClicked ?
                                            <div className='overlay'>
                                                <div className='addList_section'>
                                                    <Label>Create New List</Label>
                                                    <Input type="text" placeholder="List Name" value={listName} onChange={(e) => { setListName(e.target.value) }} className="input_listname" />
                                                    <Input type='text' placeholder='Description' value={description} onChange={(e) => { setDescription(e.target.value) }} className="input_description" />
                                                    <Label style={{ marginTop: '12px' }}>Deliverables</Label>
                                                    <div>
                                                        <div className='deliverables_pane'>
                                                            <label>Reels</label>
                                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                                {
                                                                    reel === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setReel(reel - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{reel}</span>
                                                                <span onClick={() => { setReel(reel + 1) }}><RiAddFill /></span>

                                                            </div>
                                                            <label>Static Post</label>
                                                            <div>
                                                                {
                                                                    post === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setPost(post - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{post}</span>
                                                                <span onClick={() => { setPost(post + 1) }}><RiAddFill /></span>
                                                            </div>
                                                        </div>
                                                        <div className='deliverables_pane'>
                                                            <label>Stories</label>
                                                            <div>
                                                                {
                                                                    story === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setStory(story - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{story}</span>
                                                                <span onClick={() => { setStory(story + 1) }}><RiAddFill /></span>
                                                            </div>
                                                            <label>Igtv</label>
                                                            <div>
                                                                {
                                                                    igtv === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setIgtv(igtv - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{igtv}</span>
                                                                <span onClick={() => { setIgtv(igtv + 1) }}><RiAddFill /></span>
                                                            </div>
                                                        </div>
                                                        <div className='deliverables_pane'>
                                                            <label>Video</label>
                                                            <div>
                                                                {
                                                                    video === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setVideo(video - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{video}</span>
                                                                <span onClick={() => { setVideo(video + 1) }}><RiAddFill /></span>
                                                            </div>
                                                            <label>Swipe up Stories</label>
                                                            <div>
                                                                {
                                                                    swipeUpStory === 0 ?
                                                                        <span><RiSubtractFill /></span>
                                                                        :
                                                                        <span onClick={() => { setswipeUpStory(swipeUpStory - 1) }}><RiSubtractFill /></span>
                                                                }
                                                                <span className='deliverable_value'>{swipeUpStory}</span>
                                                                <span onClick={() => { setswipeUpStory(swipeUpStory + 1) }}><RiAddFill /></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                                        <Button variant="outlined" onClick={() => { handleCreateList(listName, description, reel, post, story, igtv, swipeUpStory, video) }}>Add</Button>
                                                        <Button onClick={handleAddPlan}>Cancel</Button>
                                                    </div>
                                                </div>
                                            </div> :
                                            null
                                    }
                                    {/* </div> */}
                                </div>
                                <div className="list_content">
                                    {
                                        listData.map((item) =>
                                            <div className="list_content_inner">
                                                <div className="list_head">
                                                    <span className='list_name'>{item.listName}</span>
                                                    {item.influencersCount}
                                                    <MdDelete onClick={() => { handleDeleteList(item) }} />
                                                </div>
                                                <div className='list_desc'>
                                                    {item.description}
                                                </div>
                                                <div className='list_footer'>
                                                    <div className='list_view'>
                                                        <Button onClick={() => { handleRedirectToList(item) }}>View</Button>
                                                    </div>
                                                    <div className='inf_count'>
                                                        {item.influencersData.length} Influencers
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Lists;