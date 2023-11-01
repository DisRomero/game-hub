import { FaCreditCard, FaCcMastercard, FaCcJcb, FaCcVisa } from 'react-icons/fa';
import { SiAmericanexpress, SiHackclub, SiCashapp, SiCardano } from 'react-icons/si';
import { RiBankCard2Fill, RiSwitchFill, RiCashLine } from 'react-icons/ri';
import { IconType } from 'react-icons/';
import { Bank } from '../hooks/useUsers';
import { HStack, Icon } from '@chakra-ui/react';

interface Props {
    bank: Bank;
}
/*
maestro - FaCreditCard
mastercard - FaCcMastercard
jcb - FaCcJcb
visa-electron - FaCcVisa
americanexpress - SiAmericanexpress
diners-club-carte-blanche - FaCcDinersClub
bankcard - RiBankCard2Fill
instapayment - SiCashapp
switch - RiSwitchFill
diners-club-enroute - SiHackclub
solo - RiCashLine
*/

export const CardBankIcon = ({ bank }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        maestro: FaCreditCard,
        mastercard: FaCcMastercard,
        jcb: FaCcJcb,
        visaelectron: FaCcVisa,
        americanexpress: SiAmericanexpress,
        dinersclubcarteblanche: SiCardano,
        bankcard: RiBankCard2Fill,
        instapayment: SiCashapp,
        switch: RiSwitchFill,
        dinersclubenroute: SiHackclub,
        solo: RiCashLine,
    }

    return (
        <>
            <HStack marginY={2}>
                <Icon as={iconMap[bank.cardType.replace('-', '')]} color='gray.500' />
            </HStack>
        </>
    )
}
