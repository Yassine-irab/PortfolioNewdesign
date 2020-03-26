import React, { Component } from "react"

//Import Component
import Icon from "../assets/github.svg";

class Portfolio extends Component {
    render() {

        return (
            <>
                <div className="portfolioSection">
                <div className="contain">
                    <div className="row">

                        <div className="column">
                            <h2>Portfolio</h2>
                            <div className="card">
                                <div>
                                    <a href="/">
                                        <Icon />
                                        <h4>Project</h4>
                                        <p>Development of websites under WordPress, and front end frameworks</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="card">
                                <div>
                                    <a href="/">
                                        <Icon />
                                        <h4>Project</h4>
                                        <p>Development of websites under WordPress, and front end frameworks</p>
                                    </a>
                                </div>
                            </div>
                            <div className="card">
                                <div>
                                    <a href="/">
                                        <Icon />
                                        <h4>Project</h4>
                                        <p>Development of websites under WordPress, and front end frameworks</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="column">
                            <div className="empty"></div>
                            <div className="card">
                                <div>
                                    <a href="/">
                                        <Icon />
                                        <h4>Project</h4>
                                        <p>Development of websites under WordPress, and front end frameworks</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>

                </div>

            </>
        )
    }
}

export default Portfolio