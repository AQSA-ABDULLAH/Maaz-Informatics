// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import AddJob from "../../../../components/sections/career/AddJob";
import style from './jobs.module.css';
import ViewJob from '../../../../components/sections/career/ViewJobs';

const JobTab = () => {
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
                    <h2 className={style.heading}>Current Jobs</h2>
                    <Button btnText="Add New Job"
                        primary
                        radius={"7px"}
                        size={"13px"}
                        btnClick={openAddCarForm} />
                </div>
                <div className={style.message}>

                    <div className={style.row}>
                        <ViewJob />
                    </div>


                </div>
            </div>

            {isAddClientVisible && <AddJob onClose={closeAddCarForm} />}
        </>
    );
};

export default JobTab;