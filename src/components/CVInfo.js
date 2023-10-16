import cv from './images/SG_CV_2023.pdf'
import './css/CVInfo.css'

const CVInfo = () => {
    return ( 
        <div className="cvPDF">
        <iframe id="myPDF" src={cv} frameborder="0" title='cv'>
        </iframe>
        </div>
     );
}
 
export default CVInfo;