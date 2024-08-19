import * as React from 'react';
import {Typography} from "@/component/ui/typography/typography";

type Props = {
};
export const VirtualTextBasic: React.FC<Props> = () => {
    return (
        <Typography as={'li'} style={{textAlign:'center'}} variant={'text'}>1vCPU / 1GB RAM / 10GB SSD</Typography>
    );
};

export const VirtualTextAdvanced: React.FC<Props> = () => {
    return (
        <Typography as={'li'} style={{textAlign:'center'}} variant={'text'}>2VCPU / 8GB RAM / 80GB SSD</Typography>
    );
};

export const VirtualTextProfessional: React.FC<Props> = () => {
    return (
        <Typography as={'li'} style={{textAlign:'center'}} variant={'text'}>14VCPU / 94GB RAM / 100GB SSD</Typography>
    );
};