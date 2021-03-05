import React from 'react';

function ServiceModal() {
    return(
        <div>
            {/* Button trigger modal */}
            <button type="button" className="service-modal-btn btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
                See Service Details
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                    <p className="p-title">3 prenatal visits ranging from 1-2 hours each that include:</p>
                    <p className="service-details">o health history</p>
                    <p>o questions/concerns</p>
                    <p>o mental health screening</p>
                    <p>o provider questions</p>
                    <p>o comfort measures class</p>
                    <p>o partner preparations</p>
                    <p>o birth plan formation</p>
                    <p>o end of pregnancy reflections</p>
                    <p className="p-title">• Labor support •</p>
                    <p>o Placement on my calendar</p>
                    <p>o 24/7 on call support from two weeks before due date to two weeks postpartum</p>
                    <p>o My physical presence at your preferred labor and birth location(s)</p>
                    <p className="p-title">• Postpartum Support •</p>
                    <p>o Up to 2 hours of support after birth</p>
                    <p>o Breastfeeding troubleshooting</p>
                    <p>o 1 2 hour home visit for debriefing</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceModal;