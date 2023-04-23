import { CgFacebook } from 'react-icons/cg'
import { SiInstagram } from 'react-icons/si'
import { VscGithubInverted } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Visa from '../assets/cardImgs/visa.svg'
import Master from '../assets/cardImgs/mastercard.svg'
import Amex from '../assets/cardImgs/amexcard.svg'
import Paypal from '../assets/cardImgs/paypal.svg'
import DinersClub from '../assets/cardImgs/dinersclub.svg'
import Discover from '../assets/cardImgs/discover.svg'

const Footer = () => {
    
    return (
        <footer className='p-10 footer bg-base-200 text-base-content footer-center'>
            <div className='grid grid-flow-col gap-4'>
                <Link to='https://zero-base.co.kr/' target='_blank' className='link link-hover'>
                    제로베이스
                </Link>
            </div>
            <ul className='flex'>
                <li data-tip='Visa' className='tooltip'><img src={Visa} /></li>
                <li data-tip='Master' className='tooltip'><img src={Master} /></li>
                <li data-tip='Amex' className='tooltip'><img src={Amex} /></li>
                <li data-tip='Paypal' className='tooltip'><img src={Paypal} /></li>
                <li data-tip='Diners Club' className='tooltip'><img src={DinersClub} /></li>
                <li data-tip='Discover' className='tooltip'><img src={Discover} /></li>
            </ul>
            <div className='grid grid-flow-col gap-4'>
                <Link to='https://www.facebook.com/0base' target='_blank' data-tip='facebook' className='tooltip'>
                    <CgFacebook  />
                </Link>
                <Link to='https://www.instagram.com/zerobase.official' target='_blank' data-tip='instagram' className='tooltip'>
                    <SiInstagram />
                </Link>
                <Link to='https://github.com/' target='_blank' data-tip='github' className='tooltip ml-1'>
                    <VscGithubInverted />
                </Link>
            </div>
            <div>
                <p>Copyright © 2023 Zero Base</p>
            </div>
        </footer>
    )
}

export default Footer