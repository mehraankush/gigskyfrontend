"use client"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import { useState } from "react"
import { UpiFraud } from "@/services"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


export const LandingContent = () => {

  const [upiIs, setupiIs] = useState('')
  const [message, setMessage] = useState('')

  const handleupi = async () => {
    try {
      const res = await UpiFraud(upiIs);
      console.log(upiIs)
      console.log(res)
      const { message } = res?.data
      setMessage(message)
      // console.log(data)
    } catch (err) {
      console.log('Error in upi fraud')
    }
  }

  return (
    <div className='px-10 pb-20'>

      <div className='flex justify-center items-center'>
        <div className="flex flex-col gap-5">
          <Input type="text" placeholder="Enter Upi" onChange={(e) => setupiIs(e.target.value)} />
          <Dialog>

            <DialogTrigger><Button onClick={handleupi} className="bg-white/80 text-black font-semibold hover:bg-white"> Check</Button></DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>{message}</DialogTitle>
                {/* <DialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </DialogDescription> */}
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>

    </div>
  )
}
