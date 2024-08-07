import React from 'react';
import {pagesData} from "@/lid/data";
import {Heading} from "@/common/heading/heading";
import {useTranslation} from "next-i18next";

export const More = () => {
    const {t} = useTranslation();
    return (
        <section>
            <Heading landing t={t}>more</Heading>
        </section>
    );
};
