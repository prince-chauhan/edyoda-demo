import { React, useState } from 'react';
import { Dropdown, Plan, Point, Step } from '../components';

export const Payment = () => {
    const [active, setActive] = useState(0)
    const handleSelection = (id) => {
        setActive(id)
    }
    const plans = [
        {
            id: -99,
            duration: 12,
            cost: 99,
            disbaled: true,
            label: 'Offer Expired',
            labelColor: 'red-bc'
        },
        {
            id: 0,
            duration: 12,
            cost: 179,
            label: 'Recommended',
            labelColor: 'green-bc'
        },
        {
            id: 1,
            duration: 6,
            cost: 149,
        },
        {
            id: 2,
            duration: 3,
            cost: 99,
        },
    ]
    return (
        <div className='container'>
            <header>
                <div className='top-header'>
                    <div className='left-menu'>
                        <div className='logo'>
                            EDYODA
                        </div>
                        <Dropdown name={'Courses'} />
                        <Dropdown name={'Programs'} />
                    </div>
                    <div className='right-menu'>
                        <div className='search-icon'>
                            <img src={require('../assets/svg/search.svg').default} alt='Search courses' className='basic-img' />
                        </div>
                        <div className='text-btn'>
                            Log in
                        </div>
                        <div className='circular-btn'>
                            <span className='text-white'>JOIN NOW</span>
                        </div>
                    </div>
                </div>
            </header>
            <div className='main-body'>
                <section>
                    <div className='row'>
                        <div className='content'>
                            <div className='main-heading'>
                                Access curated courses worth
                                <br />
                                <span className='highlighted-text'>
                                    ₹ <span className='striked-price'>18,500</span>
                                </span>
                                &#8203;
                                at just
                                &#8203;
                                <span className='highlighted-text'>
                                    <span className='offer-price'>₹ 99</span>
                                </span>
                                &#8203;
                                per year!
                            </div>
                            <Point img={require('../assets/svg/book.svg').default} content={<><span className='point-highlights'>100+ </span> Job relevant courses</>} />
                            <Point img={require('../assets/svg/watch.svg').default} content={<><span className='point-highlights'>20,000+ </span> Hours of content</>} />
                            <Point img={require('../assets/svg/tv.svg').default} content={<><span className='point-highlights'>Exclusive </span> webinar access</>} />
                            <Point img={require('../assets/svg/degree.svg').default} content={<>Scholarship worth <span className='point-highlights'>₹94,500</span> </>} />
                            <Point img={require('../assets/svg/ads.svg').default} content={<><span className='point-highlights'>Ad Free </span> learning experience</>} />
                        </div>
                        <div className='subs-form'>
                            <div className='steps-section'>
                                <Step count={1} title={'Sign Up'} />
                                <Step count={2} title={'Subscribe'} />
                            </div>
                            <div className='step-heading'>
                                Select your subscription plan
                            </div>
                            <div className='step-content'>
                                {plans.map((plan, index) => (
                                    <Plan key={plan.id} months={plan.duration} cost={plan.cost} selected={active === plan.id} setThis={handleSelection} disbaled={plan.disbaled} id={plan.id} label={plan.label} labelColor={plan.labelColor} />

                                ))}
                            </div>
                            <div className='pricing-calculations'>
                                <div className='label-n-price'>
                                    <div className='label'>
                                        Subscription Fee
                                    </div>
                                    <div className='price'>₹18,500</div>
                                </div>
                                <div className='offer-box-outer'>
                                    <div className='offer-box'>
                                        <div className='label-n-price'>
                                            <div className='label offer-color semi-bold'>
                                                Limited time offer
                                            </div>
                                            <div className='price'>- ₹18,401</div>
                                        </div>
                                        <div className='offer-condition offer-color'>
                                            <div className='offer-img'>

                                                <img src={require('../assets/svg/clock.svg').default} className='basic-img' alt='' />
                                            </div>
                                            Offer valid till 25th March 2023
                                        </div>
                                    </div>
                                </div>
                                <div className='label-n-price'>
                                    <div className='label'>
                                        <span className='semi-bold'>Total </span>
                                        (Incl. of 18% GST)
                                    </div>
                                    <div className='price'>₹{plans.find(o => o.id === active).cost}</div>
                                </div>
                            </div>
                            <div className='btn-grp'>
                                <div className='no-bc-red-btn'>
                                    Cancel
                                </div>
                                <div className='bc-green-btn'>
                                    Proceed to pay
                                </div>
                            </div>
                            <div className='razorpay-label'>
                                <img src={require('../assets/images/razorpay.png')} className='basic-img' alt='' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}