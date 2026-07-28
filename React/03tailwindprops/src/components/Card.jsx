import React from 'react'

function Card({pateern="normal"}) {
  return (
    <div class="flex flex-col items-center p-7 rounded-2xl">
  <div>
    <img class="size-48 shadow-xl rounded-md" alt="" src="https://cdn.pixabay.com/photo/2023/03/02/09/02/flower-7824871_1280.jpg" />
  </div>
  <div class="flex">
    <span class="text-2xl font-medium">Class Warfare</span>
    <span class="font-medium text-sky-500">{pateern}</span>
    <span class="flex">
      <span>No. 4</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
</div>
  )
}

export default Card