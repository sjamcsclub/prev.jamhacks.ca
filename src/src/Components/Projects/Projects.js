import React, { Component } from 'react';

import { Carousel } from 'antd';

import "./Projects.css"

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    onChange(a, b, c) {
        console.log(a, b, c);
    }


    render() { 
        return (
            <div className="projects-div">
                <div className="projects-title-div" data-aos="fade-up">Sample Projects You Could Work On</div>
                <div className="projects-description-div" data-aos="fade-up">
                    You’ll get to work on projects like. Something words and words and words. A short summary 
                    about the fellowship program. A short summary about the fellowship program. 
                    A short summary about the fellowship program. A short summary about the.
                </div>
                <div className="projects-carousel-div" data-aos="fade-up">
                    <Carousel afterChange={() => this.onChange()} autoplay>
                        <div className="projects-carousel-content-div" data-aos="fade-up">
                            <div className="projects-carousel-cards-div">
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-carousel-content-div" data-aos="fade-up">
                            <div className="projects-carousel-cards-div">
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-carousel-content-div" data-aos="fade-up">
                            <div className="projects-carousel-cards-div">
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="projects-carousel-content-div" data-aos="fade-up">
                            <div className="projects-carousel-cards-div">
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                                <div className="projects-carousel-card-item">
                                    <img src="https://www.communitech.ca/content/images/logos/Communitech_CMYK.png" width="180px" height="28px" style={{marginTop : "30px", marginBottom : "15px"}}></img>
                                    <div className="projects-carousel-card-item-description">This is a project description. This is supposed to describe the project through the description. This is filler text to finish the description.</div>
                                    <div className="projects-carousel-card-item-tags-div">
                                        <div className="projects-carousel-card-item-tag-item">node.js</div>
                                        <div className="projects-carousel-card-item-tag-item">react</div>
                                        <div className="projects-carousel-card-item-tag-item">frontend</div>
                                        <div className="projects-carousel-card-item-tag-item">backend</div>
                                        <div className="projects-carousel-card-item-tag-item">machine learning</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>

            </div>
        );
    }
}
 
export default Projects;