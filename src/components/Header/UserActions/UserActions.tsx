import { CartResume } from './Cart/Cart';
import * as UA from './Styles';
import { UserResume } from './User/User';

export function UserActions(){
    return(
        <UA.BoxResume>
            <UserResume/>
            <CartResume/>
        </UA.BoxResume>
    )   
}