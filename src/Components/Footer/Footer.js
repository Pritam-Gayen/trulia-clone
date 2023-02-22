import React from "react"
import { Button, Card, Container } from "react-bootstrap"
import { FaSearch, FaTwitter, FaFacebookF, FaInstagram, FaPinterest} from "react-icons/fa"; 
import "./Footer.css"

//___ pictures_____________________________
import buyHomePic from "./Pictures/BuyAHome.png" 
import rentHomePic from "./Pictures/RentAHome.png"
import seeNeighbourPic from "./Pictures/SeeNeighborhoods.png"  
import FooterPic from "./Pictures/FooterPic.png"
// ___________________________________________

const Footer = () =>{
    return(
        <>
            <Container className="d-block" style={{width:'600px', marginTop:'100px'}}>
                <h1 style={{textAlign:'center'}}>See how Trulia can help</h1>
            </Container>
            <Container style={{marginBottom:'100px', justifyContent:'space-around'}} className="d-flex">
                <Card style={{ width: '18rem', alignContent: 'center', border:'none' }}>
                    <Card.Img variant="top" src={buyHomePic} style={{height:'200px'}} />
                    <Card.Body style={{textAlign:'center'}}>
                        <Card.Title style={{textAlign:'center'}}>Buy a home</Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </Card.Text>
                        <Button className="card-button">Find a home</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', alignContent: 'center', border:'none' }}>
                    <Card.Img variant="top" src={rentHomePic} style={{height:'200px'}}/>
                    <Card.Body style={{textAlign:'center'}}>
                        <Card.Title style={{textAlign:'center'}}>Rent a home</Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                        With 35+ filters and custom keyword search, Trulia can help you easily find a home or apartment for rent that you'll love.                       
                        </Card.Text>
                        <Button className="card-button">Find a Rental</Button>
                    </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem', alignContent: 'center', border:'none' }}>
                    <Card.Img variant="top" src={seeNeighbourPic} style={{height:'200px'}}/>
                    <Card.Body style={{textAlign:'center'}}>
                        <Card.Title style={{textAlign:'center'}}>See neighborhoods</Card.Title>
                        <Card.Text style={{textAlign:'center'}}>
                        With more neighborhood insights than any other real estate website, we've captured the color and diversity of communities.                       
                        </Card.Text>
                        <Button className="card-button">Learn More</Button>
                    </Card.Body>
                    </Card>
            </Container>
            <Container className="d-block" style={{width:'500px'}}>
                <h5 style={{textAlign: 'center', margin: '30px'}}>Check out a neighborhood</h5>
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
                <h5 style={{textAlign: 'center', marginTop: '80px', marginBottom:'80px', fontWeight:'bold', color:'rgb(2, 2, 77)'}}>
                    discover {'💭'} a place {'🏠'} you'll love {'\u2764'} to live
                </h5>
            </Container>
            <Container className="d-flex" style={{justifyContent:'space-around'}}>
                    <Card style={{border:'none', margin: 0, padding: 0}}>
                        <h6 className="footer-links-heading"><a className="footer-links-heading" href="#home">Real Estate Markets</a></h6>

                        <p className="footer-links"><a className="footer-links" href="#home">Alaska Real Estate</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Albama Real Estate</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Arkansas Real Estate</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Arizona Real Estate</a></p>
                    </Card>
                    <Card style={{border:'none', margin: 0, padding: 0}}>
                        <h6 className="footer-links-heading"><a className="footer-links-heading" href="#home">Popular Searches</a></h6>

                        <p className="footer-links"><a className="footer-links" href="#home">Houses for Rent Near Me</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Pet Friendly Apparments Near Me</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Open Houses Near Me</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Townhomes for Rent Near Me </a></p>
                    </Card>
                    <Card style={{border:'none', margin: 0, padding: 0}}>
                        <h6 className="footer-links-heading"><a className="footer-links-heading" href="#home">Explore Trulia</a></h6>

                        <p style={{margin: 0, padding: 0}}> <a className="footer-links" href="https://www.facebook.com"><FaFacebookF style={{fontSize:'12px'}}/></a>   <a className="footer-links" href="https://www.facebook.com">Facebook</a></p>
                        <p style={{margin: 0, padding: 0}}> <a className="footer-links" href="https://www.twitter.com"><FaTwitter style={{fontSize:'12px'}}/></a>   <a className="footer-links" href="https://www.twitter.com">Twitter</a></p>
                        <p style={{margin: 0, padding: 0}}> <a className="footer-links" href="https://www.instagram.com"><FaInstagram style={{fontSize:'12px'}}/></a>   <a className="footer-links" href="https://www.instagram.com">Instagram</a></p>
                        <p style={{margin: 0, padding: 0}}> <a className="footer-links" href="https://www.pinterest.com"><FaPinterest style={{fontSize:'12px'}}/></a>   <a className="footer-links" href="https://www.pinterest.com">Pinterest</a></p>
                        
                    </Card>
                    <Card style={{border:'none', margin: 0, padding: 0}}>
                        <h6 className="footer-links-heading"><a className="footer-links-heading" href="#home">For Professionals</a></h6>

                        <p className="footer-links"><a className="footer-links" href="#home">Popular Counties</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Rental communities</a></p>
                        <p className="footer-links"><a className="footer-links" href="#home">Real Estate Leads</a></p>
                        
                    </Card>
                </Container>
                <Container style={{width:'500px'}}>
                    <img style={{width:'500px'}} src={FooterPic} alt="altpic"></img>
                </Container>
        </>
    )
}
export {Footer}