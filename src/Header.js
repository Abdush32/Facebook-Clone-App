import React from 'react'
import "./header.css"
import fbicon from "./fb.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './contextApi/StateProvider';

const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="header">
            
<div className="header_left">
<img src={fbicon}  alt="fbicons" />
<div className="header_input header_input_Search">
<SearchIcon />
<input type="text" placeholder="Search facebook" />
</div>

</div>

<div className="header_middle">

        <div className="header_options header_options_active">
        <HomeIcon  fontSize="large "/>
        </div>

        <div className="header_options">
        <FlagIcon  fontSize="large" />
        
        </div>
        <div className="header_options">
        <SubscriptionsIcon fontSize="large" />
        </div>

        <div className="header_options">
        <StorefrontIcon fontSize="large" />
        </div>

        <div className="header_options">
        <SupervisedUserCircleIcon fontSize="large" />
        </div>    

</div>

<div className="header_right">
<div className="header_info">
<Avatar src={user.photoURL}/>
<h3>{user.displayName}</h3>
</div>
<IconButton>
<AddIcon />
</IconButton>

<IconButton>
<ForumIcon />
</IconButton>

<IconButton>
<NotificationsActiveIcon />
</IconButton>

<IconButton>
<ExpandMoreIcon />
</IconButton>


</div>


        </div>
    )
}

export default Header
