import { IoStatsChart } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { FaCopy } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

import FilledButton from "./FilledButton";
import OutlinedButton from "./OutlinedButton";

import './LinkCard.css'

const LinkCard = (props) => {
  
  const {redirectURL, originalURL, clickedCount, createDate} = props

  return (
    <div className="link-card">
      {/* Link Details */}
      <div className="link-details">
        
        <div>
          <a href={redirectURL}>{redirectURL.split("://")[1]}</a>
        </div>

        <div>
          <p>{originalURL}</p>
        </div>

        <div className="link-stats">
          <div><IoStatsChart /> {clickedCount} impressions</div>
          <div><MdDateRange/> {createDate}</div>
        </div>

      </div>
      {/* Buttons */}
      <div className="cta-groups">
        <div><FilledButton><FaCopy/> Copy</FilledButton></div>
        <div><OutlinedButton color="secondary"><FaShareAlt/> Share</OutlinedButton></div>
        <div><OutlinedButton color="danger"><MdEdit/> Edit</OutlinedButton></div>
      </div>
    </div>
  )

}

export default LinkCard