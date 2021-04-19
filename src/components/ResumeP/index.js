import React from "react";
import LunaPdf from "../../images/LunaPdf.pdf";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";



function ResumeP() {
    return (



<div class="embed-responsive embed-responsive-16by9" id="embed" >
<iframe class="embed-responsive-item" src={LunaPdf}></iframe>
</div>


    );
}

export default ResumeP;