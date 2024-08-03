import React from 'react'

function Footer() {
    return (
        <div className=''>
            <footer className="footer footer-center bg-base-300 text-base-content py-10">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer