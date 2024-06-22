import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FcBullish } from 'react-icons/fc'
import { HiOutlineLogout, HiOutlineUsers, HiOutlineViewGrid } from 'react-icons/hi'


const linkClass =
	'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'
    const DASHBOARD_SIDEBAR_LINKS = [
        {
            key: 'dashboard',
            label: 'Dashboard',
            path: '/',
            icon: <HiOutlineViewGrid />
        },
        {
            key: 'customers',
            label: 'Customers',
            path: '/customers',
            icon: <HiOutlineUsers />
        },
    ]
    const DASHBOARD_SIDEBAR_BOTTOM_LINKS=[
        {
            
        }
    ]
export default function SideBar() {
	return (
		<div className=" bg-pink-100 w-60 p-3 flex flex-col">
			<div className="flex items-center gap-2 px-1 py-3">
				<FcBullish fontSize={24} />
				<span className="text-neutral-200 text-lg">Ticket Platform</span>
			</div>
			<div className="py-8 flex flex-1 flex-col gap-0.5">
				{DASHBOARD_SIDEBAR_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
			</div>
			<div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
				{DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
					<SidebarLink key={link.key} link={link} />
				))}
				<div >
					<span className="text-xl">
						<HiOutlineLogout />
					</span>
					Logout
				</div>
			</div>
		</div>
	)
}

function SidebarLink({ link }) {
	const { pathname } = useLocation()

	return (
		<Link
			to={link.path}
			className=""
		>
			<span className="text-xl">{link.icon}</span>
			{link.label}
		</Link>
	)
}
