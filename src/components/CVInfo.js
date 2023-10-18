import cv from './images/SG_CV_2023.pdf'
import './css/CVInfo.css'

const CVInfo = () => {
    return (
        <div className="cvInfo">
        <p><a href={cv} download="Samantha_Gillies.pdf" className="downloadCV">Click here to download</a></p>
        <div className="cvPDF">
        <iframe id="myPDF" src={cv} frameborder="0" title='cv'>
        </iframe>
        </div>
        </div>
     );
}
 
export default CVInfo;