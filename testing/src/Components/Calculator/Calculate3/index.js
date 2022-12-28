import React, { useState } from "react";
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
]

const regionOptions = [
    {}
]

const cityOptions = [
    {}
]

function CalculateFilters() {

    const [optionSelected, setOptionSelected] = useState(null);
    const [gender, setGender] = useState('');
    const [categories, setCategories] = useState(null);
    const [region, setRegion] = useState(null);
    const [city, setCity] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const handleNext = () => {
        let str = '';
        if (optionSelected.length > 0) {
            optionSelected.map((item) => {
                str += `&${item.value}`
            })
        }
        navigate(`/calculate/${params.budget}/${params.followerRange}/${params.deliverables}/demography=age=${str.substring(1)}&gender=${gender.value}`)
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


    return (
        <div className="calculate3_container">
            <Navbar />
            <div className='middle_pane_calculate'>
                <TopBar />
                <div className='middle_pane_content'>
                    <div className='steps_pane'>
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #357AFF' }}>
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
                        <div className='steps_pane_part_inactive' style={{ borderLeft: 'solid 5px #D04B4B' }}>
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
                        <div className='steps_pane_part' style={{ borderLeft: 'solid 5px #32A737' }}>
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
                    <div className="content_pane">
                        <div className='step_count'>Step3</div>
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
                                <ReactSelect
                                    options={categoryOptions}
                                    onChange={setCategories}
                                    value={categories}
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
                                <label>Region</label>
                                <ReactSelect
                                    className="filter_field_select"
                                    value={region}
                                    onChange={setRegion}
                                />
                                {/* <Input className="filter_field" /> */}
                            </div>
                            <div className="pane_3_filter">
                                <Input type="checkbox" className="checkbox_input" />
                                <label>Cities</label>
                                <ReactSelect
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
                            <Button onClick={handleNext}>Next</Button>
                        </div>
                    </div>
                    <div className="right_pane">
                        <div className="image_1"></div>
                        <div className="image_2"></div>
                        <span className='indicator' style={{ marginLeft: '2.5rem' }}>Specific</span>
                        <span className='indicator' style={{ marginLeft: '12rem' }}>Broad</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CalculateFilters;