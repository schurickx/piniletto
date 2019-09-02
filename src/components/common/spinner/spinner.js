import React from 'react';

import './spinner.css'

const Spinner = () => {
    return (
        <div class="lds-css ng-scope">
            <div style="width:100%;height:100%" class="lds-ball2">
                <div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Spinner;