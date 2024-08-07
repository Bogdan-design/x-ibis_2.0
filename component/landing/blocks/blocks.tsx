'use client'
import React from 'react';

import {Heading} from "@/common/heading/heading";
import {BlocksCard} from "@/component/landing/blocks/blocksCard/blocksCard";
import {useTranslation} from "next-i18next";
import s from "@/common/heading/heading.module.scss";
import {Typography} from "@/component/ui/typography/typography";

export const Blocks = () => {

    const {t } = useTranslation();
    return (
        <div>
            <BlocksCard/>
        </div>
    );
};
