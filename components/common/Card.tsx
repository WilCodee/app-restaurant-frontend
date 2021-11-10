import React from 'react'
import Image from 'next/image'

import { Menu } from '../../interface/allMenu'
import { useMutation } from '@apollo/client'

import ORDER_MENU from '../../graphql/mutation'

const Card = ({ name, price, quantity, _id }: Menu) => {
  const [orderMenu] = useMutation(ORDER_MENU)

  const order = async () => {
    try {
      await orderMenu({ variables: { menuId: _id } })
      return alert('Orden Exitoso')
    } catch (err) {
      console.log(err)
      return alert('algo salio mal')
    }
  }

  return (
    <div className="border px-3 py-4 rounded hover:shadow-xl">
      <div className="relative border-2 border-green-400 rounded-2xl p-1">
        <Image
          src="/ceviche.jpg"
          width="180"
          height="160"
          className="rounded-2xl"
        />

        <div className="absolute -top-3 w-full flex justify-center">
          <span className="bg-green-400 px-3 rounded text-white">
            {price} $
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <span className="text-green-400">comida:</span>
          <span> {name}</span>
        </div>
        <div>
          <span className="text-green-400">cantidad:</span>
          <span> {quantity}</span>
        </div>
      </div>
      <div className="flex justify-center mt-2">
        <button
          onClick={order}
          className="border border-green-400 rounded-lg text-green-400 px-2 hover:bg-green-400 hover:text-white"
        >
          Ordenar
        </button>
      </div>
    </div>
  )
}

export default Card
