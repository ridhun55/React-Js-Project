import React from 'react'
import QuestionAnswer from '../../../components/QuestionAnswer/QuestionAnswer'
import BlogSlider from '../../../components/Slider/BlogSlider'
import KeralaObjective from "./KeralaObjective.json"

const ObjectivePage2 = () => {
   return (
      <>
      <BlogSlider />
         <section className="section  section bg-primary pb-2 overflow-hidden z-2">
         <div className="container boxShadowIn_0">
            <div className="row pt-4">
               {KeralaObjective.Page2.map((val) => (
               <QuestionAnswer 
                     key={val.id}
                     roll={val.roll} 
                     Q_Malayalam={val.Q_Malayalam} 
                     A_Malayalam={val.A_Malayalam} 
                     Q_English={val.Q_English}
                     A_English={val.A_English}
                  />
               ))}
               
            </div>
         </div>
         </section>
         
      </>
   )
}

export default ObjectivePage2
