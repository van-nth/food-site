import React from 'react'
import CookingSteps from './CookingSteps'

function CookingMethod() {
  return (
    <div className="method-page">
      <h2 className="ribbon-heading text-center mt-4 md:ml-20">How to cook</h2>
      <CookingSteps />
    </div>
  )
}

export default CookingMethod
