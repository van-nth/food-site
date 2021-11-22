import React from 'react'

function CookingTable({ steps, current }) {
  return (
    <div className="cooking-table">
      {steps[current].headings && steps[current].imgs ? (
        <div className="w-full">
          <div className="grid grid-cols-3 my-4 font-normal">
            {steps[current].headings.map((h) => (
              <h3 key={h.id}>{h.name}</h3>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6">
            {steps[current].imgs.map((img) => (
              <div key={img.id}>
                <img 
                  src={img.src} 
                  alt="img" 
                  className="md:rounded-full text-center md:ml-20 md:w-56 md:h-56"
                />
                <span>{img.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="md:flex items-center justify-center space-x-6">
          {steps[current].sources.map((s) => (
            <div key={s.id}>
              <img src={s.src} alt="img" className="lg-img rounded-xl w-80 h-70" />
              <span>{s.desc}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CookingTable
