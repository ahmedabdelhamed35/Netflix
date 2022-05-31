import React from 'react'
import './featured.scss'
import { PlayArrow, InfoOutlined } from '@material-ui/icons'

export default function Featured({ type }) {
    return (
        <div className="featured">

            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}

            <img
                src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRG7rikDWORHKDiNlSIyzIoQqX7uqbmw_wTaUSQz8OzEsh_JMnBKevTdV-FeAWzXNYhqysAEyv2QxMQYilWrn7Lo90XT.jpg?r=0e9"
                alt=""
            />
            <div className="info">
                <img src="https://occ-0-2706-2705.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABfp5_exPnNUZnDZIPJsnSttBiba9tCC2-056d6YlKtS0ntsLFE4Wi2hd_fZXsbO_jXoztbMNX63wldZmThL1W6HDTyrB2PmtEO41ftM-A7sTZOzqPEqIXKKcNZ12_z6rNQTXuIMn-SY5aP80ByhYYeq-nXMSFcGyJntaHJDtm2iTCg.png?r=7c3"
                    alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ea voluptates mollitia minus omnis dignissimos autem vitae aperiam doloribus error eaque nemo enim earum accusantium necessitatibus maxime explicabo et atque!

                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

