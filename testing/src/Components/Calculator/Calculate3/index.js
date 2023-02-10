import React, { useEffect, useState } from "react";
import TopBar from "../../../Common/TopBar";
import Navbar from "../../../Common/Sidebar/sidebar";
import './index.scss';
import NFormatter from "../../../Common/NumberFormatter/numFormatter";
import { useParams, useNavigate } from "react-router-dom";
import bdayIcon from '../../../Assets/Images/bdayIcon.png';
import categoryIcon from '../../../Assets/Images/categoryIcon.png';
import locationIcon from '../../../Assets/Images/locationIcon.png';
import { Input } from 'reactstrap';
import Button from '@mui/material/Button';
import { components } from "react-select";
import PropTypes from "prop-types";
import { default as ReactSelect } from "react-select";

const ageGroup = [
    { value: "0-17", label: "0 - 17" },
    { value: "18-24", label: "18 - 24" },
    { value: "25-34", label: "25 - 34" },
    { value: "35-54", label: "35 - 54" },
    { value: "55+", label: "55+" },
];

const genderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
]

const categoryOptions = [
    { value: 'Sports', label: 'Sports' },
    { value: 'Art', label: 'Art' },
    { value: 'Bollywood', label: 'Bollywood' },
    { value: 'Cinema', label: 'Cinema' },
    { value: 'Beauty', label: 'Beauty' },
    { value: 'Comedy', label: 'Comedy' },
    { value: 'Community Page', label: 'Community Page' },
    { value: 'Makeup', label: 'Makeup' },
    { value: 'Dancer', label: 'Dancer' },
    { value: 'Education', label: 'Education' },
    { value: 'Fashion', label: 'Fashion' },
    { value: 'Fitness', label: 'Fitness' },
    { value: 'Food', label: 'Food' },
    { value: 'Lifestyle', label: 'Lifestyle' },
    { value: 'Media', label: 'Media' },
    { value: 'Model', label: 'Model' },
    { value: 'Mom', label: 'Mom' },
    { value: 'Music', label: 'Music' },
    { value: 'Other', label: 'Other' },
    { value: 'Parenting', label: 'Parenting' },
    { value: 'Personal Care', label: 'Personal Care' },
    { value: 'Tech', label: 'Tech' },
    { value: 'Travel', label: 'Travel' },
]

