import cssStyle from "./about.module.css"

console.log(cssStyle, "CSS-Style");

function AboutPage(){
 return (<h1 className={cssStyle.beige} style={{textAlign: "center"}} >This is AboutPage</h1>)
}

export default AboutPage