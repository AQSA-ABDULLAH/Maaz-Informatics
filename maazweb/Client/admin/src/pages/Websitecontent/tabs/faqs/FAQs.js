// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import AddFaqs from "../../../../components/sections/faqs/AddFaqs";
import style from '../career/jobs.module.css';
import ViewJob from '../../../../components/sections/career/ViewJobs';

const FAQTab = () => {
    const [isAddClientVisible, setAddClientVisible] = useState(false);

    const openAddCarForm = () => {
        setAddClientVisible(true);
    };

    const closeAddCarForm = () => {
        setAddClientVisible(false);
    };

    return (
        <>
            <div className={style.career_container}>
                <div className={style.headingContainer}>
                    <h2 className={style.heading}>FAQs</h2>
                    <Button btnText="Add New faq"
                        primary
                        radius={"7px"}
                        size={"13px"}
                        btnClick={openAddCarForm} />
                </div>
                <div className={style.message}>

                    {/* <div className={style.row}>
                        <ViewJob />
                    </div> */}


                </div>
            </div>

            {isAddClientVisible && <AddFaqs onClose={closeAddCarForm} />}
        </>
    );
};

export default FAQTab;