const regionOptions = [
    { label: 'AndhraPradesh', value: 'AndhraPradesh' },
    { label: 'Andaman&NicobarIslands', value: 'Andaman&NicobarIslands' },
    { label: 'ArunachalPradesh', value: 'ArunachalPradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chandigarh', value: 'Chandigarh' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Dadra&NagarHaveli', value: 'Dadra&NagarHaveli' },
    { label: 'TamilNadu', value: 'TamilNadu' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Jammu&Kashmir', value: 'Jammu&Kashmir' },
    { label: 'HimachalPradesh', value: 'HimachalPradesh' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Ladakh', value: 'Ladakh' },
    { label: 'Lakshadweep', value: 'Lakshadweep' },
    { label: 'MadhyaPradesh', value: 'MadhyaPradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha(Orissa)', value: 'Odisha(Orissa)' },
    { label: 'Puducherry(Pondicherry)', value: 'Puducherry(Pondicherry)' },
    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttarakhand(Uttaranchal)', value: 'Uttarakhand(Uttaranchal)' },
    { label: 'UttarPradesh', value: 'UttarPradesh' },
    { label: 'Westbengal', value: 'Westbengal' },
]

const cityOptions = [
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Ladakh', value: 'Ladakh' },
    { label: 'Lakshadweep', value: 'Lakshadweep' },
    { label: 'MadhyaPradesh', value: 'MadhyaPradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
]

function CalculateFilters() {

    const [optionSelected, setOptionSelected] = useState(null);
    const [gender, setGender] = useState('');
    const [categories, setCategories] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);
    const [ageString, setAgeString] = useState('');
    const [categoryString, setCategoryString] = useState('');
    const [cityString, setCityString] = useState('');
    const [regionString, setRegionString] = useState('')
    const params = useParams();
    const navigate = useNavigate();

    const handleNext = () => {
        navigate(`/calculate/${params.budget}/${params.followerRange}/${params.deliverables}/demography=age=${ageString}&gender=${gender.value}&category=${categoryString}&city=${cityString}&region=${regionString}`)
    }

    const MySelect = props => {
        if (props.allowSelectAll) {
            return (
                <ReactSelect
                    {...props}
                    options={[props.allOption, ...props.options]}
                    onChange={selected => {
                        if (
                            selected !== null &&
                            selected.length > 0 &&
                            selected[selected.length - 1].value === props.allOption.value
                        ) {
                            return props.onChange(props.options);
                        }
                        return props.onChange(selected);
                    }}
                />
            );
        }

        return <ReactSelect {...props} />;
    };

    MySelect.propTypes = {
        options: PropTypes.array,
        value: PropTypes.any,
        onChange: PropTypes.func,
        allowSelectAll: PropTypes.bool,
        allOption: PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string
        })
    };

    MySelect.defaultProps = {
        allOption: {
            label: "Select all",
            value: "*"
        }
    };

    const MultiValue = props => (
        <components.MultiValue {...props}>
            <span>{props.data.label}</span>
        </components.MultiValue>
    );

    const Option = props => {
        return (
            <div>
                <components.Option {...props}>
                    <input
                        type="checkbox"
                        checked={props.isSelected}
                        onChange={() => null}
                    />{" "}
                    <label>{props.label}</label>
                </components.Option>
            </div>
        );
    };

    useEffect(() => {
        let str = '';
        if (optionSelected) {
            if (optionSelected.length > 0) {
                optionSelected.map((item) => {
                    str += `&${item.value}`
                    setAgeString(str.substring(1))
                })
            }
        }
        else if (!optionSelected) {
            setAgeString('none')
        }
    }, [optionSelected])

    useEffect(() => {
        let str = '';
        if (categories) {
            if (categories.length > 0) {
                categories.map((item) => {
                    str += `&${item.value}`
                    setCategoryString(str.substring(1))
                })
            }
        }
        else if (!categories) {
            setCategoryString('none')
        }
    }, [categories])

    useEffect(() => {
        let str = '';
        if (region) {
            if (region.length > 0) {
                region.map((item) => {
                    str += `&${item.value}`
                    setRegionString(str.substring(1))
                })
            }
        }
        else if (!region) {
            setRegionString('none')
        }
    }, [region])

    useEffect(() => {
        let str = '';
        if (city) {
            if (city.length > 0) {
                city.map((item) => {
                    str += `&${item.value}`
                    setCityString(str.substring(1))
                })
            }
        } else {
            setCityString('none')
        }
    }, [city])


    return (
        <div className="calculate3_container row no-gutters">
            <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2  col-2'>
                <Navbar />
            </div>
            <div className='middle_pane_calculate col-lg-10 col-sm-10 col-md-10 col-xs-10 col-10'>
                <TopBar />
                <div className='middle_pane_content row no-gutters'>
                    <div className='steps_pane col-lg-3 col-md-3 col-sm-0 col-xs-0 col-0'>
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 0.313rem #357AFF' }}>
                            <div className='steps_pane_title'>Step 1</div>
                            <div className='followers_title'>
                                Followers
                            </div>
                            <div className='followers_count'>
                                {NFormatter(params.followerRange.substring(params.followerRange.indexOf('=') + 1).replace('&', ' - '))}
                            </div>
                            <div className='budget_influencers_title'>Budget / Influencers</div>
                            <div className='budget_influencers_value'>
                                {
                                    params.budget.includes('budget') ?
                                        '₹' + params.budget.substring(params.budget.indexOf('=') + 1)
                                        :
                                        params.budget.substring(params.budget.indexOf('=') + 1) + ' Influencers'
                                }
                            </div>
                        </div>
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 0.313rem #D04B4B' }}>
                            <div className='steps_pane_title'>Step 2</div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('l=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Reels</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('t=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Static posts</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('os=') + 3)[0]}</div>
                                    <div className='deliverables_title'>Videos</div>
                                </div>
                            </div>
                            <div className='deliverables'>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('stories=') + 8)[0]}</div>
                                    <div className='deliverables_title'>Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('swipeupStories=') + 15)[0]}</div>
                                    <div className='deliverables_title'>Swipeup Stories</div>
                                </div>
                                <div className='deliverables_pane'>
                                    <div className='deliverables_value'>{params.deliverables.substring(params.deliverables.indexOf('v=') + 2)[0]}</div>
                                    <div className='deliverables_title'>Igtv</div>
                                </div>
                            </div>
                        </div>
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 0.313rem #32A737', paddingLeft: '2rem', paddingRight: '1rem', paddingTop: '1rem', paddingBottom: '0.25rem' }}>
                            <div className='steps_pane_title'>Step 3</div>
                            <div className='filter_pane'>
                                <img src={bdayIcon} /><div className='filter_value'>
                                    {
                                        optionSelected ?
                                            optionSelected.length > 0 ?
                                                optionSelected.length + 'age group'
                                                :
                                                '--'
                                            :
                                            null
                                    }
                                    , {gender.value}</div>
                            </div>
                            <div className='filter_pane'>
                                <img src={categoryIcon} /><div className='filter_value'>
                                    {categories ?
                                        categories.length > 0 ?
                                            categories.length + 'categories'
                                            :
                                            '--'
                                        : null
                                    }
                                </div>
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
                    <div className="content_pane col-lg-6 col-md-9 col-sm-12 col-xs-12 col-12">
                        <div className='step_count'>STEP 3</div>
                        <div className='step_title'>
                            Target Demographies
                        </div>
                        <div className="content_title">
                            Set the age and gender of your target audience
                        </div>
                        <div className="pane_1">
                            <div className="filter_1">
                                <label>Age group(s)</label>
                                <MySelect
                                    options={ageGroup}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{ Option, MultiValue }}
                                    onChange={setOptionSelected}
                                    allowSelectAll={true}
                                    value={optionSelected}
                                    blurInputOnSelect={false}
                                    className="filter_field_select"
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                            <div className="filter_1">
                                <label style={{ marginTop: '2.2rem' }}>Gender</label>
                                <ReactSelect
                                    options={genderOptions}
                                    onChange={setGender}
                                    value={gender}
                                    className="filter_field_select"
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                        </div>
                        <div className="pane_2_title">
                            Set the age and gender of your target audience
                        </div>
                        <div className="pane_2">
                            <div className="filter_2">
                                <label>Categories / Keywords</label>
                                <MySelect
                                    options={categoryOptions}
                                    onChange={setCategories}
                                    value={categories}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{ Option, MultiValue }}
                                    allowSelectAll={true}
                                    className="filter_field_select"
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                        </div>
                        <div className="pane_3_title">
                            Select the geographical region and/or major cities
                            to target
                        </div>
                        <div className="pane_3">
                            <div className="pane_3_filter">
                                <Input type="checkbox" className="checkbox_input" />
                                <label>State</label>
                                <MySelect
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{ Option, MultiValue }}
                                    className="filter_field_select"
                                    value={region}
                                    allowSelectAll={true}
                                    onChange={setRegion}
                                    options={regionOptions}
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                            <div className="pane_3_filter" style={{ marginTop: '5rem' }}>
                                <Input type="checkbox" className="checkbox_input" />
                                <label>Cities</label>
                                <MySelect
                                    options={cityOptions}
                                    isMulti
                                    closeMenuOnSelect={false}
                                    hideSelectedOptions={false}
                                    components={{ Option, MultiValue }}
                                    allowSelectAll={true}
                                    className="filter_field_select"
                                    value={city}
                                    onChange={setCity}
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                            <Button onClick={handleNext} className='next_btn'>Next</Button>
                        </div>
                    </div>
                    <div className="right_pane col-lg-3 col-md-0 col-sm-0 col-xs-0 col-0">
                        <div className="image_1"></div>
                        {/* <div className="image_2"></div> */}
                        {/* <span className='indicator' style={{ marginLeft: '2.5rem' }}>Specific</span>
                        <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculateFilters;