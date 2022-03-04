/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import famImg from "../family.JPG"



const About =()=>{
    return (
        <div id ="ericBio" class="row bio">
            {/* <div class="col-md-12 d-flex justify-content-around infoFirst"> */}
                <div class="col-md col-md-offset-1 bioText ">
                    <h1>About Eric</h1>
                    <h3>Criminal Justice Major Turned Coder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu feugiat sem. Etiam suscipit erat non libero dignissim vehicula. Sed at magna mattis, faucibus justo mattis, vehicula nunc. Ut pellentesque, ex ut lobortis dictum, tortor libero rhoncus ante, sed convallis quam purus eu lacus. Duis nec odio tempor, elementum justo sit amet, lacinia ipsum. Integer vestibulum scelerisque nulla, quis sodales quam imperdiet vitae. Sed hendrerit mollis purus, sit amet viverra diam sodales sit amet. Maecenas in accumsan diam, gravida dignissim neque.</p>
                </div>
                <div class="col-md col-md-offset-1 aboutImg">
                    {/* <h2>photos here</h2> */}
                    <img
                    class="frame img-responsive" 
                    style={{
                        width:500,
                        height:350
                    }}
                    src={famImg}
                    />
                </div>
            {/* </div> */}
        </div>
        
    )
}



export default About;