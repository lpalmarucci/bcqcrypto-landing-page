import React from 'react'
import { StyledGridWrapper } from './style'
import { IAdvantage } from './model/Advantage'
import AdvantageCard from './AdvantageCard/AdvantageCard'
import CloudData from 'assets/icons/cloud-data.png'
import Award from 'assets/icons/award.png'
import Trade from 'assets/icons/trade.png'
import User from 'assets/icons/user.png'

const advantages: IAdvantage[] = [
    {icon: CloudData, title: "Secure storage", text: "We store the vast majority of the digital assets in secure offline storage."},
    {icon: User, title: "Protected by insurance", text: "Cryptocurrency stored on our servers is covered by our insurance policy."},
    {icon: Award, title: "Industry best practices", text: "Besnik crypto supports a variety of the most popular digital crypto currencies."},
    {icon: Award, title: "Trade assets", text: "Discover new and innovative crypto assets with over 200 spot trading pairs and 25 margin."},
]

const Advantages = () => {

    const variants = {
        hidden: {},
        show: {       
            transition: {
                type: "ease",
                staggerChildren: .3,
                delayChildren: .3,
            }
        }
    }

    return (
        <StyledGridWrapper
            variants={variants}
            initial="hidden"
            animate="show"
            viewport={{
                once: true,
                amount: "all"
            }}
        >
        {advantages.map((advantage,idx) => (
            <AdvantageCard key={idx} {...advantage}/>
        ))}
        </StyledGridWrapper>
    )
}

export default Advantages
