import React from 'react'
import { Nav, Image } from 'react-bootstrap';
import './sidebar.scss'
import DashboardIcon from '../../../assets/icon/DashboardIcon';
import ProductIcon from '../../../assets/icon/ProductIcon';
import CompanyIcon from '../../../assets/icon/CompanyIcon';
import CompetitiorIcon from '../../../assets/icon/CompetitiorIcon';
import IntegrationIcon from '../../../assets/icon/IntegrationIcon';
import ScreplogIcon from '../../../assets/icon/ScreplogIcon';
import ReportsIcon from '../../../assets/icon/ReportsIcon';
import { useLocation } from 'react-router-dom';

function Siderbar({isActive,isMobile}) {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div className='sidebar-wrapper'>
            <div className="sidebar" style={isMobile ? {left:isActive ? '15px' : '-500px'} : {}}>
                <div>
                    <Nav className="flex-column sidebar-wrapper-flex">
                        <Nav.Link href="/" className={location.pathname === '/' ? 'active' : ''}><DashboardIcon /> <span>Dashboard</span></Nav.Link>
                        <Nav.Link href="/product" className={location.pathname === '/product' ? 'active' : ''}><ProductIcon /> <span>Products</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/company' ? 'active' : ''} href="/company"><CompanyIcon /> <span>Company</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/competitor' ? 'active' : ''} href="/competitor"><CompetitiorIcon /> <span>Competitor</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/integration' ? 'active' : ''} href="/integration"><IntegrationIcon /> <span>integration</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/scraplog' ? 'active' : ''} href="/scraplog"><ScreplogIcon /> <span>Scrap Log</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/report' ? 'active' : ''} href="/report"><ReportsIcon /> <span>Reports</span></Nav.Link>
                        <Nav.Link className={location.pathname === '/account' ? 'active' : ''} href="/account"><ReportsIcon /> <span>Accounts</span></Nav.Link>
                    </Nav>
                </div>
                <div className='sidebar-user-login'>
                    <div>
                        <div className='d-flex align-items-center justify-content-lg-between w-100 gap-2'>
                            <div className='d-flex align-items-center gap-3'>
                            <div className='nav-user-section-wrapper'>
                                <Image src='/assets/images/user.png' />
                            </div>
                            <div className='nav-user-text-wrapper'>
                                <h5>
                                    John Smith
                                </h5>
                                <p>Johnsmith@gmail.com</p>
                            </div>
                            </div>
                            <div className='nav-user-text-wrapper '>
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_756_2289)">
                                        <path d="M12.4999 10.956C12.0391 10.956 11.6666 11.3283 11.6666 11.787V15.1111C11.6666 15.569 11.2932 15.9421 10.8332 15.9421H8.33319V3.47685C8.33319 2.76716 7.87986 2.13309 7.19826 1.89709L6.95153 1.81476H10.8332C11.2932 1.81476 11.6666 2.18787 11.6666 2.64588V5.13893C11.6666 5.59756 12.0391 5.9699 12.4999 5.9699C12.9607 5.9699 13.3331 5.59756 13.3331 5.13893V2.64588C13.3331 1.27139 12.2115 0.152832 10.8332 0.152832H1.87498C1.84324 0.152832 1.81669 0.166983 1.78587 0.171092C1.74574 0.167744 1.70744 0.152832 1.6667 0.152832C0.74752 0.152832 0 0.89813 0 1.81476V16.7731C0 17.4828 0.453334 18.1168 1.13494 18.3528L6.14999 20.0199C6.31997 20.0723 6.48904 20.0972 6.66665 20.0972C7.58583 20.0972 8.33319 19.3518 8.33319 18.4352V17.6042H10.8332C12.2115 17.6042 13.3331 16.4856 13.3331 15.1111V11.787C13.3331 11.3283 12.9607 10.956 12.4999 10.956Z" fill="#4A46E2" />
                                        <path d="M19.7565 7.87534L16.4231 4.55133C16.1849 4.31365 15.8265 4.24213 15.5149 4.37086C15.2041 4.49975 15.0007 4.80301 15.0007 5.13883V7.63188H11.6674C11.2074 7.63188 10.834 8.00407 10.834 8.46285C10.834 8.92162 11.2074 9.29381 11.6674 9.29381H15.0007V11.7869C15.0007 12.1227 15.2041 12.4259 15.5149 12.5548C15.8265 12.6836 16.1849 12.612 16.4231 12.3745L19.7565 9.05035C20.0822 8.72548 20.0822 8.20021 19.7565 7.87534Z" fill="#4A46E2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_756_2289">
                                            <rect width="20" height="19.9446" fill="white" transform="translate(0 0.152466)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Siderbar