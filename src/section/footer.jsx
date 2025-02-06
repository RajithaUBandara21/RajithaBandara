import React from 'react';

const footer = () => {
    const currentYear = new Date().getFullYear();
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.envato.com" target="_blank" rel="noreferrer">
                            <span className="copy">&copy; {currentYear} </span>
                        </a>
                    </div>
                    <div className="col-md-6">
                        <div className="de_social-icons">
                            <a href="https://www.linkedin.com/in/rajithaubandara/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/RajithaUBandara21" target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a>
                            <a href="https://www.instagram.com/whos_rajitha/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
                            <a href="https://web.facebook.com/rajitha.bandara.7737" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;