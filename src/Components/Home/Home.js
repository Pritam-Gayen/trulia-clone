import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Carousel} from "react-bootstrap";
import "./Home.css"
import { FaSearch } from "react-icons/fa";
import { AnimateHeading1 } from "./AnimateHeading1";

const Home = () =>{
    return(
        <>
            <Container id="front-image" className="d-flex align-items-center justify-content-center">
                <Container id="inner_container" className="align-items-center justify-content-center">
                    <h1 className="homepage-heading"><AnimateHeading1 str="Discover"/> <AnimateHeading1 str="a"/> <AnimateHeading1 str="place"/></h1> 
                    <h1 className="homepage-heading">you'll love to live</h1>
                    <Container className="d-flex align-items-center justify-content-center">
                        <div className="buy-rent-sold">Buy</div>
                        <div className="buy-rent-sold">Rent</div>
                        <div className="buy-rent-sold">Sold</div>
                    </Container>
                    <br></br>
                    <Container className="d-flex align-items-center justify-content-center">
                        <div className="input-group md-form form-sm form-1 pl-0">
                            <input
                            className="form-control my-0 py-1"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                            />
                            <div className="input-group-prepend" >
                                <span className="input-group-text lighten-3 search-color" id="search_icon_div">
                                    <FaSearch style={{color:'white', fontSize: '30px'}}/>
                                </span>
                            </div>
                            
                        </div>
                    </Container>
                </Container>
            </Container>
            <Container className="align-items-center justify-content-center margin-up-100">
                <Container className="d-block width-600">
                    <h1 style={{textAlign:'center'}}>Explore homes on Trulia</h1>
                    <p style={{textAlign:'center'}}>Take a deep dive and browse homes for sale, original neighborhood photos, resident reviews and local insights to find what is right for you.</p>
                </Container>
            </Container>

            <Carousel variant="dark" indicators={false}>
                <Carousel.Item>
                    <Container className="d-flex carousel-item-holder">
                        <div className="big-img-container">
                            <div className="big-img" >
                            </div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div className="big-img-container">
                            <div className="big-img" ></div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="d-flex carousel-item-holder">
                        <div className="big-img-container">
                            <div className="big-img" >
                            </div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div className="big-img-container">
                            <div className="big-img" ></div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                    </Container>
                </Carousel.Item>
                <Carousel.Item>
                    <Container className="d-flex carousel-item-holder">
                        <div className="big-img-container">
                            <div className="big-img" >
                            </div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                            <div className="small-img-container">
                                <div className="small-img" ></div>
                                <a className="article-link" href="link">View Homes</a>
                            </div>
                        </div>
                        <div className="big-img-container">
                            <div className="big-img" ></div>
                            <a className="article-link" href="link">View Homes</a>
                        </div>
                    </Container>
                </Carousel.Item>
            </Carousel>
        </>
    )
}


export {Home}