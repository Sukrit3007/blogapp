import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const ToDo = () => {
  return (

    <tr>
        <td className="py-2 px-4 border-b">1</td>
        <td className="py-2 px-4 border-b">Study</td>
        <td className="py-2 px-4 border-b">learn nextjs</td>
        <td className="py-2 px-4 border-b">pending</td>
        <td className="py-2 px-4 border-b">
            <Button variant="destructive" >Delete</Button>
            <Button>Done</Button>
        </td>
    </tr>

  )
}

export default ToDo
