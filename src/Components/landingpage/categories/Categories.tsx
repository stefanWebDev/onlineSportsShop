import React from "react";
import bike from "./images/bike.jpg";
import weights from "./images/weights.jpg";
import fighting from "./images/fighting.jpg";
import running from "./images/running.jpg";
import './Categories.css'


class Categories extends React.Component {
    
    private categories = ['fighting', 'weights', 'running', 'bike']



    render(){
       const imageLinks: string[] = [weights, running, fighting, bike];



        return (
            <div id="category-div">
                {/* {imageLinks.map(link => (
                    <div className="image-div">                     
                        <a href={'/products/'+ this.getCategoryFromImageLink(link)}>
                            <img className="category-img" src={link} alt="" />  
                        </a>
                    </div>
                 ))}                  */}

                    <div className="image-div">                      
                            <img className="category-img" src={weights} alt="" />  
                    </div>
                    <div className="image-div">                     
                            <img className="category-img" src={bike} alt="" />  
                    </div>
                    <div className="image-div">                     
                            <img className="category-img" src={fighting} alt="" />  
                    </div>
                    <div className="image-div">                     
                            <img className="category-img" src={running} alt="" />  
                    </div>

            </div>
        )
    }

    // getCategoryFromImageLink(imageLink: string){   
    //     this.categories.forEach((el => {
    //         if(imageLink.includes(el)){       
    //             // this.setState({
    //             //     categoryURI: el
    //             // })
    //             return el;
    //         }
    //     }))
    // }
}

export default Categories;