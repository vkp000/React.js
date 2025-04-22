import React from 'react'

function Card({username = "Ghost", btnText="La La La"}) {
    console.log(username)
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mb-4">
        <img
          src="https://images.pexels.com/photos/31568336/pexels-photo-31568336/free-photo-of-majestic-alpine-mountain-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2 "
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
        {username}
          </span>
          <h2 className="text-xl font-semibold tracking-wide mb-1">Lorem ipsum dolor</h2>
          <button>{btnText}</button>
        </div>
        <p className="text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta
          amet
        </p>
      </div>
    )
}

export default Card








/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            class="size-48 shadow-xl rounded-md"
            alt=""
            src="https://images.pexels.com/photos/31568336/pexels-photo-31568336/free-photo-of-majestic-alpine-mountain-at-sunrise.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
        <div class="flex items-center md:items-start">
          <span class="text-2xl font-medium">Class Warfare</span>
          <span class="font-medium text-sky-500">The Anti-Patterns</span>
          <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div> */