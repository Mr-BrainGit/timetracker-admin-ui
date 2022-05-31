import { DashboardOutlined, DashboardRounded, LineStyle, Timeline } from '@material-ui/icons'
import React from 'react'
import './SideBar.css'

export default function SideBar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <DashboardOutlined className='sidebarIcon'/>
                        Tableau de bord
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analyses
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                    <li className="sidebarListItem">
                        <Timeline className='sidebarIcon'/>
                        Analyses
                    </li>
                    <li className="sidebarListItem">
                        <LineStyle className='sidebarIcon'/>
                        Home
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
