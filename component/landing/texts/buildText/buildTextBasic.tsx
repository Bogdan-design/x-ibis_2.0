import React from 'react';
import {ButtonShowMore} from "@/component/landing/texts/buildText/buttonShowMore/buttonShowMore";
import {useServiceBuildStore} from "@/store/serviceBuild";
import {Typography} from "@/component/ui/typography/typography";
import {useTranslation} from "next-i18next";


export const BuildTextBasic = () => {

    const show =useServiceBuildStore(state => state.show)

    const {t}= useTranslation();

    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <Typography as={'li'} variant={'title'}>{t('build.options.0.description.0.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.0.description.0.option_1')}</li>
                <li>{t('build.options.0.description.0.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'2'}>{t('build.options.0.description.1.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.0.description.1.option_1')}</li>
                <li>{t('build.options.0.description.1.option_2')}</li>
                <li>{t('build.options.0.description.1.option_3')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'3'}>{t('build.options.0.description.2.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.0.description.2.option_1')}</li>
                <li>{t('build.options.0.description.2.option_2')}</li>
                <li>{t('build.options.0.description.2.option_3')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'4'}>{t('build.options.0.description.3.optionTitle')}</Typography>

            </ol>
            <ul>
                <li>{t('build.options.0.description.3.option_1')}</li>
                <li>{t('build.options.0.description.3.option_2_1')} {show &&<span>{t('build.options.0.description.3.option_2_2')}</span>}</li>
                {show && <li>{t('build.options.0.description.3.option_3')}</li>}
            </ul>
            {show && <>

                <ol>
                    <Typography as={'li'} variant={'title'} value={'5'}>{t('build.options.0.description.4.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.0.description.4.option_1')}
                    </li>
                    <li>{t('build.options.0.description.4.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'6'}>{t('build.options.0.description.5.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.0.description.5.option_1')}
                    </li>
                    <li>{t('build.options.0.description.5.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'7'}>{t('build.options.0.description.6.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.0.description.6.option_1')}
                    </li>
                    <li>{t('build.options.0.description.6.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'8'}>{t('build.options.0.description.7.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.0.description.7.option_1')}
                    </li>
                    <li>{t('build.options.0.description.7.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'9'}>{t('build.options.0.description.8.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.0.description.8.option_1')}
                    </li>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <li>{t('build.options.0.description.8.option_2')}</li>
                </ul>
            </>}
            <ButtonShowMore t={t} show={show}/>
        </div>

    );
};
export const BuildTextAdvanced = () => {
    const show =useServiceBuildStore(state => state.show)

    const {t}= useTranslation();

    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <Typography as={'li'} variant={'title'}>{t('build.options.1.description.0.optionTitle')}</Typography>

            </ol>
            <ul>
                <li>{t('build.options.1.description.0.option_1')}</li>
                <li>{t('build.options.1.description.0.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'2'}>{t('build.options.1.description.1.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.1.description.1.option_1')}
                </li>
                <li>{t('build.options.1.description.1.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'3'}>{t('build.options.1.description.2.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.1.description.1.option_1')}</li>
                <li>{t('build.options.1.description.1.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'4'}>{t('build.options.1.description.3.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.1.description.3.option_1')}</li>
                <li>{t('build.options.1.description.3.option_2')}</li>
            </ul>
            {show && <>

                <ol>
                    <Typography as={'li'} variant={'title'} value={'5'}>{t('build.options.1.description.4.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.1.description.4.option_1')}
                    </li>
                    <li>{t('build.options.1.description.4.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'6'}>{t('build.options.1.description.5.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.1.description.5.option_1')}
                    </li>
                    <li>{t('build.options.1.description.5.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'7'}>{t('build.options.1.description.6.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.1.description.6.option_1')}
                    </li>
                    <li>{t('build.options.1.description.6.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'8'}>{t('build.options.1.description.7.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.1.description.7.option_1')}
                    </li>
                    <li>{t('build.options.1.description.7.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'9'}>{t('build.options.1.description.8.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.1.description.8.option_1')}
                    </li>
                    <li>{t('build.options.1.description.8.option_2')}</li>
                </ul>
            </>}
            <ButtonShowMore t={t} show={show}/>
        </div>

    );
};
export const BuildTextProfessional = () => {
    const show =useServiceBuildStore(state => state.show)
    const {t}= useTranslation();
    return (
        <div style={{textAlign: 'start'}}>
            <ol>
                <Typography as={'li'} variant={'title'}>{t('build.options.2.description.0.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.2.description.0.option_1')}</li>
                <li>{t('build.options.2.description.0.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'2'}>{t('build.options.2.description.1.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.2.description.1.option_1')}</li>
                <li>{t('build.options.2.description.1.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'3'}>{t('build.options.2.description.2.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.2.description.2.option_1')}</li>
                <li>{t('build.options.2.description.2.option_2')}</li>
            </ul>
            <ol>
                <Typography as={'li'} variant={'title'} value={'4'}>{t('build.options.2.description.3.optionTitle')}</Typography>
            </ol>
            <ul>
                <li>{t('build.options.2.description.3.option_1')}</li>
                {show &&<li>{t('build.options.2.description.3.option_2')}</li>}
            </ul>
            {show && <>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'5'}>{t('build.options.2.description.4.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.2.description.4.option_1')}
                    </li>
                    <li>{t('build.options.2.description.4.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'6'}>{t('build.options.2.description.5.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.2.description.5.option_1')}
                    </li>
                    <li>{t('build.options.2.description.5.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'7'}>{t('build.options.2.description.6.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.2.description.6.option_1')}
                    </li>
                    <li>{t('build.options.2.description.6.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'8'}>{t('build.options.2.description.7.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.2.description.7.option_1')}
                    </li>
                    <li>{t('build.options.2.description.7.option_2')}</li>
                </ul>
                <ol>
                    <Typography as={'li'} variant={'title'} value={'9'}>{t('build.options.2.description.8.optionTitle')}</Typography>
                </ol>
                <ul>
                    <li>{t('build.options.2.description.8.option_1')}
                    </li>
                    <li>{t('build.options.2.description.8.option_2')}</li>
                </ul>

            </>
            }
            <ButtonShowMore t={t} show={show}/>
        </div>

    );
};

