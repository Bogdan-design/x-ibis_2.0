import React from 'react';
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {useTranslation} from "next-i18next";

export const More = ({dataIndex,services}:{dataIndex:number,services:string}) => {
    const { t } = useTranslation();
    return (
        <section>
            <div>

            <Heading landing {...pagesData[dataIndex]} t={t} page={services}/>
            </div>
        </section>
    );
};
