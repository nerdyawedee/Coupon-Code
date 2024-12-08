import TrendingCoupon from "./TrendingCoupon"; 
import Coupons from './Coupons';
import PaginationComp from './PaginationComp';
import SearchCoupon from "./SearchCoupon";

function Home(){
    return (
        <>  
            <SearchCoupon />
            <TrendingCoupon />
            <Coupons />
            <PaginationComp />
        </>
    )
}

export default Home;