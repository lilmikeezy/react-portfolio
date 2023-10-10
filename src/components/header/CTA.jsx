import React from 'react'
import CV_Souksanane_Lithavong from '../../assets/CV_Souksanane_Lithavong.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV_Souksanane_Lithavong} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk !</a>
    </div>
  )
}

export default CTA