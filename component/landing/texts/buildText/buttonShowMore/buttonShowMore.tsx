import * as React from 'react';
import {Typography} from "@/component/ui/typography/typography";
import {useServiceBuildStore} from "@/store/serviceBuild";
import s from './buttonShowMore.module.scss'

type Props = {
    show: boolean;
    className?: string
};
export const ButtonShowMore: React.FC<Props> = ({show}) => {
    const setClickHandler = useServiceBuildStore(state => state.onClickHandler)

    const onClickHandler = () => {
        setClickHandler(!show);
    }

    return (
        <div className={s.buttonShowMoreContainer}>
            <div className={s.buttonShowMore} onClick={onClickHandler}>
                <Typography className={s.buttonShowMoreText} variant={'text'}>{show ?  'Less...' : 'Show more...'}</Typography>
            </div>
        </div>
    );
};