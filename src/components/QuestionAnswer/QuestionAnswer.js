import React from 'react'

const QuestionAnswer = (props) => {
   return (
      <>
         <div className="col-lg-12 col-xl-12">
            <div className="container">
     
               <div className="qa d-flex  mb-3">
                  <div className="roll boxShadowOut_0 textShadow_0">{props.roll}</div>
                  <div className="p-2 boxShadowOut_0">
                     <div className="d-flex qab flex-column">
                        <div className="p-2 d-flex textShadow_0">
                           <div className="qm mala">{props.Q_Malayalam}</div>
                           <div className="am mala flex-grow-1">{props.A_Malayalam}</div>
                        </div>
                        <span className="hr"></span>
                        <div className="p-2 d-flex textShadow_0">
                           <div className="qe eng">{props.Q_English}</div>
                           <div className="ae eng flex-grow-1">{props.A_English}</div>
                        </div>
                     </div>
                  </div>
               </div>

            
            </div>
         </div>

      </>
   )
}

export default QuestionAnswer
