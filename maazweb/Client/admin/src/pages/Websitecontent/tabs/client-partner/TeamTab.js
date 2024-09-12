// Import useEffect from React
import React, { useState } from 'react';
import Button from '../../../../components/atoms/buttons/Button';
import AddClient from "../../../../components/sections/team/AddClient"
import style from './teamtab.module.css';
import ViewClient from '../../../../components/sections/team/ViewClient';

const TeamTab = () => {
    const [isAddClientVisible, setAddClientVisible] = useState(false);

    const openAddCarForm = () => {
        setAddClientVisible(true);
    };

    const closeAddCarForm = () => {
        setAddClientVisible(false);
    };

    return (
        <>
            <div className={style.transport_container}>
                <div className={style.headingContainer}>
                    <h2 className={style.heading}>Team</h2>
                    <Button btnText="Add New Partner"
                        primary
                        radius={"7px"}
                        size={"13px"}
                        btnClick={openAddCarForm} />
                </div>
                <div className={style.message}>

                    <div className={style.row}>
                        <ViewClient />
                    </div>


                </div>
            </div>

            {isAddClientVisible && <AddClient onClose={closeAddCarForm} />}
        </>
    );
};

export default TeamTab;