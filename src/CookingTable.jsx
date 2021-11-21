import React from 'react'

function CookingTable({ steps, current }) {
  return (
    <table className="rwd-table w-full">
      <tr className="grid grid-cols-3">
        {steps[current].headings.map((h) => (
          <th key={h.id}>{h.name}</th>
        ))}
      </tr>
      {steps[current].imgs ? (
        <tr className="grid grid-cols-3">
          {steps[current].imgs.map((img) => (
            <img id={img.id} src={img.src} alt="img"/>
          ))}
        </tr>
      ) : (
        <h3>No data</h3>
      )}
    </table>
  )
}

export default CookingTable
