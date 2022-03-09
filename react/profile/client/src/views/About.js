/* eslint-disable jsx-a11y/alt-text */
import "../style.css";
import famImg from "../family.JPG"



const About =()=>{
    return (
        <div class="container-fluid bio">
            <div class="row">
                {/* <div id="who" class="col-md-12 infoFirst"> */}
                    <div class="col col-offset-1 aboutInfo">
                        <h1>About Eric</h1>
                        <h3>Criminal Justice Major Turned Coder</h3>
                        <p style={{
                            textAlign: "justify",
                            paddingLeft: 25,
                        }}
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu feugiat sem. Etiam suscipit erat non libero dignissim vehicula. Sed at magna mattis, faucibus justo mattis, vehicula nunc. Ut pellentesque, ex ut lobortis dictum, tortor libero rhoncus ante, sed convallis quam purus eu lacus. Duis nec odio tempor, elementum justo sit amet, lacinia ipsum. Integer vestibulum scelerisque nulla, quis sodales quam imperdiet vitae. Sed hendrerit mollis purus, sit amet viverra diam sodales sit amet. Maecenas in accumsan diam, gravida dignissim neque.</p>
                    </div>
                    <div class="col col-offset-1 aboutImg">
                        <img
                        // sizes="(max-width: 479px) 100vw, (max-width: 767px) 87vw, (max-width: 991px) 90vw, 50vw"
                        // loading="lazy"
                        class="frame img-fluid" 
                        style={{
                            minWidth: 400,
                            width:600,
                            borderRadius: 15
                        }}
                        src={famImg}
                        />
                    </div>
                {/* </div> */}
            </div>
                
            {/* <div class="row">
                <div class="col">
                    <h1>Languages I Code In</h1>

                </div>
            </div> */}
        </div>
        
        
    )
}



export default About;