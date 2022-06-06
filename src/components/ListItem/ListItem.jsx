import './listitem.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react'
import { PlayArrow, ThumbUpAltOutlined, ThumbDownAltOutlined } from '@material-ui/icons';
import transitions from '@material-ui/core/styles/transitions';

export default function ListItem({ index }) {

    const [isHoverd, setISHoverd] = useState(false);
    const trailer =
        "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    return (
        <div className="ListItem"
            onMouseEnter={() => setISHoverd(true)}
            onMouseLeave={() => setISHoverd(false)}
            style={{ left: isHoverd && index * 225 - 50 + index * 2.5 }}

        >


            <img src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWJ9gHTe7kitsMnKwP8hUGOINcBOMCMkYreYwYb5MGTIeIBiFAS8fJCMqUy6jmo1hfYCxHKJfDz0KOp042--im1qLun2.jpg?r=9ff" alt="" />
            {isHoverd && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="iteminfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownAltOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span> 1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est ab ea odit aspernatur sed vitae quaerat, illum ipsa dolorem iure, iusto enim provident temporibus cupiditate hic ex quisquam.
                        </div>
                        <div className="genre">
                            Action
                        </div>
                    </div>
                </>
            )}

        </div>

    )
}
