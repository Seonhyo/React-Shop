import styled from "@emotion/styled"
import ButtonDetail from "./ButtonDetail";
import { Link } from "react-router-dom"
import DarkModeToggleBtn from "./DarkModeToggleBtn";
import { CgMenu } from 'react-icons/cg'
import { HiOutlineShoppingBag } from 'react-icons/hi'

const PageHeader = () => {

    //const headerCategoryBtn = ["패션", "액세서리", "디지털"];
    //const categories = ["fashion", "jewelery", "electronics"];

    return (
        <Header>
            <div className='flex w-full xl:container xl:m-auto items-center'>
                <label htmlFor='side-menu' className='flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto'>
                    <CgMenu />
                </label>
                <h1 className='shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2'>
                    <Link to="/" className='text-lg dark:text-white font-bold whitespace-nowrap'>React Shop</Link>
                </h1>
                <ButtonDetail />
            </div>
            <div className='flex items-center px-2 '>
                <DarkModeToggleBtn />
                <div className='dropdown ml-2 mr-2'>
                    <input type='text' placeholder='검색' className='fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 
                    sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 
                    dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all value="search"' />
                </div>
                <HiOutlineShoppingBag size='48px' />
            </div>
        </Header>
    )
}

const Header = styled.nav`
    padding: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
`

export default PageHeader